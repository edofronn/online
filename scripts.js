function navigate(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active');
  }
}

// Gestione del DROP per tutte le sezioni
function handleDrop(e, type) {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById(`${type}-img`);
    const dropzone = document.getElementById(`${type}-dropzone`);
    const viewer = document.getElementById(`${type}-viewer`);

    img.src = ev.target.result;
    dropzone.style.display = 'none';
    viewer.style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

// Funzione RESET specifica per ogni sezione
function resetView(type) {
  const dropzone = document.getElementById(`${type}-dropzone`);
  const viewer = document.getElementById(`${type}-viewer`);
  const img = document.getElementById(`${type}-img`);

  if (dropzone && viewer) {
    dropzone.style.display = 'flex';
    viewer.style.display = 'none';
    if(img) img.src = '';
  }
}
