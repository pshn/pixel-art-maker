// Select color input
let c = document.getElementById('colorPicker');

// Select size input
let h = document.getElementById('inputHeight');
let w = document.getElementById('inputWidth');
let btn = document.querySelector('input[type=submit]');

h.addEventListener('input', function(e){
  let hvalue = e.target.value;
});

w.addEventListener('input', function(e){
  let wvalue = e.target.value;
});

btn.addEventListener('click', function(e){
  e.preventDefault();
  // if(canvas.hasChildNodes()){
  //   console.log(e)
  //   console.log('child is removed');
  // }
  makeGrid(h.value, w.value);
});

// When size is submitted by the user, call makeGrid()
const canvas = document.querySelector('#pixelCanvas');

function changeCellColor(evt){
  let cell = evt.target;
  cell.style.backgroundColor = c.value;
}

function makeGrid(height, width) {
  canvas.innerHTML = "";
  for (var x = 1; x <= height; x++){
    let row = document.createElement('tr');
    canvas.appendChild(row);

    for (var y = 1; y <= width; y++){
      let col = document.createElement('td');
      row.appendChild(col);
    }
  }
  canvas.addEventListener('click', changeCellColor );
}
