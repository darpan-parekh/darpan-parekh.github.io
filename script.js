document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year Update
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Scroll Reveal Animations (Intersection Observer)
    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });

    // 3. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('mobile-active');
            
            // Toggle hamburger icon if fontawesome is used
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('mobile-active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('mobile-active') && !navLinks.contains(e.target) && e.target !== menuToggle) {
                navLinks.classList.remove('mobile-active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 4. Smooth Navigation Active Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navAnchors.forEach((anchor) => {
                    anchor.classList.remove('active');
                    if (anchor.getAttribute('href') === `#${sectionId}`) {
                        anchor.classList.add('active');
                    }
                });
            }
        });
    });

    // 5. Interactive Horizontal Timeline with Auto-Rotate
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const contentBlocks = document.querySelectorAll('.timeline-content-block');
    const timelineContainer = document.querySelector('.timeline-horizontal');
    const detailPanel = document.querySelector('.timeline-detail-panel');
    
    let activeTimelineIndex = 0;
    let timelineTimer = null;
    const rotateInterval = 15000; // 15 seconds

    function setActiveMilestone(index) {
        if (index < 0 || index >= timelineNodes.length) return;
        
        activeTimelineIndex = index;
        
        // Remove active state from all nodes & blocks
        timelineNodes.forEach(node => node.classList.remove('active'));
        contentBlocks.forEach(block => block.classList.remove('active'));
        
        // Add active state to matching index
        timelineNodes[index].classList.add('active');
        
        const milestoneId = timelineNodes[index].getAttribute('data-milestone');
        const targetBlock = document.getElementById(`milestone-${milestoneId}`);
        if (targetBlock) {
            targetBlock.classList.add('active');
        }
    }

    function startAutoRotation() {
        stopAutoRotation();
        timelineTimer = setInterval(() => {
            let nextIndex = (activeTimelineIndex + 1) % timelineNodes.length;
            setActiveMilestone(nextIndex);
        }, rotateInterval);
    }

    function stopAutoRotation() {
        if (timelineTimer) {
            clearInterval(timelineTimer);
            timelineTimer = null;
        }
    }

    // Node Interaction
    timelineNodes.forEach((node, idx) => {
        // Switch on click
        node.addEventListener('click', () => {
            setActiveMilestone(idx);
        });

        // Switch on hover
        node.addEventListener('mouseenter', () => {
            setActiveMilestone(idx);
            stopAutoRotation();
        });
    });

    // Pause on Hover
    if (timelineContainer) {
        timelineContainer.addEventListener('mouseenter', stopAutoRotation);
        timelineContainer.addEventListener('mouseleave', startAutoRotation);
    }
    if (detailPanel) {
        detailPanel.addEventListener('mouseenter', stopAutoRotation);
        detailPanel.addEventListener('mouseleave', startAutoRotation);
    }

    // Initialize Timeline
    if (timelineNodes.length > 0) {
        setActiveMilestone(0);
        startAutoRotation();
    }
});
