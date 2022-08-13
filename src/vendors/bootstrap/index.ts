import * as bootstrap from 'bootstrap';
import '@popperjs/core';

//* Enable all tooltips
// eslint-disable-next-line prettier/prettier
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]') as NodeListOf<HTMLElement>;
// eslint-disable-next-line prettier/prettier
tooltipTriggerList.forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
