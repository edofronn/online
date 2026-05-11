function navigate(page){

  document.querySelectorAll('.view').forEach(v=>{
    v.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');
}

/* PNG */
const pngInput = document.getElementById('png-input');
const pngImg = document.getElementById('png-img');
const pngDrop = document.getElementById('png-drop');
const pngViewer = document.getElementById('png-viewer');

pngInput.addEventListener('change', e=>{
  loadImage(e.target.files[0], pngDrop, pngViewer, pngImg);
});

/* SCHOOL */
const schoolInput = document.getElementById('school-input');
const schoolImg = document.getElementById('school-img');
const schoolDrop = document.getElementById('school-drop');
const schoolViewer = document.getElementById('school-viewer');

schoolInput.addEventListener('change', e=>{
  loadImage(e.target.files[0], schoolDrop, schoolViewer, schoolImg);
});

/* shared */
function loadImage(file, drop, viewer, img){

  if(!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();

  reader.onload = e=>{
    img.src = e.target.result;

    drop.style.display='none';
    viewer.style.display='flex';
  };

  reader.readAsDataURL(file);
}