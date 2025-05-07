/*
* FILE		      	: toggle-theme.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Code that allows the user to toggle on and off light and dark mode.
*/

// Event Listener (to see if dark and light mode is toggled)
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle") as HTMLInputElement;
  const icon = document.getElementById("themeIcon") as HTMLElement;

  // Load the toggled mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    icon.textContent = "🌙";
  } else {
    body.classList.add("light-mode");
    icon.textContent = "🌞";
  }

  // On toggle events
  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    body.classList.toggle("dark-mode", isDark);
    body.classList.toggle("light-mode", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    icon.textContent = isDark ? "🌙" : "🌞";
  });
});
