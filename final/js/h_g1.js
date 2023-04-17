const path3 = document.getElementById("my-path3");
const pathLength3 = path3.getTotalLength();
const pathOffsetTop3 = path3.getBoundingClientRect().top;
const windowHeight3 = window.innerHeight;

function animatePath() {
  const scrollPosition3 = window.pageYOffset;
  const scrollPercentage3 = (scrollPosition3 - pathOffsetTop3 + windowHeight3) / (windowHeight3 * 10);

  if (scrollPercentage3 >= 0 && scrollPercentage3 <= 1) {
    const drawLength3 = pathLength3 * scrollPercentage3;
    path3.style.strokeDashoffset = pathLength3 - drawLength3;
  }
}

window.addEventListener("scroll", animatePath);
