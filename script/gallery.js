document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const captionText = document.getElementById('caption');

        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    });
});

document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}