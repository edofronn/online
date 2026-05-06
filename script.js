function navigate(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');

  if (viewId === 'png') {
    resetUpload();
  }
}

/* RESET UPLOAD STATE */
function resetUpload() {
  const dropzone = document.getElementById('dropzone');
  const viewer = document.getElementById('viewer');

  dropzone.style.display = 'flex';
  viewer.style.display = 'none';
}

/* IMAGE DROP */
const dropzone = document.getElementById('dropzone');
const viewer = document.getElementById('viewer');
const img = document.getElementById('img');

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();

  reader.onload = (ev) => {
    img.src = ev.target.result;

    dropzone.style.display = 'none';
    viewer.style.display = 'flex';
  };

  reader.readAsDataURL(file);
});