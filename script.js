let sketchPad = document.querySelector('#sketchPad');

function incrementOpacity(){
    const currOpacity = parseFloat(this.style.getPropertyValue("--square_opacity"));
    const opacity = Math.min(currOpacity + 0.1, 1);
    this.style.setProperty("--square_opacity", opacity);
};
function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function gridMaker(n){
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
            square.style.setProperty('--square_opacity', '0');
            row.appendChild(square);
        };
        
    };

    let pixels = document.querySelectorAll('.square');
    for(pixel of pixels){
        pixel.addEventListener('mouseenter',incrementOpacity);
    };
    
    const greyscale=document.querySelector('#greyscale');
    const rainbow = document.querySelector('#rainbow');
    const clear = document.querySelector('#clear')

    greyscale.addEventListener('click',()=>{
        for(pixel of pixels){
            pixel.style.setProperty("--square_color",'black');
        }
    });

    rainbow.addEventListener('click',()=>{
        for(pixel of pixels){
            pixel.style.setProperty("--square_color",randomRGB());

        }
    })

    clear.addEventListener('click',()=>{
        for(pixel of pixels){
            pixel.style.setProperty("--square_opacity",'0');
        }
    }) 
};

var gridSize = 16;

gridMaker(gridSize);

let go = document.querySelector('#go');

go.addEventListener('click',()=>{
    gridSize = document.querySelector('#grid_size').value;
    sketchPad.textContent='';
    gridMaker(gridSize);
})




  



