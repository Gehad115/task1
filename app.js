
const data10 = require("./data10")

const yargs = require("yargs")

yargs.command({
    
    command : "add",
    describe : "to add an item",
    builder:{
        id :{
            describe : "unique key",
            demandOption : true ,
            type :"string"
        },
        fname :{
            describe : "add fname",
            demandOption : true ,
            type :"string"
        },
        age:{
            describe : "add your age",
            demandOption : true ,
            type :"string"
        },
        city:{
            describe : "add city",
            demandOption : false,
            type :"string"
        }
    },
    handler : (x)=>{
        data10.addPerson(x.id ,x.fname , x.lname , x.age, x.city)
    }
    
})

// //////////////////////////////////////////////////////////
yargs.command({
    command : "delete",
    describe : "to delete an item",
    builder:{
        id :{
            describe : "unique key",
            demandOption : true ,
            type :"string"
        }},
    handler : (x)=>{
        data10.deleteData(x.id)
    }
})
// //////////////////////////////////////////////////////////
yargs.command({
    command: "clear",
    describe: "to clear all data",
    handler :()=>{
        data10.clearData()
    }
})
// /////////////////////////////////////////////////////////
yargs.command({
    command: "read",
    describe :"to read an item",
    builder:{
        id:{
            describe:" to read an item",
            demandOption: true,
            type:"string"
        }
    },
    handler: (x)=>{
        data10.readData(x.id)
    }
})
yargs.command({
    command: "read all",
    describe :"to read all items",
    handler:()=>{
        data10.readALL()
    }
})
console.log(yargs.argv)
// /////////////////////////////////////////////////////////