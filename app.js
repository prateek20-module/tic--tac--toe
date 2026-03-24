const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");

let turnO = true; // O starts
let count = 0;

// Winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // Prevent overwrite
        if (box.innerText !== "") return;

        // Assign value
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;

        checkWinner();
    });
});

// Check winner
function checkWinner() {
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            alert(`Winner is ${pos1} 🎉`);
            disableAll();
            return;
        }
    }

    // Draw condition
    if (count === 9) {
        alert("It's a Draw!");
    }
}

// Disable all boxes after win
function disableAll() {
    boxes.forEach(box => box.disabled = true);
}

// Reset game
resetBtn.addEventListener("click", () => {
    turnO = true;
    count = 0;

    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
});