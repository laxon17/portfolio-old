const backToTopButton = document.querySelector("#backToTop");

window.addEventListener("scroll", showFunction);

function showFunction() {
  if (window.pageYOffset > 250) {   //Show the button
    if(!backToTopButton.classList.contains("showBtn")) {
      backToTopButton.classList.remove("hideBtn");
      backToTopButton.classList.add("showBtn");
      backToTopButton.style.display = "block";
    }
  } 
  else {  //Hide the button
    if(backToTopButton.classList.contains("showBtn")) {
        backToTopButton.classList.remove("showBtn");
        backToTopButton.classList.add("hideBtn");
        setTimeout(function() {
          backToTopButton.style.display = "none";
        }, 250);
    }
  }
}

backToTopButton.addEventListener("click", scrollBack);

function scrollBack () {
  window.scrollTo(0, 0);
}










