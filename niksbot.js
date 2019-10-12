const Discord = require('discord.js')
const client = new Discord.Client()
const snekfetch = require('snekfetch')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("with Communism", {type: "PLAYING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // Private channel id: 273481511607468034
    })
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    if (receivedMessage.content == 'Unde e Niks?') {
        receivedMessage.channel.send("E pe undeva")
        return
    }
    if (receivedMessage.isMentioned(client.user)) {
        receivedMessage.channel.send(`**Ala care mi-a dat tag E GAY!**\n**${receivedMessage.author.toString()} esti gay!**`)
    }
//    receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)
//    receivedMessage.guild.emojis.forEach(customEmoji => {

    
//    console.log (`${customEmoji} ${customEmoji.id}`)
//     receivedMessage.react(customEmoji)
//})
    if (receivedMessage.content.startsWith(",")) {
        processCommand(receivedMessage)
    }
})

//Aici pui comenzile

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "inmultire") {
        inmultireCommand(arguments, receivedMessage)
    } else if (primaryCommand == "ping") {
        pingCommand(arguments, receivedMessage)
    } else if (primaryCommand == `hello`) {
        helloCommand(arguments, receivedMessage)
    } else if (primaryCommand == 'serverinfo') {
        serverinfoCommand(arguments, receivedMessage)
    } else if(primaryCommand == 'report') {
        reportCommand(arguments, receivedMessage)
    } else if(primaryCommand == `kick`) {
        kickCommand(arguments, receivedMessage)
    } else if (primaryCommand == `ban`) {
        banCommand(arguments, receivedMessage)
    } else if (primaryCommand == `despremine`) { 
        despremineCommand(arguments, receivedMessage)
    } else if (primaryCommand == `avatar`) {
        avatarCommand(arguments, receivedMessage) 
    } else if (primaryCommand == `ghicitoare`) {
        ghicitoareCommand(arguments, receivedMessage)     
    } else if (primaryCommand == `pines`) {
        pinesCommand(arguments, receivedMessage)
    } else if (primaryCommand == `leave`) { 
        leaveCommand(arguments, receivedMessage)
    } else if (primaryCommand == `sunete`) {
        suneteCommand(arguments, receivedMessage)
    } else if (primaryCommand == 'vadimtudor') { 
       vadimtudorCommand(arguments, receivedMessage) 
    } else if (primaryCommand == 'say') {
       sayCommand(arguments, receivedMessage)
    } else if (primaryCommand == 'botinvite') {
        botinviteCommand(arguments, receivedMessage)  
    } else if (primaryCommand == `earrape`) {
        earrapeCommand(arguments, receivedMessage)   
    } else if (primaryCommand == `memuri`) {
        memuriCommand(arguments, receivedMessage)           
    } else {
        receivedMessage.channel.send("**Comanda necunoscuta! Incearca `,help` ca sa vezi toate comenzile corecte!**")
}

// ,memes
function memuriCommand (arguemnts, receivedMessage) {

    const randomPuppy = require('random-puppy');

    module.exports.run = async (bot, receivedMessage, args) => {
    
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    
        receivedMessage.channel.startTyping();
    
        randomPuppy(subreddit).then(async url => {
                await message.channel.send({
                    files: [{
                        attachment: url,
                        name: 'meme.png'
                    }]
                }).then(() => receivedMessage.channel.stopTyping());
        }).catch(err => console.error(err));
    
    };
    
    module.exports.help = {
        name: 'meme',
        aliases: ['memes']
    }
return
}

// ,earrape

