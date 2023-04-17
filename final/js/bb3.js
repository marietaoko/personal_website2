const path7 = document.getElementById("my-path7");
const pathLength7 = path7.getTotalLength();
const pathOffsetTop7 = path7.getBoundingClientRect().top;
const windowHeight7 = window.innerHeight;

function animatePath() {
  const scrollPosition7 = window.pageYOffset;
  const scrollPercentage7 = (scrollPosition7 - pathOffsetTop7 + windowHeight7) / (windowHeight7 * 15);

  if (scrollPercentage7 >= 0 && scrollPercentage7 <= 1) {
    const drawLength7 = pathLength7 * scrollPercentage7;
    path7.style.strokeDashoffset = pathLength7 - drawLength7;
  }
}

window.addEventListener("scroll", animatePath);
