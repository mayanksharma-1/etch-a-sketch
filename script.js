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

    return document.querySelectorAll(".cell");
}


let draw = document.querySelector(".draw");

let cells = makeGrid(draw);


