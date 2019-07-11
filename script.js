function submit() {
    let score = 0;
    let ans1 = document.querySelector("#ip1").value;

    let ans4 = document.querySelector("#ip4").value;

    let ans9 = document.querySelector("#ip9").value;
    let ans10 = document.querySelector("#ip10").value

    let ans13 = document.querySelector("#ip13").value;

    let answers = [ans1, ans4, ans9, ans10, ans13]
    for (let i = 0; i < answers.length; i++) {
        score += 1
    }
    // if (ans1 == '#ip1') {
    //     ans1++;
    // }
    // if (ans4 == 'ip4') {
    //     ans4++
    // }
    // if (ans9 == "ip9") {
    //     ans9++
    // }
    // if (ans10 == 'ip10') {
    //     ans10++
    // }
    // if (ans13 == 'ip13') {
    //     ans13++
    // }



    if (score == 5) {
        alert("congretulation, you have scored " + score + "out of 5");
    } else {
        alert("You have scored " + score + " out of 5");
    }
}