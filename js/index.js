const basicAutocomplete = document.querySelector("#basic");
const data = ["Museum", "Party", "Restaurant", "Concert", "Architecture"];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

// new mdb.Autocomplete(basicAutocomplete, {
//   filter: dataFilter,
// });

const locationAutocomplete = document.querySelector("#location");
const dataL = ["Madrid", "Rome", "Lisbon", "Paris", "London"];
const dataFilterL = (value) => {
  return dataL.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

// new mdb.Autocomplete(locationAutocomplete, {
//   filter: dataFilterL,
// });
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
showSlides(slideIndex);
