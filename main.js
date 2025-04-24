<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks   = document.getElementById('nav-names-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  });
</script>
