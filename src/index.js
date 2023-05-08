
import './style.css';
import Icon from './icon.jpg'

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack';
    element.classList.add('root');

    const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());