function earrapeCommand (arguments, receivedMessage) {
// cand bagi un file.mp3, sa lasi la sfarsit 0.24 secunde in Premiere Pro
if (!receivedMessage.member.hasPermission("ADMINISTRATOR")) return receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
if (!receivedMessage.member.voiceChannel) return receivedMessage.reply("**trebuie sa intri intr-un voice channel ca sa bagi earrape!**")
receivedMessage.channel.send(`**${receivedMessage.author.toString()}** a bagat earrape in **${receivedMessage.member.voiceChannel.name}** `);
let mp3 = ['earrape/earrape0.mp3', 'earrape/earrape1.mp3', 'earrape/earrape2.mp3', 'earrape/earrape3.mp3', 'earrape/earrape4.mp3', 'earrape/earrape5.mp3', 'earrape/earrape6.mp3', 'earrape/earrape7.mp3', 'earrape/earrape8.mp3', 'earrape/earrape9.mp3', 'earrape/earrape10.mp3', 'earrape/earrape11.mp3', 'earrape/earrape12.mp3']
let music = Math.floor((Math.random() * mp3.length))
let user = receivedMessage.member
console.log(music)
var VC = receivedMessage.member.voiceChannel;      
VC.join()
.then(connection => {
const dispatcher = connection.playFile(mp3[music]);
dispatcher.on("end", _end => {VC.leave()});
})
.catch(console.error);
console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " a bagat earrape in " + receivedMessage.member.voiceChannel.name)
}
// ,say

function sayCommand(arguments, receivedMessage) {
    let propozitie = arguments.join(" ")
    if (arguments.length == 0) return receivedMessage.channel.send("**Te rog sa pui o propozitie ca sa il repet**")
    receivedMessage.delete()
    receivedMessage.channel.send(`${propozitie}`)
    console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " a folosit comanda ,say si a scris: " + propozitie)
    return
}

   
// ,botinvite

function botinviteCommand (arguments, receivedMessage) {
    if (!receivedMessage.member.hasPermission("ADMINISTRATOR")) return receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
    receivedMessage.author.send("Link de invite la bot: https://discordapp.com/oauth2/authorize?client_id=472372601507938326&scope=bot&permissions=8")
    receivedMessage.channel.send("**Verificati DM-ul**")
    console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " a folosit comanda ,botinvite")
    return
}

// ,vadimtudor

function vadimtudorCommand (_arguments, _receivedMessage) {

    // cand bagi un file.mp3, sa lasi la sfarsit 0.24 secunde in Premiere Pro
    if (!receivedMessage.member.hasPermission("MOVE_MEMBERS")) return receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
    if (!receivedMessage.member.voiceChannel)
                return receivedMessage.reply("**trebuie sa intri intr-un voice channel ca sa vina Vadim!**")
    receivedMessage.channel.send(`**${receivedMessage.author.toString()}** l-a chemat pe Vadim Tudor in **${receivedMessage.member.voiceChannel.name}** `);
       let mp3 = ['Vadim0.mp3', 'Vadim1.mp3', 'Vadim2.mp3', 'Vadim3.mp3', 'Vadim4.mp3', 'Vadim5.mp3', 'Vadim6.mp3', 'Vadim7.mp3', 'Vadim8.mp3', ]
       let music = Math.floor((Math.random() * mp3.length))
       let user = receivedMessage.member
       console.log(music)
       var VC = receivedMessage.member.voiceChannel;      
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile(mp3[music]);
                dispatcher.on("end", _end => {VC.leave()});
            })
            .catch(console.error);
            console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " l-a chemat pe Vadim Tudor in " + receivedMessage.member.voiceChannel.name)
    return
        }
// ,sunete
function suneteCommand (_arguments, _receivedMessage) {

// cand bagi un file.mp3, sa lasi la sfarsit 0.24 secunde in Premiere Pro
if (!receivedMessage.member.hasPermission("MOVE_MEMBERS")) return receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
if (!receivedMessage.member.voiceChannel)
            return receivedMessage.reply("**trebuie sa intri intr-un voice channel ca botul sa faca un sunet!**")
receivedMessage.channel.send(`**${receivedMessage.author.toString()}** a bagat botul cu sunet in **${receivedMessage.member.voiceChannel.name}** `);
   let mp3 = ['cyka.mp3', 'bevali.mp3', 'cheeki.mp3', 'bevali2.mp3', 'fbi.mp3', 'CSGO.mp3', 'katalin.mp3', 'thx.mp3']
   let music = Math.floor((Math.random() * mp3.length))
   let user = receivedMessage.member
   console.log(music)
   var VC = receivedMessage.member.voiceChannel;      
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile(mp3[music]);
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
        console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " a bagat botul cu sunet in " + receivedMessage.member.voiceChannel.name)
};

 return
}
// ,leave

