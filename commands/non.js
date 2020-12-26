const Discord = require("discord.js");
const prefix = "?";
const { Client, Collection, MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: 'non',
    description: 'dire non.',
    run(client, message, args){
    console.log(message);
        if(message.content.startsWith(`${prefix}non`)){
            const embed = new MessageEmbed()
            .setTitle('NON')
            .setColor(0xff0000)
            .setDescription('NON')
            .setImage('https://pbs.twimg.com/media/EF9_BfGXkAEnTyN.jpg')
            .setFooter('NON');
            message.channel.send(embed);}
    }
}