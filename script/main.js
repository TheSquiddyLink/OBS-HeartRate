const hrObj = document.getElementById("hr")
const heartObj = document.getElementById("heart")

async function getHr(){

    const hr = await (await fetch("hr/hr.txt")).text();   
    if(Number(hr) <= 0){
        return hrObj.innerHTML;
    }
    return hr;
}

function calcPulse(hr) {
    const pulse = 60000 / hr;
    return pulse;
}

container.addEventListener("animationiteration", async () => {
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = null;
    
    const newHr = await getHr();
    hrObj.innerHTML = newHr;
    
    const pulse = calcPulse(Number(newHr));
    container.style.animationDuration = `${pulse}ms`;
})