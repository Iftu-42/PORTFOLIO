// Theme Toggle Logic
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
}

// Load saved theme
const currentTheme = localStorage.getItem('selectedTheme') || 'olive';
setTheme(currentTheme);

// Multi-Role Tab Logic
function openRole(evt, roleName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roleName).style.display = "block";
    evt.currentTarget.className += " active";
}
