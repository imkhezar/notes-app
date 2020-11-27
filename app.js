const validator=require('validator')
const chalk = require('chalk')
const yargs= require('yargs')
//const { require } = require('yargs')
const fs = require('fs')
const { addNotes ,removeNote,readNotes} = require('./notes')
const { title } = require('process')
const { demandOption } = require('yargs')
//require('./notes')

// const getNotes=require('./notes.js')
// const msg=getNotes();
// console.log(chalk.blue(msg));
// console.log(chalk.green('Sucess'))
//yargs.version('1.0.0')

// Create Add commond

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe : 'Title of Note',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe : 'Body of notes',
            demandOption:true,
            type: 'string'
        }

    },
    handler: function (args) {
        addNotes(args.title,args.body)
        
        //console.log(chalk.greenBright('Title: '+args.title+'\tBody: '+args.body))
    }
    
})

//Create Remove commonds
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder:{
        title:{
            describe: 'To remove a note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (args) {
        removeNote(args.title)

    }
    
})

//Create list Command

yargs.command({
    command: 'list',
    describe: 'lists of notes',
    handler : function () {
        console.log(' Lists of  notes')
    }
})

// Create Read Command

yargs.command({
    command: 'read',
    describe: 'Reads commonds to read notes',
    builder: {
      notesView: 'Reading Data from JSON'

    },
    handler: function () {
        readNotes()

    }
})

yargs.parse()
    //console.log(yargs.argv)





//const fs= require('fs')
//fs.writeFileSync('notes.txt','My name is Muhammad Khezar')
//fs.appendFileSync('notes.txt','This data is appened')
