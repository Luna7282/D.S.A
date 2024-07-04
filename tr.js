const one = ()=>{Promise.resolve("promise")
    .then((res)=>{console.log(res)})
}

async function test(){
    console.log("tree")
    const result = await one()
    console.log("uptree")
}
console.log(" Before starting the function")
test()
console.log(" After test exec-")