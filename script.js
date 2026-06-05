// Dark & Light Theme Switcher
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic Live Score Refresh (Simulated World-Class API Performance)
function refreshScore() {
    const scoreVal = document.getElementById('current-score');
    const statusVal = document.getElementById('batsmen-status');
    
    scoreVal.style.opacity = 0.5;
    
    setTimeout(() => {
        // Real life project updates happen via fetch API from real servers here
        const runs = Math.floor(Math.random() * 20) + 185;
        const wickets = Math.floor(Math.random() * 2) + 4;
        
        scoreVal.innerText = `${runs}/${wickets} (20.0 Overs)`;
        statusVal.innerHTML = `<i class="fas fa-flag-checkered"></i> Innings Break / Match Complete!`;
        scoreVal.style.opacity = 1;
    }, 800);
}
