let sketchPad = document.querySelector('#sketchPad');
let n = 16;

for (let i=0;i<n;i++){
    let row = document.createElement('div');
    row.classList.add('row');
    sketchPad.appendChild(row);
}

let rows= document.querySelectorAll('.row')
console.log(rows)


for(row of rows){    
    for (let i=0;i<n;i++){  
        let square = document.createElement('div');
        square.classList.add('square');      
        row.appendChild(square);
    }
    
}