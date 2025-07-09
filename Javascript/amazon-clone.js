document.querySelector('.search').addEventListener('click', () => {
      const query = document.querySelector('.form input').value.trim();
      if (query) {
        alert(`You searched for: \"${query}\"`);
      }
    });

    document.querySelector('.foot-panel a').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});