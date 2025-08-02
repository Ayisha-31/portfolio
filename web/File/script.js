<script>
  // Smooth scroll for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Center the "Get In Touch" form dynamically
  function centerForm() {
    const formSection = document.querySelector('#get-in-touch');
    const windowHeight = window.innerHeight;
    const sectionHeight = formSection.offsetHeight;

    if (window.innerWidth > 1024) {
      const topPadding = Math.max((windowHeight - sectionHeight) / 4, 50);
      formSection.style.paddingTop = `${topPadding}px`;
      formSection.style.paddingBottom = `${topPadding}px`;
    } else {
      formSection.style.paddingTop = '100px';
      formSection.style.paddingBottom = '100px';
    }
  }

  window.addEventListener('load', centerForm);
  window.addEventListener('resize', centerForm);

  // Handle contact form submission (basic demo)
  const form = document.querySelector('#get-in-touch form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
</script>
