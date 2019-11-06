// Select fileInput field, display area, path/link area and upload drop area
const fileInput = document.querySelector('#fileInput');
const display = document.querySelector('#display');
const path = document.querySelector('#path');
const upload = document.querySelector('#upload');

// Int file variable

// upload by choosing file
fileInput.addEventListener('change', () => {
  let file = fileInput.files[0];
  let link = fileInput.value;
  preview(file, link);
});

// upload by drop

upload.addEventListener('dragover', e => {
  e.preventDefault();
  upload.style.border = '2px solid red';
});

upload.addEventListener('drop', e => {
  e.preventDefault();
  upload.style.border = '2px dashed black';
  let file = e.dataTransfer.files[0];
  preview(file);
});

// preview image and link
function preview(file, link) {
  // reset display and path
  display.innerHTML = '';
  path.innerHTML = '';
  // Init FileReader
  const reader = new FileReader();
  if (file) {
    // Add file link/path into path
    h4 = document.createElement('h4');
    h4.textContent = link;
    path.appendChild(h4);
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);

    // Add image to display
    reader.addEventListener('load', () => {
      // crete image
      image = new Image();
      // set src
      image.src = reader.result;
      image.style.maxWidth = '100%';
      display.appendChild(image);
    });
  }
  reader.onload;
}
