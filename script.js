function openPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

/* IMAGE UPLOADER */
const dropZone = document.getElementById("drop-zone");
const viewer = document.getElementById("viewer");
const image = document.getElementById("image");

if (dropZone) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (event) => {
        image.src = event.target.result;
        dropZone.style.display = "none";
        viewer.style.display = "flex";
      };

      reader.readAsDataURL(file);
    }
  });
}
