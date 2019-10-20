const fs = require("fs");
const chalk = require("chalk");

const getNote = () => {

}

const addNote = (title,desc) => {
     const notes = loadNotes();

     // const duplicateNotes = notes.filter(function(note){
     //      return note.title === title;
     // });

     const duplicateNotes = notes.filter((note) =>  note.title === title);
     const duplicateNote = notes.find((note) => note.title === title);
     
     if(!duplicateNote){
     notes.push({
          title:title,
          desc:desc
     });
     savenotes(notes)
     console.log("notes added succesfully");
    }else{
     console.log("title already taken");
    }
}

const savenotes=(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)

}

const removeNote = (title) => {
     const notes = loadNotes();
   
     const notesToKeep = notes.filter((note) => note.title !== title)

     if(notesToKeep.length !== notes.length){
     
     savenotes(notesToKeep);
     console.log("notes deleted succesfully");
     
     }else{
        if(notes.length == 0){
             console.log(chalk.red("All notes are deleted no notes are found"));
        }else{
             console.log("no notes of title "+ chalk.bgRed(title) +" found");
        }
     }
}

const loadNotes = () => {
    try{
     const dataBuffer = fs.readFileSync("notes.json")
     const dataJSON = dataBuffer.toString()
     return JSON.parse(dataJSON)
    }catch(e){
      return []
    }

    
}

const listNotes = () => {
     console.log(chalk.white.inverse("your notes"));
     const notes = loadNotes();
     notes.forEach(function(element) {
          console.log(chalk.green.inverse(element.title));
     });
 
}

const readNotes = (title) => {
     const notes = loadNotes();
     const findNote = notes.find((note)=> note.title === title);
     if(findNote){
          console.log(chalk.bgGreen(findNote.desc));
     }else{
          console.log(chalk.bgRed("no note found of this title"))
     }
}

module.exports = {
     getNote : getNote,
     addNote : addNote,
     removeNote:removeNote,
     listNotes:listNotes,
     readNotes:readNotes
}