function leaveCommand (arguments,receivedMessage) {
    if (!receivedMessage.member.hasPermission("MOVE_MEMBERS")) return receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
    if (!receivedMessage.member.voiceChannel) return receivedMessage.channel.send("**Botul Nu Se Afla In Voice Channel sau Trebuie Sa Fii In Voice Channelul Respectiv**")
    receivedMessage.member.voiceChannel.leave()
     
     console.log(receivedMessage.mentions.users.first() || receivedMessage.author + " a scos botul din Voice Channel")
  return
}

// ,pines

function pinesCommand (arguments, receivedMessage) { 

let dicksize = ["**0** inches! **8D**\n**E nevoie de un microscop ca sa o vedem!**", "**1** inch! **8=D**", "**2** inches! **8==D**", "**3** inches! **8===D**", "**4** inches! **8====D**", "**5** inches! **8=====D**", "**6** inches! **8======D**", "**7** inches! **8=======D**", "**8** inches! **8========D**", "**9** inches! **8=========D**", "**10** inches! **8==========D**", "*404 not found*", "**11** inches! **8===========D**", "**12** inches! **8============D**", "**13** inches! **8=============D**", "**14** inches! **8==============D**", "**15** inches! **8===============D**", "**16** inches! **8================D**", "**17** inches! **8=================D**", "**18** inches! **8==================D**", "**19** inches! **8===================D**", "**20** inches! **8====================D**\n**Asta nu e puță deja. Asta e pulă de cal!!!**",];
let dickuser = receivedMessage.mentions.users.first() || receivedMessage.author
    receivedMessage.channel.send(`Puța lui **${dickuser.username}** este de ${dicksize[~~Math.floor(Math.random() * dicksize.length)]}`);
    return
}

// ,ghicitoare

function ghicitoareCommand(arguments, receivedMessage) { 

if (!arguments[0]) return receivedMessage.reply("**da intrebarea unde e? Da o intrebare completa** `,ghicitoare [intrebare]`")
 let replies = ["Posibil", "Dupa cum vad eu, DA", "Incearca mai tarziu", "Mai bine e sa nu-ti zic", "Raspunsul meu este NU", "Sursele mele spun NU", "Fara nicio indoiala", "Pozitiv", "Neutru"]
 let result = Math.floor((Math.random() * replies.length))
 let questions = arguments.slice(0).join(" ")
 let ballembed = new Discord.RichEmbed()
 .setAuthor(receivedMessage.author.tag)
 .setColor("RANDOM")
 .addField("Intrebarea", questions)
 .addField("Raspunsul", replies[result])

 receivedMessage.channel.send(ballembed)
 return
}
 
// ,avatar

function avatarCommand(_arguments, receivedMessage) {

    let user2 = receivedMessage.mentions.users.first() || receivedMessage.author
    let user = receivedMessage.mentions.members.first() || receivedMessage.member
    let sicon = user2.avatarURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(sicon)
    .addField("AVATAR", "Asta e avatarul tau")    

    receivedMessage.channel.send(serverembed)
 
return
}

// ,despremine

function despremineCommand(_arguments ,receivedMessage) {
  
  let user2 = receivedMessage.mentions.users.first() || receivedMessage.author
  let user = receivedMessage.mentions.members.first() || receivedMessage.member
  let sicon = user2.avatarURL;
  let serverembed = new Discord.RichEmbed()
 .setAuthor(name=user2.username + '#' + user2.discriminator, iconURL=sicon,)
 .setColor("RANDOM")
 .setThumbnail(sicon)
 .addField("Inregistrat pe:", user2.createdAt)
 .addField("Intrat pe:", user.joinedAt)
 .addField('Status:', user.presence.status, true)
 .addField("Activitate:", user.presence.game, true)
 .addField("Roluri:", user.roles.map(r => `${r}`).join(' | '), true)
 .setFooter(`ID: ${user.id}`)
 .setTimestamp()

 receivedMessage.channel.send(serverembed);
 return 
    
}

// ,ban

