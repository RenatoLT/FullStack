document.querySelectorAll('a[href="#contacto"]').forEach(link => {
    link.addEventListener('click', function() {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
        contactoSection.classList.add('resaltar-contacto');
        setTimeout(() => {
            contactoSection.classList.remove('resaltar-contacto');
        }, 3000);
    }
  });
});