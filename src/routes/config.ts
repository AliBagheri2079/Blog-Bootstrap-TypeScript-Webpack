window.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;
  !(pathname === '/' || pathname === '/index.html') &&
    history.replaceState({}, '', '404.html');
});
