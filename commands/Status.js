const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'status',
    description: 'Version, Status, Uptime',
    cooldown: 5,
    execute(message, args) {
        var jv = process.version
        var sv = "3.0.0"

        let days = Math.floor(message.client.uptime / 86400000);
        let hours = Math.floor(message.client.uptime / 3600000) % 24;
        let minutes = Math.floor(message.client.uptime / 60000) % 60;
        let seconds = Math.floor(message.client.uptime / 1000) % 60;
        
        const attachment = new MessageAttachment('./assets/Scord-Release.png', 'Scord-Release.png');
        const exampleEmbed = new MessageEmbed()
            .setColor('#6EFF0A')
            .setTitle(`Responding - ${message.client.ws.ping}ms`)
            .attachFiles(attachment)
            .setThumbnail('attachment://Scord-Release.png')
            .addFields(
                { name: 'NodeJS', value: jv, inline: true },
                { name: 'Scord', value: sv, inline: true },
                { name: 'Uptime', value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true },
            )
        message.channel.send(exampleEmbed);
        message.delete()
        .catch(console.error);
    },
};