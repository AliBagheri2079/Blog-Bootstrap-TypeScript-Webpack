import { Icon } from '../../../global/interfaces';
const footer = document.querySelector('#social-media') as HTMLElement;

const createIconParent = (icon: string) => {
  const mediaIcon = document.createElement('div');
  mediaIcon.setAttribute('class', 'social-media__icon');
  mediaIcon.innerHTML = icon;

  footer.append(mediaIcon);
};

const createIconList = (list: Icon[]) => {
  list.forEach(({ href, title, iconName }) => {
    const iconLink = `
      <a 
          id="link-tooltip"
          href="${href}"
          data-bs-title="${title}"
          data-bs-toggle="tooltip" 
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip" 
          role="button"
      >
          <i class="bi ${iconName}"></i>
      </a>
    `;

    createIconParent(iconLink);
  });
};
const iconLists = [
  {
    href: 'https://www.instagram.com/alibagheri2079/',
    title: 'Instagram Account',
    iconName: 'bi-instagram',
  },
  {
    href: 'https://www.linkedin.com/in/alibagheri2079/',
    title: 'Linkedin Account',
    iconName: 'bi-linkedin',
  },
  {
    href: 'https://github.com/AliBagheri2079',
    title: 'Github Account',
    iconName: 'bi-github',
  },
];
createIconList(iconLists);
