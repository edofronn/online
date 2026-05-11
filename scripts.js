function navigate(page){

  const views = document.querySelectorAll('.view');

  views.forEach(v => {
    v.classList.remove('active');
  });

  const target = document.getElementById(page);

  if(target){
    target.classList.add('active');
  }
}

/* PNG */
document.getElementById('png-input').addEventListener('change', e=>{
  load(e.target.files[0], 'png');
});

/* SCHOOL */
document.getElementById('school-input').addEventListener('change', e=>{
  load(e.target.files[0], 'school');
});

function load(file, type){

  if(!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();

  reader.onload = e => {

    if(type === 'png'){
      document.getElementById('png-img').src = e.target.result;
      document.getElementById('png-drop').style.display = 'none';
      document.getElementById('png-viewer').style.display = 'flex';
    }

    if(type === 'school'){
      document.getElementById('school-img').src = e.target.result;
      document.getElementById('school-drop').style.display = 'none';
      document.getElementById('school-viewer').style.display = 'flex';
    }
  };

  reader.readAsDataURL(file);
}