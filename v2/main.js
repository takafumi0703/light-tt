// ========================================
// Light Touch Technology v2 JavaScript
// ========================================

// DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Light Touch Technology v2 - Initialized');
    
    // Initialize functions
    initializeCards();
    initializeSmoothScroll();
});

// Initialize Cards
function initializeCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Add fade-in animation on load
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
        
        // Add click event
        card.addEventListener('click', function() {
            console.log(`Card clicked: ${this.querySelector('h3').textContent}`);
        });
    });
}

// Initialize Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility: Log message
function log(message) {
    console.log(`[LTT v2] ${message}`);
}

// Utility: Show notification (placeholder)
function showNotification(message, type = 'info') {
    log(`Notification (${type}): ${message}`);
    // TODO: Implement actual notification UI
}

// Export functions for external use
window.LTTv2 = {
    log,
    showNotification
};
