let consoleel = document.getElementById("console")

let lines = [
    "initilizing the system and connecting to server !!!💉.... \n",
    "forceble connecting to the server 🛜....",
    "bypassing the firewall 🐌....",
    "Decrpting the firewall 🤑....",
    "Access Granted sucessfully ✅ ...."
];

let index = 0

function printline(){
    if(index <lines.length){
        consoleel.innerHTML += lines[index] + "\n";
        index++;
        setTimeout(printline, Math.random()*1000 + 500);
    }
}

printline()