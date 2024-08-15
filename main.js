// Home Work

let move_types = "sprlo";
let win_point = 0;

while (true) {
    const user_move = prompt(
        "[s] -scissors\n[p] -paper\n[r] -rock\n[l] -lizard\n[o] –spock\n[c] -cancel"
    );
    const comp_move = move_types[Math.round(Math.random() * 5)];

    switch (user_move) {
        case comp_move:
            alert("Tie!");
            continue;
        case "s":
            console.log(comp_move);
            if (comp_move == "p" || comp_move == "l") {
                win_point++;
                alert(`You won! Win points: ${win_point}`);
            } else alert("You lose!");
            continue;
        case "p":
            if (comp_move == "r" || comp_move == "o") {
                win_point++;
                alert(`You won! Win points: ${win_point}`);
            } else alert("You lose!");
            continue;
        case "r":
            if (comp_move == "l" || comp_move == "s") {
                win_point++;
                alert(`You won! Win points: ${win_point}`);
            } else alert("You lose!");
            continue;
        case "l":
            if (comp_move == "o" || comp_move == "p") {
                win_point++;
                alert(`You won! Win points: ${win_point}`);
            } else alert("You lose!");
            continue;
        case "o":
            if (comp_move == "r" || comp_move == "s") {
                win_point++;
                alert(`You won! Win points: ${win_point}`);
            } else alert("You lose!");
            continue;
        case "c":
            break;
        default:
            alert("Incorrect input!");
            continue;
    }
    break;
}
