// Common header and footer components
document.addEventListener('DOMContentLoaded', function() {
    // Header HTML
    const headerHTML = `
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <img src="media/jet-drivers-logo-transparent.png" alt="Jet Drivers" class="logo-img">
                    <span class="logo-text">JET DRIVERS</span>
                </div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="tel:5089335545" class="phone-number">508.933.5545</a></li>
                </ul>
            </div>
        </nav>
    </header>`;
    
    // Footer HTML
    const footerHTML = `
    <footer>
        <div class="container">
            <p>&copy; 2025 Jet Drivers. All rights reserved.</p>
            <p>Luxury Driving Services | Boston, MA</p>
        </div>
    </footer>`;
    
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // Add active class to current nav link
    const currentPath = location.pathname.replace('.html', '').replace('/index', '/');
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '/' && linkPath === '/') ||
            (currentPath === '/contact' && linkPath === '/contact') ||
            (currentPath.includes('index') && linkPath === '/')) {
            link.style.color = 'var(--accent-gold)';
        }
    });
});