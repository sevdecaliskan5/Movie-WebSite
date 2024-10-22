const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItemCount = movieLists[i].querySelectorAll("img").length;
  const itemWidth = 330; 

  arrow.addEventListener("click", function () {
    if (imageItemCount - (5 + clickCounter) > 0) {
      clickCounter++;
      const currentTranslateX =
        parseFloat(getComputedStyle(movieLists[i]).transform.split(",")[4]) ||
        0;
      movieLists[i].style.transform = `translateX(${
        currentTranslateX - itemWidth
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.active,.navbar,.navbar-side,.navbar-side i,.toggle,.toggle-ball,#filmTuru,.navbar a,.navbar li"
);
ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
