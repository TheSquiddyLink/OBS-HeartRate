const hrObj = document.getElementById("hr")
const heartObj = document.getElementById("heart")

async function getHr(){

    const hr = await fetch("hr/hr.txt")
    return await hr.text()
}

async function main(){
    let hr = await getHr()
    hrObj.innerHTML = hr
    await wait(100);
    main()
}

async function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

main()