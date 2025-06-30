// Smart color correction: switch to dark mode if user prefers dark scheme
function applyColorScheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.style.background = "#1a2327";
        document.querySelector('header').style.background = "#174e47";
        document.querySelector('header').style.color = "#fff";
        document.querySelector('nav').style.background = "#22302c";
        document.querySelectorAll('.container, .entity').forEach(el => {
            el.style.background = "#232c31";
            el.style.color = "#e0f7fa";
        });
        document.querySelectorAll('.doctor-card').forEach(el => {
            el.style.background = "#22302c";
            el.style.color = "#e0f7fa";
        });
        document.querySelectorAll('input, select').forEach(el => {
            el.style.background = "#1a2327";
            el.style.color = "#e0f7fa";
            el.style.border = "1px solid #444";
        });
        document.querySelectorAll('.contact-btn').forEach(el => {
            el.style.background = "#174e47";
            el.style.color = "#fff";
        });
    }
}
window.onload = applyColorScheme;
