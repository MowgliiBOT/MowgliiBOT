const Discord = require("discord.js");


var bot = new Discord.Client();
var prefix = ("*");
var randnum = 0;

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "*help | 1.3 (OMEGA)"}})
    console.log("Je suis dispo patron !");
});

bot.login("NDQzMDc5MzAxMTE0NjI2MDY4.DdIJVg.iQePxjBnqKsaD9FUaQtLl2AQYzw");

bot.on("message" , message => {
    if (message.content === "ping"){
        message.reply("pong! :ping_pong:");
        console.log("ping pong");
     }

     if (message.content === prefix + "maj"){
         var maj_embed = new Discord.RichEmbed()
            .setColor("#FE01ED")
            .addField("Notes de patche de la version 1.3" , "(OMEGA)")
            //.addField("Ajout de :" , " -Commandes : \n   *avatar : Affiche votre avatar ")
            .addField("Amélioration de :" , " -Commande *avatar")
            //.addField("Correction de bugs :" , " -Unification des commandes *youtube et *twitch en *socialinfos")
            .setFooter("Version 1.3 (OMEGA)")
        message.channel.sendEmbed(maj_embed);
        console.log("Commande *maj demandée !")
     }
    
        
      if (message.content === prefix + "anarchy"){
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
          message.channel.sendMessage("@everyone");
      }  

     if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .addField("Commandes du bot !" , "  `*help` : Affiche les commandes du bot ! \n`*invite` : Génere le lien d'invitation du bot ! \n`*avatar` : Affiche votre avatar ! \n`*socialinfos` : Affiche les lien untiles du créateur ! \n`*maj` : Affiche les détails de la dernière version  ! \n`*blague` : Vous sort une blague aléatoire (amusante ou pas...) ! \n`*yt` : Affiche le lien de la chaîne YouTube de MowgliiBOT !")
            .addField("Interaction" , "ping : Pong ! ")
            .setFooter(message.author.username , message.author.avatarURL)
            //.setFooter("Interface Robot par Gaspar QLF / 2018 / 1.3 (OMEGA)")
        message.channel.sendEmbed(help_embed);
            ///message.channel.sendMessage("```Le bot est indisponible pour l'instant, il est en cours de maintenance...```");
        console.log("Commande *Help demandée !");
     }

     if (message.content === prefix + "invite"){
        var invite_embed = new Discord.RichEmbed()
            .setColor("#01FEDC")
            .addField("Invitez Moi !!" , "Voici le lien pour m'inviter dans vos serveurs : \n https://discordapp.com/api/oauth2/authorize?client_id=443079301114626068&permissions=8&scope=bot")
        message.channel.sendEmbed(invite_embed);
        //message.channel.sendMessage("Voici le lien pour m'inviter dans vos serveurs : \n https://discordapp.com/api/oauth2/authorize?client_id=442675520296189953&permissions=8&scope=bot");
        console.log("Commande *Invite demandée !");
     }

     if (message.content === prefix + "socialinfos"){
         var si_embed = new Discord.RichEmbed()
            .setColor("#D80000")
            .addField("Abonnez à la chaîne YouTube de mon créateur :" ,  "https://www.youtube.com/channel/UCzSHbmZevJ-T1kek1XKkG_Q")
            .addField("Suivez la chaîne Twitch de mon créateur :" ,  "https://www.twitch.tv/gaspar_qlf")
        message.channel.sendEmbed(si_embed);
        console.log("Commande *socialinfos demandée !");
     }
     
     //if (message.content === prefix + "warn" + member.displayName){
         //message.client.users.get(mention.id);
     //}

     if (message.content === prefix + "avatar"){
        message.reply(":")
        var avatar_embed = new Discord.RichEmbed()
            .setColor("#4401FE")
            .setImage(message.author.avatarURL)
            .setTitle("Voici ton avatar !")
            .setFooter(message.author.username , message.author.avatarURL)
        message.channel.sendEmbed(avatar_embed);
        //message.reply(message.author.avatarURL)
        console.log("Commande *avatar demandée !");
     }
     
     if (message.content === prefix + "yt"){
        var yt_embed = new Discord.RichEmbed()
            .setColor("#FEF600")
            .setTitle("Voici le lien de ma chaîne YouTube (MowgliiBot) :")
            .addField("https://www.youtube.com/channel/UCI87r-8hadofr1PJOvUqCuQ" , "Abonne toi stp sa fait plaisir !")
            .setFooter(message.author.username , message.author.avatarURL)
        message.channel.sendEmbed(yt_embed);
        console.log("Commande *yt demandée !");
     }

     if (message.content === prefix + "own"){
         message.reply("est maintenant le chef du serveur !")
     }

     if (message.content === prefix + "vbuck"){
        message.channel.sendMessage("13500 V-BUCKS on étés ajoutés à votre compte !")
        console.log("V-BUCKS ajoutés !")
     }
     
     if (message.content === prefix + "blague"){
        random();

        if (randnum == 1){
            message.reply("Tu connais la blague du nombril ?");
            message.reply("NON...bril !!!!!!");
            console.log("Nombril !");
        }

        if (randnum == 2){
            message.reply("Tu connais la blague du caca ?");
            message.reply("C'est de la merde !");
            console.log("Merde !");
        }

        if (randnum == 3){
            message.reply("Que-ce qui est jaune et qui attend ?");
            message.reply("Jonhattan !!");
            console.log("Jonhattan !");
        }

     //if (message.content.startsWith("*kick")){
        //var member = message.mentions.members.first();
       // member.kick().then((member) => {
            //message.channel.send(":wave: " + member.displayName + " a été kick ");
        //}).catch(() => {
            //message.channel.send("Access Denied");
        //});
        //}


    }}


);

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

