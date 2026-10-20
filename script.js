const coloredElem6 = document.getElementById('element-6');
const coloredElem7 = document.querySelector('#element-7');

const changeColor = (elem, colorSet1, colorSet2) => {
  if (!elem.classList.contains(colorSet1) && !elem.classList.contains(colorSet2)) {
    elem.classList.add(colorSet1);
  } else {
    elem.classList.toggle(colorSet1);
    elem.classList.toggle(colorSet2);
  }
};

coloredElem6.addEventListener('click', () => {
  changeColor(coloredElem6, 'orangeTextPurpleBg', 'purpleTextOrangeBg');
});

coloredElem7.addEventListener('click', () => {
  changeColor(coloredElem7, 'redTextBlueBg', 'blueTextRedBg');
});

const buttonsContainer = document.getElementById('buttons-container');
const imageContainer = document.getElementById('odessa-image-container');
const sizeStep = 50;
const minWidth = 50;

buttonsContainer.addEventListener('click', (event) => {
  const action = event.target.dataset.action;

  if (action === 'add-img') {
    imageContainer.insertAdjacentHTML(
      'beforeend',
      `<a href="https://omr.gov.ua/" target="_blank">
        <img src="./imgs/odessa.jpg" alt="Одеса" />
      </a>`,
    );
  }

  const lastImg = imageContainer.querySelector('a:last-of-type img');

  if (!lastImg) return;

  const currentSize = lastImg.clientWidth;
  if (action === 'increase-img') {
    lastImg.style.width = `${currentSize + sizeStep}px`;
  }

  if (action === 'decrease-img') {
    if (currentSize - sizeStep >= minWidth) {
      lastImg.style.width = `${currentSize - sizeStep}px`;
    }
  }

  if (action === 'delete-img') {
    lastImg.closest('a').remove();
  }
});
