document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle") as HTMLInputElement;
  const icon = document.getElementById("themeIcon") as HTMLElement;

  // Load preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    icon.textContent = "🌙";
  } else {
    body.classList.add("light-mode");
    icon.textContent = "🌞";
  }

  // On toggle
  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    body.classList.toggle("dark-mode", isDark);
    body.classList.toggle("light-mode", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    icon.textContent = isDark ? "🌙" : "🌞";
  });
});
