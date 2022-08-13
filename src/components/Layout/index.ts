//* all web components
import Address from '../public/Location/Address';
import Description from '../public/Description';
import Logo from '../public/Logo';

//* change html with there files
import '../public/Slider';
import '../public/Footer';
import '../public/Location/Map';

customElements.define('my-logo', Logo);
customElements.define('my-description', Description);
customElements.define('my-address', Address);
