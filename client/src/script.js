
export function enableBasicInteractions() {
  // 1. Show alert on Join button click
  const joinBtn = document.querySelector(".hero-button");
  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      alert("Thank you for joining! 🎉");
    });
  }

  // 2. Log message on scroll
  window.addEventListener("scroll", () => {
    console.log("User is scrolling...");
  });

  // 3. Show scroll-to-top button
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    // 4. Scroll to top on button click
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
