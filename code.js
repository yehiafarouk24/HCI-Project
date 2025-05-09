// script.js
document.querySelectorAll('.licontainer').forEach(item => {
    item.addEventListener('click', function() {
        alert('Element clicked!'); // Check if click registers
        this.classList.toggle('active');
    });
});