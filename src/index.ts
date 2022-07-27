// import * as _ from 'lodash';

//* Import our custom CSS
import './assets/sass/main.scss';

/**
 ** Will find #root element and set HTML to "Hello World!".
 */
function editDom(): void {
  const root = document.getElementById('root'); // Get root element.
  if (root) {
    root.innerHTML = '<h1 class="text-lowercase">DOM</h1>'; // Set html of the root element.
  }
}
editDom();

document.addEventListener('DOMContentLoaded', () => {
  alert('ali bagheri here ....');
});
