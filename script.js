function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Lazy load images (if any)
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.loading = "lazy";
    });
});
