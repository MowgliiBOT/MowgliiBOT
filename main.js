const Discord = require("discord.js");


var bot = new Discord.Client();
var prefix = ("*");
var randnum = 0;

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "[*help for help me]v 1.0"}})
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on("message" , message => {
    if (message.content === "ping"){
        message.reply("pong! :ping_pong:");
        console.log("ping pong");
    }

   
        
        

     if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .addField("Commandes du bot !" , "  *help : Affiche les commandes du bot ! \n*invite : Génere le lien d'invitation du bot !")
            .addField("Interaction" , "ping : Pong ! ")
            .setFooter("Interface Robot par Gaspar QLF / 2018 / 1.0")
        message.channel.sendEmbed(help_embed);
            //message.channel.sendMessage("Voici les commandes du bot :\n - *help : pour afficher les commandes \n - *invite : pour générer le lien d'invitation du bot");
        console.log("Commande *Help demandée !");
     }

     if (message.content === prefix + "invite"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#01FEDC")
            .addField("Invitez Moi !!" , "Voici le lien pour m'inviter dans vos serveurs : \n https://discordapp.com/api/oauth2/authorize?client_id=442675520296189953&permissions=8&scope=bot")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici le lien pour m'inviter dans vos serveurs : \n https://discordapp.com/api/oauth2/authorize?client_id=442675520296189953&permissions=8&scope=bot");
        console.log("Commande *Invite demandée !");
     }

     if (message.content === "Comment vas-tu QLF-Mowglii-BOT?"){
        random();

        if (randnum == 1){
            message.reply("Je vais très bien merci ! :smile: ");
            console.log("Je vais bien");
        }

        if (randnum == 2){
            message.reply("Je ne suis pas très bien... Merci de te t'en faire pour moi ! ");
            console.log("Je ne vais pas bien");
        }
     }}


);

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
