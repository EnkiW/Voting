let smiles = {
    "🤑": 0, "👿": 0, "👻": 0, "😺": 0, "👩": 0
};
function updateResults() {
    let smileyRow = document.getElementById("smileyRow");
    let countRow = document.getElementById("countRow");
    smileyRow.innerHTML = "";
    countRow.innerHTML = "";
    for (let smiley in smiles) {
        let smileyCont = document.createElement("div");
        smileyCont.className = "smiley-container";
        let smileyElem = document.createElement("span");
        smileyElem.innerHTML = smiley;
        smileyElem.className = "smiley";
        smileyElem.setAttribute("data-smiley", smiley);
        smileyElem.addEventListener("click", vote);
        smileyCont.appendChild(smileyElem);
        smileyRow.appendChild(smileyCont);
    }
    for (let smiley in smiles) {
        let countCont = document.createElement("div");
        countCont.className = "count-container";
        let countElem = document.createElement("span");
        countElem.innerHTML = smiles[smiley];
        countElem.className = "count";
        countCont.appendChild(countElem);
        countRow.appendChild(countCont);
    }
}
function vote() {
    let smiley = this.getAttribute("data-smiley");
    smiles[smiley]++;
    updateResults();
}
updateResults();