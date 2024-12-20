const { readdir } = require('fs')
const { red } = require('chalk')

let commands = []

readdir('./slash-commands/', (err, files) => {
    if(err) return console.log(red('Erreur détécté lors de la tentative d\'instalation des commanndes slash: ' + err));
    files.forEach(file => {
        let commandFile = require(`./slash-commands/${file}`)
        commandFile.forEach(command => commands.push(command))
    })
})

module.exports.registerCommands = async (client) => {
    let application = await client.fetchApplication();
    for (let i = 0; i < commands.length; i++) {
        setTimeout(async () => {
            let command = commands[i];
            await client.api.applications(application.id).commands.post({data: command});
            if(i + 1 == commands.length) console.log('Toutes les commandes slashs ont été chargé !');
        }, 3000)
    }
}

module.exports.deleteCommands = async (client) => {
    let application = await client.fetchApplication()
    let commands = await client.api.applications(application.id).commands.get()
    commands.forEach(command => {
        client.api.applications(application.id).commands(command.id).delete()
    })
}

module.exports.commands = commands