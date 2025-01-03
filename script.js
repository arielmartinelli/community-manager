
document.getElementById('reveal-btn').addEventListener('click', () => {
    // Ocultar la primera parte de la página
    document.getElementById('main-content').style.display = 'none';

    // Mostrar la segunda parte
    document.querySelector('.hidden-content').style.display = 'block';
});

function sendToWhatsApp() {
    const date = document.getElementById('date').value;
    const plan = document.getElementById('plan').value;
    const phoneNumber = '3516121498';
    const message = `Hola, quiero organizar un día de ${date} con el plan: ${plan}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}

