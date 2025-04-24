export default () => {
  if (typeof window === "undefined") return;

  const video = document.getElementById("video") as HTMLVideoElement | null;
  const container = document.getElementById("video-container");
  const wrapper = document.getElementById("video-wrapper");
  const toggleBtn = document.getElementById("video-toggle");

  if (!video || !container || !wrapper || !toggleBtn) return;

  let hasScrolledDown = false;
  let hasAutoPlayed = false;

  // Toggle play/pause on button click
  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggleBtn.textContent = "⏸️";
    } else {
      video.pause();
      toggleBtn.textContent = "▶️";
    }
  });

  // Click on video toggles play too
  video.addEventListener("click", () => {
    toggleBtn.click();
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && hasScrolledDown && !hasAutoPlayed) {
        video.play();
        toggleBtn.textContent = "⏸️";
        hasAutoPlayed = true;
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(wrapper);

  window.addEventListener("scroll", () => {
    const rect = container.getBoundingClientRect();
    if (rect.top < -rect.height && !hasScrolledDown) {
      hasScrolledDown = true;
    }

    // Resize effect
    const scrollPercentage = Math.max(
      0,
      Math.min(1, 1 - rect.top / rect.height)
    );
    const newSize = 100 - scrollPercentage * 20; // 20% shrink max
    wrapper.style.width = `${newSize}%`;
    wrapper.style.height = `${newSize}vh`;
  });
};
