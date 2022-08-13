const template = document.createElement('template');
const styles = `
  <style>
    .fade-long-text {
        line-height: 24px !important;
        /* restricting to custom lines*/
        height: calc(3 * 24px);
        overflow: hidden;
        position: relative;
    }
    .fade-long-text::after {
        content: " ";
        position: absolute;
        inset: auto auto 0 0;
        height: 24px;
        width: 100%;
        background: linear-gradient(90deg, white, transparent);
    }
    @media (prefers-color-scheme: dark) {
        .fade-long-text::after {
            background: linear-gradient(90deg, #212529, transparent);
        }
    }

    .line-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .title__description {        
        font-size: .9rem;
        line-height: 1.5;
        color: var(--bs-secondary);
        margin-block: 1rem;
        margin-inline-end: 2rem;
        text-align: justify;
        text-indent: 1.5rem;
    }
    
    .btn-base {
        font-family: inherit;
        font-size: .9rem;
        word-spacing: 3px;
        cursor: pointer;
        border: unset;
        border-radius: 125rem;
    }
    .title__btn {
        background-color: var(--bs-success);
        color: var(--bs-white);
        width: 5rem;
        aspect-ratio: 2/.8;
    }
    .title__btn:focus-visible {
        outline: 2px solid;
        outline-offset: 2px;
    }
  </style>  
`;

template.innerHTML = `
  ${styles}
    <p class="title__description line-clamp fade-long-text" id="title-desc">
      <slot name="description" />
    </p>
    <button class="title__btn btn-base" id="toggle-desc">ادامه مطلب</button>          
`;

class Description extends HTMLElement {
  showDesc: boolean;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template?.content.cloneNode(true));

    this.showDesc = false;
  }

  toggleDescription = (): void => {
    this.showDesc = !this.showDesc;
    // eslint-disable-next-line prettier/prettier
    const titleDesc = this.shadowRoot?.querySelector('#title-desc') as HTMLParagraphElement;
    // eslint-disable-next-line prettier/prettier
    const toggleDescBtn = this.shadowRoot?.querySelector('#toggle-desc') as HTMLButtonElement;

    titleDesc.classList.toggle('fade-long-text');
    this.showDesc
      ? (toggleDescBtn.textContent = 'خلاصه مطلب')
      : (toggleDescBtn.textContent = 'ادامه مطلب');
  };

  connectedCallback(): void {
    this.shadowRoot
      ?.querySelector('#toggle-desc')
      ?.addEventListener('click', () => this.toggleDescription());
  }

  disconnectedCallback(): void {
    this.shadowRoot
      ?.querySelector('#toggle-desc')
      ?.removeEventListener('click', () => this.toggleDescription());
  }
}

export default Description;
