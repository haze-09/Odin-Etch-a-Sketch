let sketchPad = document.querySelector('#sketchPad');
let n = 64;

for (let i=0;i<n;i++){
    let row = document.createElement('div');
    row.classList.add('row');
    sketchPad.appendChild(row);
};

let rows= document.querySelectorAll('.row');


for(row of rows){    
    for (let i=0;i<n;i++){  
        var square = document.createElement('div');
        square.classList.add('square');      
        row.appendChild(square);
    };
    
};

let pixels = document.querySelectorAll('.square');

function incrementOpacity(){
    const currOpacityString = this.style.getPropertyValue("--square_opacity");
    const currOpacity = currOpacityString ? parseFloat(currOpacityString) : 0;
    const opacity = Math.min(+currOpacity + 0.1, 1);    
    this.style.setProperty("--square_opacity", opacity);
}
const greyscale=document.querySelector('#greyscale');
const rainbow = document.querySelector('#rainbow');

greyscale.addEventListener('click',()=>{
    for(pixel of pixels){
        pixel.style.setProperty("--square_color",'black');
    }
});

rainbow.addEventListener('click',()=>{
    for(pixel of pixels){
        
    }
})

for(pixel of pixels){
    pixel.addEventListener('mouseenter',incrementOpacity);
}