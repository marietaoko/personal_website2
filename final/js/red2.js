const path2 = document.getElementById("my-path2");
const pathLength2 = path2.getTotalLength();
const pathOffsetTop2 = path2.getBoundingClientRect().top;
const windowHeight2 = window.innerHeight;

function animatePath() {
  const scrollPosition2 = window.pageYOffset;
  const scrollPercentage2 = (scrollPosition2 - pathOffsetTop2 + windowHeight2) / (windowHeight2 * 10);

  if (scrollPercentage2 >= 0 && scrollPercentage2 <= 1) {
    const drawLength2 = pathLength2 * scrollPercentage2;
    path2.style.strokeDashoffset = pathLength2 - drawLength2;
  }
}

window.addEventListener("scroll", animatePath);
