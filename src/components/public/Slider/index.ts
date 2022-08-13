// eslint-disable-next-line prettier/prettier
const sliderContent = document.querySelector('#slider-content') as HTMLDivElement;
const fragment = document.createDocumentFragment();

const createImageSlider = (img: HTMLImageElement) => {
  const sliderItems = document.createElement('div');
  sliderItems.setAttribute('class', 'slider__items');
  sliderItems.append(img);

  fragment.append(sliderItems);
  sliderContent.appendChild(fragment);
};

const createImageList = (imgSrc: string[]) => {
  imgSrc.forEach((src) => {
    const imgSlide = new Image(); // Image constructor
    imgSlide.src = src;
    imgSlide.alt = 'starbucks-coffee picture';
    imgSlide.loading = 'lazy';

    createImageSlider(imgSlide);
  });
};

const imageSrc = [
  './assets/images/1.png',
  './assets/images/2.png',
  './assets/images/3.png',
  './assets/images/4.png',
];
createImageList(imageSrc);
