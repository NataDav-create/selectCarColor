const imgHolder = document.querySelector('#imgHolder');
let img = imgHolder.querySelector('img');
const colorSelector = document.querySelector('#colorsSelector');
const colorItems = document.querySelectorAll('.colorItem');



colorSelector.addEventListener('click', function (e) {
  const activeElement = document.querySelector('.colorItem--active');
  let target = e.target;
  activeElement.classList.remove('colorItem--active');
  if (target.classList.contains('colorItem')) {
    target.classList.add('colorItem--active');
    let color = target.dataset.color;
    img.src = `https://webcademy.ru/files/js2020/solaris/${color}.png`;
  }
});