// Global state
let isMobileMenuOpen = false;
let isVideoPlaying = false;
let isVideoMuted = false;
let showEmbedVideo = false;

// Initialize icons when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
});

// Mobile menu functionality
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Close mobile menu if open
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
        
        // Calculate offset for fixed header
        const headerHeight = document.getElementById('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
    }
}

// YouTube video functionality
function toggleEmbedVideo() {
    showEmbedVideo = !showEmbedVideo;
    const videoContainer = document.getElementById('video-container');
    const playButton = document.getElementById('play-video-btn');
    
    if (showEmbedVideo) {
        // Show embedded YouTube video
        const youtubeVideoId = '3p43BO4v8Js'; // Your video ID
        const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;
        
        videoContainer.innerHTML = `
            <iframe
                width="100%"
                height="100%"
                src="${embedUrl}"
                title="Elevator Pitch Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="border-radius: 0.75rem;">
            </iframe>
        `;
        
        if (playButton) {
            playButton.textContent = 'Hide Video';
        }
    } else {
        // Show thumbnail
        const youtubeVideoId = '3p43BO4v8Js';
        const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;
        
        videoContainer.innerHTML = `
            <div class="video-thumbnail-container" style="position: relative; width: 100%; height: 100%; background: linear-gradient(135deg, #374151 0%, #111827 100%); border-radius: 0.75rem; overflow: hidden;">
                <img src="${thumbnailUrl}" alt="Video Thumbnail" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;">
                <div class="video-overlay" style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); display: flex; align-items: center; justify-content: center;">
                    <div class="play-button-container" style="text-align: center;">
                        <button onclick="toggleEmbedVideo()" class="video-play-btn" style="width: 5rem; height: 5rem; background-color: #dc2626; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; transition: background-color 0.3s; cursor: pointer; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                            <span style="color: white; font-size: 2rem; margin-left: 0.25rem;">▶</span>
                        </button>
                        <p style="color: white; font-size: 1.125rem; font-weight: 500; margin: 0;">
                            Watch My Elevator Pitch
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        if (playButton) {
            playButton.textContent = 'Play Video';
        }
    }
}

// Video player functionality (legacy - for fallback)
function toggleVideoPlay() {
    isVideoPlaying = !isVideoPlaying;
    
    // Update main play button
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const videoStatus = document.querySelector('.video-status');
    
    // Update control play button
    const controlPlayIcon = document.querySelector('.control-play-icon');
    const controlPauseIcon = document.querySelector('.control-pause-icon');
    
    if (isVideoPlaying) {
        // Show pause icons, hide play icons
        if (playIcon) playIcon.classList.add('hidden');
        if (pauseIcon) pauseIcon.classList.remove('hidden');
        if (controlPlayIcon) controlPlayIcon.classList.add('hidden');
        if (controlPauseIcon) controlPauseIcon.classList.remove('hidden');
        if (videoStatus) videoStatus.textContent = 'Playing...';
        
        // Start progress animation
        startProgressAnimation();
    } else {
        // Show play icons, hide pause icons
        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
        if (controlPlayIcon) controlPlayIcon.classList.remove('hidden');
        if (controlPauseIcon) controlPauseIcon.classList.add('hidden');
        if (videoStatus) videoStatus.textContent = 'Click to Play';
        
        // Stop progress animation
        stopProgressAnimation();
    }
}

function toggleVideoMute() {
    isVideoMuted = !isVideoMuted;
    
    const volumeIcon = document.querySelector('.volume-icon');
    const muteIcon = document.querySelector('.mute-icon');
    
    if (isVideoMuted) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
    }
}

// Progress bar animation
let progressInterval;

function startProgressAnimation() {
    const progressBar = document.getElementById('progress');
    let currentProgress = 0;
    const maxProgress = 35; // Simulate 35% progress
    
    progressInterval = setInterval(() => {
        if (currentProgress < maxProgress && isVideoPlaying) {
            currentProgress += 0.5;
            progressBar.style.width = currentProgress + '%';
        } else {
            clearInterval(progressInterval);
        }
    }, 100);
}

function stopProgressAnimation() {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
}

// Portfolio links tracking (for analytics if needed)
function trackPortfolioClick(linkType) {
    console.log(`Portfolio link clicked: ${linkType}`);
    // Add analytics tracking here if needed
}

// Contact form functionality (if you add a contact form later)
function handleContactSubmission(event) {
    event.preventDefault();
    // Add contact form handling here
    console.log('Contact form submitted');
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Delay to ensure page is fully loaded
    setTimeout(() => {
        initScrollAnimations();
    }, 500);
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // ESC key closes mobile menu
    if (event.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
    }
    
    // Space bar toggles video play (when video player is focused)
    if (event.key === ' ' || event.code === 'Space') {
        const videoPlayer = document.getElementById('video-player');
        if (document.activeElement === videoPlayer || videoPlayer.contains(document.activeElement)) {
            event.preventDefault();
            toggleVideoPlay();
        }
    }
});

// Add click event listeners for portfolio links
document.addEventListener('DOMContentLoaded', function() {
    // Track portfolio clicks
    const portfolioLinks = document.querySelectorAll('.btn-red, .btn-blue');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim();
            trackPortfolioClick(linkText);
        });
    });
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.portfolio-card, .experience-card, .project-card, .content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Social media sharing functionality
function shareOnSocialMedia(platform) {
    const url = window.location.href;
    const title = 'Ahmed Mohammed - Personal Website';
    const text = 'Check out Ahmed Mohammed\'s personal website';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Print functionality
function printPage() {
    window.print();
}

// Download resume functionality
function downloadResume() {
    // Create a temporary link to download a placeholder resume
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Ahmed Mohammed - Resume\n\nThis is a placeholder resume file.\nReplace this with your actual resume.';
    link.download = 'Ahmed_Mohammed_Resume.txt';
    link.click();
}

// Email functionality
function sendEmail() {
    const email = 'ahmed@example.com';
    const subject = 'Contact from Personal Website';
    const body = 'Hello Ahmed,\n\nI visited your personal website and would like to get in touch.\n\nBest regards,';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Add event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
    // Contact Me button
    const contactButtons = document.querySelectorAll('.btn-primary');
    contactButtons.forEach(button => {
        if (button.textContent.includes('Contact')) {
            button.addEventListener('click', sendEmail);
        }
    });
    
    // Download Resume button
    const resumeButtons = document.querySelectorAll('.btn-secondary');
    resumeButtons.forEach(button => {
        if (button.textContent.includes('Resume')) {
            button.addEventListener('click', downloadResume);
        }
    });
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken images with a placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
            this.alt = 'Image not available';
        });
    });
});

// Console welcome message
console.log(`
🚀 Ahmed Mohammed's Personal Website
📧 Contact: ahmed@example.com
🔗 GitHub: github.com/ahmad-mohammed
💼 LinkedIn: linkedin.com/in/ahmad-mohammed

Thanks for visiting! Feel free to reach out.
`);