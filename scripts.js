function navigate(page) {
  const views = document.querySelectorAll('.view');
  views.forEach(v => {
    v.classList.remove('active');
  });

  const target = document.getElementById(page);
  if (target) {
    target.classList.add('active');
  }
}

// Funzione universale per gestire l'upload delle immagini
function setupUploader(type) {
  const input = document.getElementById(`${type}-input`);
  
  input.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = event => {
      // Visualizza l'immagine caricata
      document.getElementById(`${type}-img`).src = event.target.result;
      // Nascondi la dropzone e mostra il viewer
      document.getElementById(`${type}-drop`).style.display = 'none';
      document.getElementById(`${type}-viewer`).style.display = 'flex';
    };
    reader.readAsDataURL(file);
  });
}

// Inizializza il sistema di upload per ogni sezione
setupUploader('png');
setupUploader('text');
setupUploader('school');

// Funzione per tornare allo stato di upload (tasto Reset)
function resetUpload(type) {
  document.getElementById(`${type}-drop`).style.display = 'flex';
  document.getElementById(`${type}-viewer`).style.display = 'none';
  document.getElementById(`${type}-img`).src = '';
  document.getElementById(`${type}-input`).value = '';
}