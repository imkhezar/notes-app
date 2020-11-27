const fs = require('fs')
const chalk=require('chalk')

//adding notes
const addNotes = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes =notes.filter((note) => note.title===title)
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
const removeNote= (title)=>{
    const notes =loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    } 
}

//reading notes and print in console
const readNotes = (title) =>{
    const notes=loadNotes()
    const foundedNotes = notes.find((note)=> note.title===title)
    if(foundedNotes){
    console.log(chalk.bgWhite.black('Notes found!'))
    console.log(chalk.greenBright.inverse('Title '+foundedNotes.title))
    console.log('Body '+foundedNotes.body)
    }
    else{
        console.log(chalk.red.inverse('No Result Found!'))
    }
    
}

//List of all notes design with chalk
const listNotes = function(){
    const myNotes= loadNotes()
    myNotes.forEach(element => {
        console.log(chalk.blueBright.inverse('Title: '+element.title)+'\t'+chalk.redBright.inverse('Body '+element.body))
    });
}

//Processing areas for Applictions, means some function that will help other function to process
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

module.exports = {

    addNotes: addNotes,
    removeNote: removeNote,
    readNotes: readNotes,
    listNotes: listNotes
}