// Fade in on scroll
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Image modal
function openImg(img) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}
function closeImg() {
  document.getElementById("imgModal").style.display = "none";
}
// Rating stars
const stars = document.querySelectorAll("#stars span");
const ratingText = document.getElementById("rating-text");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");

    stars.forEach(s => {
      s.classList.remove("active");
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("active");
      }
    });

    ratingText.textContent = `Kamu memberi rating ${value}/5 ⭐`;
  });
});
