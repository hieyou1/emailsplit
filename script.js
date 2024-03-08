document.getElementById("gen").onclick = () => {
    let emails = document.getElementById("emails").value.split("\n");
    let emailNum = parseInt(document.getElementById("number").value);
    let splitMails = [];
    let currentArr = [];
    for (let i of emails) {
        i = i.trim();
        if (i != "" && (currentArr.push(i) == emailNum)) {
            splitMails.push(currentArr);
            currentArr = [];
        }
    }
    if (currentArr.length > 0) splitMails.push(currentArr);

    document.getElementById("buttons").innerHTML = "";
    for (let i in splitMails) {
        document.getElementById("buttons").appendChild(document.createElement("br"));
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-secondary");
        btn.onclick = () => navigator.clipboard.writeText(splitMails[i].join("\n"));
        btn.innerText = `Copy list #${i + 1}`;
        document.getElementById("buttons").appendChild(btn);
    }
};