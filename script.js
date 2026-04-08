// 1. Theme Engine
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
    
    // UI Feedback for buttons
    document.querySelectorAll('.t-btn').forEach(btn => {
        btn.style.transform = btn.classList.contains(theme) ? 'scale(1.2)' : 'scale(1)';
        btn.style.borderWidth = btn.classList.contains(theme) ? '3px' : '1px';
    });
}

// Initialize Theme
const savedTheme = localStorage.getItem('user-theme') || 'olive';
setTheme(savedTheme);

// 2. Tab Engine for Roles
function openRole(evt, roleName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab links
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    // Show current tab and set button as active
    document.getElementById(roleName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 3. Reveal on Scroll Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section h2').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});
