

const speak=async(text)=>{
    await setTimeout(async() => console.log("speaking..."), 3000);
    console.log(text)
}

export default speak