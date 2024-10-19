const hrObj = document.getElementById("hr")
const heartObj = document.getElementById("heart")

async function getHr(){

    const hr = await fetch("hr/hr.txt")
    return await hr.text()
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