function navigate(page){

  document.querySelectorAll('.view').forEach(v=>{
    v.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');
}

/* apre STA come pagina separata */
function openSTA(){
  window.location.href = "STA/index.html";
}