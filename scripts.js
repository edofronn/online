// Funzione per cambiare pagina
function navigate(page) {
    // Nascondi tutte le view
    const views = document.querySelectorAll('.view');
    views.forEach(v => {
        v.classList.remove('active');
    });

    // Mostra quella selezionata
    const target = document.getElementById(page);
    if (target) {
        target.classList.add('active');
    }
}

// Funzione per gestire l'upload
function setupUploader(type) {
    const input = document.getElementById(`${type}-input`);
    if (!input) return;

    input.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = event => {
            document.getElementById(`${type}-img`).src = event.target.result;
            document.getElementById(`${type}-drop`).style.display = 'none';
            document.getElementById(`${type}-viewer`).style.display = 'flex';
        };
        reader.readAsDataURL(file);
    });
}

// Funzione per resettare
function resetUpload(type) {
    document.getElementById(`${type}-drop`).style.display = 'flex';
    document.getElementById(`${type}-viewer`).style.display = 'none';
    document.getElementById(`${type}-img`).src = '';
    document.getElementById(`${type}-input`).value = '';
}

// Inizializza tutto quando il documento è pronto
document.addEventListener('DOMContentLoaded', () => {
    setupUploader('png');
    setupUploader('text');
    setupUploader('school');
});