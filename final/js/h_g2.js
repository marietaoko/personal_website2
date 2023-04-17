const path4 = document.getElementById("my-path4");
const pathLength4 = path4.getTotalLength();
const pathOffsetTop4 = path4.getBoundingClientRect().top;
const windowHeight4 = window.innerHeight;

function animatePath() {
  const scrollPosition4 = window.pageYOffset;
  const scrollPercentage4 = (scrollPosition4 - pathOffsetTop4 + windowHeight4) / (windowHeight4 * 10);

  if (scrollPercentage4 >= 0 && scrollPercentage4 <= 1) {
    const drawLength4 = pathLength4 * scrollPercentage4;
    path4.style.strokeDashoffset = pathLength4 - drawLength4;
  }
}

window.addEventListener("scroll", animatePath);
