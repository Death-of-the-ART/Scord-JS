const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disconnect')
        .setDescription('Disconnect bot from channel!'),
    async execute(interaction) {
        const { Disconnect } = require('../Player');
        Disconnect();
        await interaction.reply('Disconnected!');
        await interaction.deleteReply();
    },
};
