//const { require } = require("yargs")

const fs = require('fs')
const chalk=require('chalk')

//adding notes

const addNotes = function(title,body){
    const notes = loadNotes()
    

    const duplicateNotes =notes.filter(function (note){
        return note.title===title
    })

    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.white('Notes Successfully Added!'))
    }
    else{
        console.log(chalk.bgRed.white('Already Exisit, try differnt Title'))
    }
   


}
// Removing Notes 

const removeNote= function (title){
    const notes =loadNotes()
    console.log(notes.length)
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    console.log(notesToKeep.length)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    } 
}

//reading notes and print in console

const readNotes = function(){
    return loadNotes()
    
}

//List of all notes design with chalk

const listNotes = function(){
    const myNotes= loadNotes()
    myNotes.forEach(element => {
        console.log(chalk.blueBright.inverse('Title: '+element.title)+'\t'+chalk.redBright.inverse('Body '+element.body))
    });
}


//loads notes return JSON notes data
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer)
        return dataJSON
    }
    catch(e){
        return []
    }
    return 
}
const saveNotes = function(notes){
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const getNotes= function(){
    return 'Your Notes'
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    readNotes: readNotes,
    listNotes: listNotes
}