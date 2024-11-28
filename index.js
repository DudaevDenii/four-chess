const marquee = document.querySelector(".marquee__inner");
const text = marquee.innerHTML;
marquee.innerHTML += text;
const items = document.querySelectorAll(".grid-item");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let currentIndex = 0;
let autoSwitch;

const showItem = (index) => {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
};

const nextItem = () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
};

const prevItem = () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
};

const startAutoSwitch = () => {
  autoSwitch = setInterval(nextItem, 4000);
};

const stopAutoSwitch = () => {
  clearInterval(autoSwitch);
};

startAutoSwitch();

showItem(currentIndex);

nextButton.addEventListener("click", () => {
  stopAutoSwitch();
  nextItem();
  startAutoSwitch();
});

prevButton.addEventListener("click", () => {
  stopAutoSwitch();
  prevItem();
  startAutoSwitch();
});

items.forEach((item) => {
  item.addEventListener("mouseover", stopAutoSwitch);
  item.addEventListener("mouseout", startAutoSwitch);
});
const customSlider = document.querySelector(".custom-slider .slider");
const customSliderItems = document.querySelectorAll(
  ".custom-slider .slide-item"
);
const customButtonNext = document.getElementById("nextCustom");
const customButtonPrev = document.getElementById("prevCustom");

let customActiveIndex = 0;
let customVisibleItemsCount = calculateCustomVisibleItems();

function calculateCustomVisibleItems() {
  const containerWidth = document.querySelector(
    ".custom-slider .slider-wrapper"
  ).offsetWidth;
  const itemWidth = customSliderItems[0].offsetWidth;
  if (containerWidth >= 1200) return 3;
  if (containerWidth >= 768) return 2;
  return 1;
}

function updateCustomSlider() {
  const offset = (customActiveIndex * -100) / customVisibleItemsCount;
  customSlider.style.transform = `translateX(${offset}%)`;
}

customButtonNext.addEventListener("click", () => {
  if (customActiveIndex < customSliderItems.length - customVisibleItemsCount) {
    customActiveIndex++;
    updateCustomSlider();
  }
});

customButtonPrev.addEventListener("click", () => {
  if (customActiveIndex > 0) {
    customActiveIndex--;
    updateCustomSlider();
  }
});

window.addEventListener("resize", () => {
  customVisibleItemsCount = calculateCustomVisibleItems();
  updateCustomSlider();
});

updateCustomSlider();
