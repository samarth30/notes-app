const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2];

// if(command === "add"){
//      console.log("adding notes")
// }else if(command == "remove"){
//     console.log("removing notes");
// }

yargs.command({
   command :"add",
   describe :"adding a note",
   builder:{
       title:{
           describe:"add a note",
           demandOption:true,
           type:"string"
       },
       desc:{
           describe:"add a description",
           demandOption:true,
           type:"string"
       }    
   },
   handler:function(argv){
     notes.addNote(argv.title,argv.desc);
   }
})

yargs.command({
    command :"remove",
    describe :"removing a note",
    handler:function(){
        console.log("removing a note");
    }
 })

 yargs.command({
    command :"list",
    describe :"list a note",
    handler:function(){
        console.log("listing a note");
    }
 })

 yargs.command({
    command :"read",
    describe :"read a note",
    handler:function(){
        console.log("reading a note");
    }
 })
yargs.parse()