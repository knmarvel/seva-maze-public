// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W   W",
    "W W W WWW WWWWW W WWW",
    "W W W  W      W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

for(let index = 0; index < map.length; index += 1) {
    map[index] = map[index].split('');
}

console.log(map)

let maze = document.getElementById("maze")

let player = {
    rowIndex: 0,
    colIndex: 0,
}

function renderGame() {
    maze.innerHTML = "";
    for(let rowIndex = 0; rowIndex < map.length; rowIndex += 1) {
        let row = map[rowIndex];
        let rowElement = document.createElement("div")
        rowElement.classList = "row"
        for(let colIndex = 0; colIndex < row.length; colIndex += 1) {
            let char = row[colIndex]
            let cellElement = document.createElement("div")
            if (char === "W") {
                cellElement.classList = "cell wall"
            } else if(char === "S") {
                player.rowIndex = rowIndex
                player.colIndex = colIndex
                cellElement.classList = "cell player"
            } else {
                cellElement.classList = "cell"
            }
            rowElement.append(cellElement)
        }

        maze.append(rowElement)
    }
}

function movePlayer(newRowIndex, newColIndex) {
    if (newRowIndex < 0 || newRowIndex >= map.length ||
        newColIndex < 0 || newColIndex >= map[0].length ||
        map[newRowIndex][newColIndex] === "W") {
        return;
    }

    // 1. remove the player from current position
    map[player.rowIndex][player.colIndex] = " "
    console.log("moving player away from position", player.rowIndex, player.colIndex)
    map[newRowIndex][newColIndex] = "S"
    console.log("moving player to position", newRowIndex, newColIndex)
    player.rowIndex = newRowIndex
    player.colIndex = newColIndex
}

document.addEventListener("keydown", function(event) {
    console.log(event);
    switch(event.code) {
        case 'ArrowUp':
            movePlayer(player.rowIndex - 1, player.colIndex)
            break;
        case 'ArrowDown':
            movePlayer(player.rowIndex + 1, player.colIndex)
            break;
        case 'ArrowLeft':
            movePlayer(player.rowIndex, player.colIndex - 1)
            break;
        case 'ArrowRight':
            movePlayer(player.rowIndex, player.colIndex + 1)
            break;
    }
    renderGame()
})

renderGame();

console.log(player)
