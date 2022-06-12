const text1_options = [
    "In what year did you start your activity?",
    "Anyone can fly?",
    "How much is the flight?",
    "At what age can you start flying?"
  ];
  const text2_options = [
    "The company has been operating in this field for over 89 years.",
    "Yes, if funds allow",
    "Flight preparation and flight will cost you $10,000",
    "From 18 years old"
  ];
  const color_options = ["#fff", "#fff", "#fff", "#fff"];
  const image_options = [
    "https://www.invictory.org/articles/wp-content/uploads/sites/3/2018/04/301-1024x1020.jpeg",
    "https://www.gctc.ru/media/images/news/2012/kosmonavti/dzanibekov/005-1.jpg",
    "https://www.oblgazeta.ru/media/filer_public/2021/06/02/1d717fb7-d6c5-438b-9ff8-c4992a2d4528-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81.jpg.1024x0_q85.jpg",
    "https://cdnstatic.rg.ru/uploads/images/196/56/23/l12.jpg"
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  