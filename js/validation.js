document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  if (!form) return;
  const emailInput = form.elements['email'];

  let msg = document.createElement('div');
  msg.style.fontSize = '0.95em';
  msg.style.marginTop = '4px';
  emailInput.insertAdjacentElement('afterend', msg);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (!regex.test(email)) {
      msg.textContent = 'Por favor, ingresa un correo electrónico válido.';
      msg.style.color = 'red';
      emailInput.focus();
    } else {
      msg.textContent = '¡Correo electrónico válido!';
      msg.style.color = 'green';
    }
  });
});