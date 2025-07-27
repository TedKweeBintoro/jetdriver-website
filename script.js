// Handle ride type selection to show/hide destination or hours field
document.addEventListener('DOMContentLoaded', function() {
    const rideTypeSelect = document.getElementById('ride-type');
    const destinationGroup = document.getElementById('destination-group');
    const hoursGroup = document.getElementById('hours-group');
    
    if (rideTypeSelect) {
        rideTypeSelect.addEventListener('change', function() {
            if (this.value === 'destination') {
                destinationGroup.style.display = 'block';
                if (hoursGroup) hoursGroup.style.display = 'none';
            } else if (this.value === 'hourly') {
                destinationGroup.style.display = 'none';
                if (hoursGroup) hoursGroup.style.display = 'block';
            } else {
                destinationGroup.style.display = 'none';
                if (hoursGroup) hoursGroup.style.display = 'none';
            }
        });
    }
    
    // Handle quick booking form on index page
    const quickBookingForm = document.getElementById('quick-booking-form');
    if (quickBookingForm) {
        quickBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const pickup = document.getElementById('pickup').value;
            const rideType = document.getElementById('ride-type').value;
            const destination = document.getElementById('destination').value;
            
            // Build URL with query parameters
            const params = new URLSearchParams();
            params.append('pickup', pickup);
            params.append('ride-type', rideType);
            if (rideType === 'destination' && destination) {
                params.append('destination', destination);
            }
            
            // Redirect to contact page with parameters
            window.location.href = '/contact?' + params.toString();
        });
    }
    
    // Pre-fill contact form from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('pickup')) {
        const pickupInput = document.getElementById('pickup');
        if (pickupInput) pickupInput.value = urlParams.get('pickup');
    }
    if (urlParams.has('ride-type')) {
        const rideTypeInput = document.getElementById('ride-type');
        if (rideTypeInput) {
            rideTypeInput.value = urlParams.get('ride-type');
            // Trigger change event to show/hide fields
            rideTypeInput.dispatchEvent(new Event('change'));
        }
    }
    if (urlParams.has('destination')) {
        const destinationInput = document.getElementById('destination');
        if (destinationInput) destinationInput.value = urlParams.get('destination');
    }
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Add active class to current nav link
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop() || 
            (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
            link.style.color = 'var(--accent-gold)';
        }
    });
});