// MARS Academy - Main JavaScript

// ==========================================
// Initialize AOS (Animate On Scroll)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0,
    });
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// ==========================================
// Sticky Navigation with Scroll Effect
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// Counter Animation (Stats Section)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for counter animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ==========================================
// Form Submission Feedback (Optional Enhancement)
// ==========================================
const forms = document.querySelectorAll('form[action*="web3forms"]');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Re-enable button after 3 seconds (in case submission fails)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for actual anchor links, not just "#"
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==========================================
// Lazy Load Images (Performance Enhancement)
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Add active state to current page in navigation
// ==========================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link, nav a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('text-primary');
    }
});

// ==========================================
// Gallery Filter Functionality
// ==========================================
const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Initialize gallery - show only photos by default
function initializeGallery() {
    galleryItems.forEach(item => {
        const itemType = item.getAttribute('data-type');
        if (itemType === 'video') {
            item.classList.add('hidden');
        }
    });
}

// Call initialization on page load
initializeGallery();

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filter = btn.getAttribute('data-filter');

        // Filter gallery items
        galleryItems.forEach(item => {
            const itemType = item.getAttribute('data-type');

            if (filter === 'photos' && itemType === 'photo') {
                item.classList.remove('hidden');
            } else if (filter === 'videos' && itemType === 'video') {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// Lightbox Gallery Functionality
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxVideoSource = document.getElementById('lightbox-video-source');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;
let visibleItems = [];

// Update visible items based on current filter
function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
}

// Open lightbox
function openLightbox(index) {
    updateVisibleItems();
    currentIndex = index;
    showMedia();
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxVideo.pause();
    document.body.style.overflow = ''; // Restore scrolling
}

// Show media in lightbox
function showMedia() {
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const video = item.querySelector('video');

    if (img) {
        // Show image
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxImg.classList.remove('hidden');
        lightboxVideo.classList.add('hidden');
        lightboxVideo.pause();
    } else if (video) {
        // Show video
        const source = video.querySelector('source');
        lightboxVideoSource.src = source.src;
        lightboxVideo.load();
        lightboxVideo.classList.remove('hidden');
        lightboxImg.classList.add('hidden');
    }
}

// Navigate to previous item
function showPrevious() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showMedia();
}

// Navigate to next item
function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showMedia();
}

// Add click listeners to gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateVisibleItems();
        const visibleIndex = visibleItems.indexOf(item);
        if (visibleIndex !== -1) {
            openLightbox(visibleIndex);
        }
    });
});

// Lightbox controls
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevious);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNext);
}

// Close lightbox on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevious();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    }
});

// ==========================================
// Console Log for Development
// ==========================================
console.log('🚀 MARS Academy Website Loaded Successfully!');
console.log('Built with Tailwind CSS + AOS');
console.log('Website by Khan Marketing Group - https://khanmarketinggroup.com');
