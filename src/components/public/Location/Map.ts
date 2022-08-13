const loadMap = () => {
  const locationMap = document.querySelector('#location-map') as HTMLElement;
  const map = `
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113039.75745101027!2d51.304309639807116!3d35.718596298220675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1659901164240!5m2!1sen!2sde"
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    `;
  locationMap.innerHTML = map;
};
loadMap();
