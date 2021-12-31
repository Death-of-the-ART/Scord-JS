const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Version, Status, Uptime'),
    async execute(interaction) {
        let days = Math.floor(interaction.client.uptime / 86400000);
        let hours = Math.floor(interaction.client.uptime / 3600000) % 24;
        let minutes = Math.floor(interaction.client.uptime / 60000) % 60;
        let seconds = Math.floor(interaction.client.uptime / 1000) % 60;

        const attachment = new MessageAttachment('./assets/Scord-Release.png', 'Scord-Release.png');
        const dataEmbed = new MessageEmbed()
            .setColor('#6EFF0A')
            .setTitle(`Responding - ${interaction.client.ws.ping}ms`)
            .setThumbnail('attachment://Scord-Release.png')
            .addFields(
                { name: 'NodeJS', value: process.version, inline: true },
                { name: 'Scord', value: "4.0.0-debug", inline: true },
                { name: 'Uptime', value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true },
            );
        await interaction.reply({ embeds: [dataEmbed], files: [attachment] });
    },
};
