const container=document.querySelector('#grid');
//const el=document.createElement('div');
//el.textContent="hello world";
//container.appendChild(el);
for (let i=0; i<16; i++) {
    const row=document.createElement('div');
    //row.setAttribute("color", "blue");
    //row.textContent="newline";
    //row.style.backgroundColor="blue";
    row.setAttribute("style", "display: flex; align-items: stretch; justify-content: space-between;  background-color: blue; flex-grow:1");

    //row.setAttribute("flex-grow", "1");
    row.id="row"+i;
    container.appendChild(row);
    const rowcontainer=document.querySelector("#row"+i);
    for (let j=0; j<16; j++) {
        const el=document.createElement("div");
        //el.textContent="hello world";
        el.setAttribute("style", "background-color: white; border-style: solid; border-width: 1px; border-color:black; display:flex; flex-grow:1");
        el.id="element"+i+"-"+j;
        //el.setAttribute("style", "border-color:black");
        rowcontainer.appendChild(el);
        const iota=document.querySelector('#element'+i+"-"+j);
        iota.addEventListener('mouseover', ()=>{iota.style.backgroundColor="red"});
    }
}

function newGrid(n) {
    if (n>100) {
        n=100;
    }
    if (n<2) {
        n=2;
    }
    const container=document.querySelector('#grid');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i=0; i<n; i++) {
        const row=document.createElement('div');
        row.setAttribute("style", "display: flex; align-items: stretch; justify-content: space-between;  background-color: blue; flex-grow:1");
        row.id="row"+i;
        container.appendChild(row);
        const rowcontainer=document.querySelector("#row"+i);
        for (let j=0; j<n; j++) {
            const el=document.createElement("div");
            el.setAttribute("style", "background-color: white; border-style: solid; border-width: 1px; border-color:black; display:flex; flex-grow:1");
            el.id="element"+i+"-"+j;
            rowcontainer.appendChild(el);
            const iota=document.querySelector('#element'+i+"-"+j);
            iota.addEventListener('mouseover', ()=>{iota.style.backgroundColor="red"});
        }
    }
}

const squares=document.querySelector("#numsq");
squares.addEventListener("click", ()=>{let zeta=prompt("choose the number of squares"); newGrid(zeta)});