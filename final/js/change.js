function showChange() {
    var section = document.getElementById("gallery");
    if (section.style.display === "none") {
      section.style.display = "block";
      section.style.fontSize = "2em";
      section.style.padding = "1em";
    } else {
      section.style.display = "none";
    }
  }