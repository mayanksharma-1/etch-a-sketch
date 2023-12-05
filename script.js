function makeGrid(grid){
    // make 16 rows with 16 cells and append them all to the grid 
    for(let i = 0; i<16;i++){
        const row = document.createElement('div');
        row.classList.add("row")
        
        for(let i = 0; i<16;i++){
            const cell = document.createElement('div');
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }

    return document.querySelectorAll(".draw .cell");
}

function setupTools(bar){
    const colors = ["red","yellow","blue","green","white","azure","black"]
    const row = document.createElement('div');
    row.classList.add("row")
    colors.forEach(color => {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        cell.id = `cell-color-${color}`;
        cell.style.backgroundColor = color;
        row.appendChild(cell);
    });
    bar.appendChild(row)
    return document.querySelectorAll(".toolbar .cell")
}

let draw = document.querySelector(".draw");
let cells = makeGrid(draw);

let toolbar = document.querySelector(".toolbar");
let tools = setupTools(toolbar);

let selectedColor = "red";
tools.forEach(tool=>{
    tool.addEventListener("click", (event) => {
         selectedColor = event.target.style.backgroundColor; 
      });
})

cells.forEach(cell => {
    cell.addEventListener("click", (event) => {
        event.target.style.backgroundColor = selectedColor;
      });
    });

