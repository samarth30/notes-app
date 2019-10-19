const fs = require("fs");

const getNote = function (){

}

const addNote = function(title,desc){
     const notes = loadNotes();
     notes.push({
          title:title,
          desc:desc
     });
     savenotes(notes)
}

const savenotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)

}

const loadNotes = function(){
    try{
     const dataBuffer = fs.readFileSync("notes.json")
     const dataJSON = dataBuffer.toString()
     return JSON.parse(dataJSON)
    }catch(e){
      return []
    }

    
}

module.exports = {
     getNote : getNote,
     addNote : addNote
}