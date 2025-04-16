document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var toggle = document.getElementById("themeToggle");
    var icon = document.getElementById("themeIcon");
    // Load preference
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggle.checked = true;
        icon.textContent = "🌙";
    }
    else {
        body.classList.add("light-mode");
        icon.textContent = "🌞";
    }
    // On toggle
    toggle.addEventListener("change", function () {
        var isDark = toggle.checked;
        body.classList.toggle("dark-mode", isDark);
        body.classList.toggle("light-mode", !isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        icon.textContent = isDark ? "🌙" : "🌞";
    });
});
