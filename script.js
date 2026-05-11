function navigate(page){

  document.querySelectorAll('.view').forEach(v=>{
    v.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');
}

/* PNG */
document.getElementById('png-input')?.addEventListener('change', e=>{
  loadImage(e.target.files[0], 'png');
});

function loadImage(file, type){

  if(!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();

  reader.onload = e=>{

    if(type === 'png'){
      document.getElementById('png-img').src = e.target.result;
      document.getElementById('png-drop').style.display='none';
      document.getElementById('png-viewer').style.display='flex';
    }
  };

  reader.readAsDataURL(file);
}

/* RESET */
function resetUpload(type){

  if(type === 'png'){
    document.getElementById('png-drop').style.display='flex';
    document.getElementById('png-viewer').style.display='none';
    document.getElementById('png-img').src='';
  }
}

/* STA CONTENT */
function openTopic(topic){

  if(topic === 'bit'){
    window.location.href = "./STA/index.html";
  }

}