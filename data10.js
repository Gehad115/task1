
const fs = require("fs")

const addPerson = (id, fname, lname , age, city) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter((obj)=>{
        return obj.id  === id
    })
        if(duplicatedData.length == 0){
            allData.push({
                id,
                fname,
                lname,
                age,
                city,
            })
            saveData(allData)
        }
        else{
            console.log("ERROR: Dublicated Data")
        }  
}
const loadInfo = () =>{
    try
    {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    }
    catch
    {
        return[]
    }
}
const saveData = (allData) =>{
    const saveDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , saveDataJson)
}
// ///////////////////////////////////////////////

const deleteData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) =>{
        return obj.id !== id
    })
    saveData(dataToKeep)
}
// ///////////////////////////////////////////////
const readData = (id) =>{
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) =>{
        return obj.id ===id
    })
    if(itemNeeded){
        console.log(itemNeeded)
    }
    else{
        console.log("item not found")
    }
}
const readALL=()=>{
    const allData = loadInfo()
    console.log(allData)
}
// //////////////////////////////////////////////
const clearData =() =>{
    var allData = loadInfo()
    allData = []
    saveData(allData)
}
// ///////////////////////////////////////////////
module.exports = {
    addPerson,
    deleteData,
    readData ,
    clearData,
    readALL
}
