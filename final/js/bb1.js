const path5 = document.getElementById("my-path5");
const pathLength5 = path5.getTotalLength();
const pathOffsetTop5 = path5.getBoundingClientRect().top;
const windowHeight5 = window.innerHeight;

function animatePath() {
  const scrollPosition5 = window.pageYOffset;
  const scrollPercentage5 = (scrollPosition5 - pathOffsetTop5 + windowHeight5) / (windowHeight5 * 10);

  if (scrollPercentage5 >= 0 && scrollPercentage5 <= 1) {
    const drawLength5 = pathLength5 * scrollPercentage5;
    path5.style.strokeDashoffset = pathLength5 - drawLength5;
  }
}

window.addEventListener("scroll", animatePath);
