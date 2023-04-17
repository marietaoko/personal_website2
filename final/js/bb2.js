const path6 = document.getElementById("my-path6");
const pathLength6 = path6.getTotalLength();
const pathOffsetTop6 = path6.getBoundingClientRect().top;
const windowHeight6 = window.innerHeight;

function animatePath() {
  const scrollPosition6 = window.pageYOffset;
  const scrollPercentage6 = (scrollPosition6 - pathOffsetTop6 + windowHeight6) / (windowHeight6 * 10);

  if (scrollPercentage6 >= 0 && scrollPercentage6 <= 1) {
    const drawLength6 = pathLength6 * scrollPercentage6;
    path6.style.strokeDashoffset = pathLength6 - drawLength6;
  }
}

window.addEventListener("scroll", animatePath);