function banCommand(arguments,receivedMessage) {

    if(!receivedMessage.client.hasPermission("BAN_MEMBERS")) return receivedMessage.channel.send("Nu am permisiunea necerasa")

    if(!receivedMessage.member.hasPermission("BAN_MEMBERS")) {
        receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
        return
    }

    if (arguments.length == 0) {
        receivedMessage.channel.send("**Introduceti comanda complecta.** `,ban [ultilzator] [motiv]`")
        return
    } 
if (receivedMessage.isMentioned(client.user)) return receivedMessage.channel.send("**Nu poti sa dai ban botului**")
let bUser = receivedMessage.guild.member(receivedMessage.mentions.users.first() || receivedMessage.guild.members.get(arguments[0]));
if (!bUser) return receivedMessage.channel.send("**Acest Utilizator nu este pe server.**")
let bReason = arguments.join(" ").slice(20)
if(bUser.hasPermission("BAN_MEMBERS")) return receivedMessage.channel.send("**Aceasta persoana nu poate primi BAN.**")

let banEmbed = new Discord.RichEmbed()
.setDescription(`~BAN~`)
.setColor("#e56b00")
.addField("Utilizator Banat", `${bUser} with ID ${bUser.id}`)
.addField("Banat de", `<@${receivedMessage.author.id}> with ID ${receivedMessage.author.id}`)
.addField("Banat in", receivedMessage.channel)
.addField("Timp", receivedMessage.createdAt)
.addField("Motiv", bReason)

let banChannel = receivedMessage.guild.channels.find(`name`, "server-logs")
if (!banChannel) return receivedMessage.channel.send("**Nu putem gasi canalul de LOG**")

receivedMessage.channel.send(`**${bUser} a primit BAN!**`)

receivedMessage.guild.member(bUser).ban(bReason)
banChannel.send(banEmbed)

return
}

// ,kick

function kickCommand(arguments,receivedMessage) {
if(!receivedMessage.member.hasPermission("KICK_MEMBERS")) {
    receivedMessage.channel.send("**Nu ai permisiunea necesara ca sa executi comanda**")
    return
}   
 if (arguments.length == 0) {
        receivedMessage.channel.send("**Introduceti comanda complecta.** `,kick [ultilzator] [motiv]`")
        return
} 
if (receivedMessage.isMentioned(client.user)) return receivedMessage.channel.send("**Nu poti sa dai kick botului**")
let kUser = receivedMessage.guild.member(receivedMessage.mentions.users.first() || receivedMessage.guild.members.get(arguments[0]));
if (!kUser) return receivedMessage.channel.send("**Acest Utilizator nu este pe server.**")
let kReason = arguments.join(" ").slice(20)
if(kUser.hasPermission("KICK_MEMBERS")) return receivedMessage.channel.send("**Aceasta persoana nu poate primi KICK**")

let kickEmbed = new Discord.RichEmbed()
.setDescription(`~Kick~`)
.setColor("#e56b00")
.addField("Utilizator Dat Afara", `${kUser} cu ID-ul ${kUser.id}`)
.addField("Dat afara de", `<@${receivedMessage.author.id}> cu ID-ul ${receivedMessage.author.id}`)
.addField("Dat afara in", receivedMessage.channel)
.addField("Timp", receivedMessage.createdAt)
.addField("Motiv", kReason)

let kickChannel = receivedMessage.guild.channels.find(`name`, "server-logs")
if (!kickChannel) return receivedMessage.channel.send("**Nu putem gasi canalul de LOG**")

receivedMessage.channel.send(`**${kUser} a fost dat afara!**`)

receivedMessage.guild.member(kUser).kick(kReason)
kickChannel.send(kickEmbed)

return
}
// ,report

function reportCommand(arguments, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("**Introduceti comanda complecta.** `,report [utilizator] [motiv]`")
        return
    } 
    if (receivedMessage.isMentioned(client.user)) return receivedMessage.channel.send("**Nu poti sa dai raport botului**")
    let rUser = receivedMessage.guild.member(receivedMessage.mentions.users.first() || receivedMessage.guild.members.get(arguments[0]));
    if(!rUser) return receivedMessage.channel.send("**Acest Utilizator nu este pe server.**");
    let reason = arguments.join(" ").slice(20);
    
    let reportEmbed = new Discord.RichEmbed()
     .setDescription("Reports")
     .setColor("#15f153")
     .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
     .addField("Reported By", `${receivedMessage.author} with ID: ${rUser.id}`)
     .addField("Channel", receivedMessage.channel)
     .addField("Time", receivedMessage.createdAt)
     .addField("Reason", reason)

     let reportschannel = receivedMessage.guild.channels.find(`name`, "server-logs")
     if(!reportschannel) return receivedMessage.channel.send("**Nu am putut gasi canalul de raporturi**")
     receivedMessage.channel.send(`**${rUser} a fost raportat!**`)
     receivedMessage.delete().catch(_O_o =>{})
     reportschannel.send(reportEmbed)

    console.log(receivedMessage.author.username + "#" + receivedMessage.author.discriminator + " l-a raportat pe " + receivedMessage.mentions.users.first().username + "#" + receivedMessage.mentions.users.first().discriminator)

     return
}
 

