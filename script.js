document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "Toggle Dark Mode";
    toggleThemeButton.classList.add("theme-toggle");
    document.querySelector(".container").prepend(toggleThemeButton);

    toggleThemeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Highlight skills on hover
    document.querySelectorAll(".left-column li").forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            this.style.transition = "0.3s";
        });
        skill.addEventListener("mouseout", function () {
            this.style.backgroundColor = "transparent";
        });
    });
});