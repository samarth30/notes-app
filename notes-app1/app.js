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
   handler(argv){
     notes.addNote(argv.title,argv.desc);
   }
})

yargs.command({
    command :"remove",
    describe :"removing a note",
    builder:{
        title:{
            describe:"remove the notes",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
 })

 yargs.command({
    command :"list",
    describe :"list a note",
    handler(){
        notes.listNotes();
    }
 })

 yargs.command({
    command :"read",
    describe :"read a note",
    builder:{
       title:{
           describe:"title to find",
           demandOption:true,
           type:"string"
       }  
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
 })

yargs.parse()