// ,hello

function helloCommand(_arguments, receivedMessage) {
    receivedMessage.channel.send("**Hello **" + receivedMessage.author.toString())
}

// ,serverinfo

function serverinfoCommand(_arguments, receivedMessage) {


let sicon = receivedMessage.guild.iconURL;
let serverembed = new Discord.RichEmbed()
 .setAuthor(receivedMessage.guild.name, iconURL=sicon)
 .setColor("#15f153")
 .setThumbnail(sicon)
 .addField("Onwerul serverului:", receivedMessage.guild.owner)
 .addField("Regiunea:", receivedMessage.guild.region)
 .addField("Membrii totali pe server:", receivedMessage.guild.memberCount)
 .addField("Creat pe:", receivedMessage.guild.createdAt)
 .addField("Intrat pe:", receivedMessage.guild.joinedAt)
 .setFooter("Bot creat de Niks", iconURL="https://images-ext-1.discordapp.net/external/PC-slxMIV9VLEowpeR_P0nV0QRVw8FXGT_ygo6HZuXw/https/cdn.discordapp.com/avatars/272738418553913344/a_95fdc7c17c5754e69f91eab1df41317d.gif")
 .setTimestamp()
 
 
 receivedMessage.channel.send(serverembed);
 
 return 
}
// ,ping

function pingCommand(_arguments, receivedMessage) {
    receivedMessage.channel.send( "**Pong!** Your ping is `" + `${Date.now() - receivedMessage.createdTimestamp}` + " ms`" )
}
// ,inmultire


function inmultireCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("**Argumente insuficiente! Incearca `,inmultire 2 10`**")
       return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("**Produsul lui **`" + `${arguments}` + "` **este** `" + `${product.toString()}` + "` ")

// ,help

}
function helpCommand(arguments, receivedMessage) {

  let sicon = client.user.avatarURL;
  let serverembed = new Discord.RichEmbed()
 .setColor("#15f153")
 .setThumbnail(sicon)
 .addField("Sectia de HELP", "Mai jos sunt comenzile care le puteti folosi pentru acest bot!")
 .addField(",hello", "Botul de saluta")
 .addField(",inmultire", "Botul iti inmulteste niste numere")
 .addField(",serverinfo", "Afiseaza informatie despre server")
 .addField(",ping", "Afiseaza ping-ul tau")
 .addField(",report", "Raporteaza o persoana care a incalcat regulamentul")
 .addField(",despremine", "Aflii informatie despre tine")
 .addField(",avatar", "Iti arata avatarul daca iti trebuie poza")
 .addField(",ghicitoare", "Da-i o intrebare si vei primi raspunsul decis")
 .addField(",pines", "Iti arata cat de mare o ai <:ainsley:323688041980100619>")
 .addField(",sunete", "Botul va reda diferite suntete funny")
 .addField("Tag la bot", "Daca da-ti tag la bot, o sa va raspunda cu vorbe dulci")
 .addField(",vadimtudor", "Va veni Vadim Tudor si o sa te bata la cap!")
 .addField(",say", "Botul repeta ceea ce ii spui sa zica")
 .setFooter("Bot creat de Niks", iconURL="https://images-ext-1.discordapp.net/external/PC-slxMIV9VLEowpeR_P0nV0QRVw8FXGT_ygo6HZuXw/https/cdn.discordapp.com/avatars/272738418553913344/a_95fdc7c17c5754e69f91eab1df41317d.gif")
 .setTimestamp()

 receivedMessage.channel.send(serverembed)
 return
 }


client.login(procces.env.token)
