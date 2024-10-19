async function getHr(){

    const hr = await fetch("hr/hr.txt")
    return await hr.text()
}

async function main(){
    console.log(await getHr())
    await wait(500);
    main()
}

async function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

main()