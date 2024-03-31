function stringGame(array) {
    let strToChange = array.shift();

    for (let command of array) {
        if (command.includes("Change")) {
            let [_, symbol, replacement] = command.split(" ");
            strToChange = strToChange.split(symbol).join(replacement);
            console.log(strToChange);
        } else if (command.includes("Includes")) {
            let substring = command.split(" ")[1];
            let result = strToChange.includes(substring).toString();
            console.log(result.charAt(0).toUpperCase() + result.slice(1));
        } else if (command.includes("End")) {
            let substring = command.split(" ")[1];
            let result = strToChange.endsWith(substring).toString();
            console.log(result.charAt(0).toUpperCase() + result.slice(1));
        } else if (command === "Uppercase") {
            strToChange = strToChange.toUpperCase();
            console.log(strToChange);
        } else if (command.includes("FindIndex")) {
            let symbol = command.split(" ")[1];
            console.log(strToChange.indexOf(symbol));
        } else if (command.includes("Cut")) {
            let [_, startIndex, count] = command.split(" ").map(Number);
            let cutChars = strToChange.substr(startIndex, count);
            console.log(cutChars);
        }
    }
}

stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])


