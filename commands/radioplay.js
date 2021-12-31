const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('radioplay')
		.setDescription('Play Radio')
		.addIntegerOption(option => option.setName('int').setDescription('Select Channel').setMinValue(1).setMaxValue(4)),
	async execute(interaction) {
		const input = interaction.options.getInteger('int');
		const { Connect, Stream1, Stream2, Stream3, Stream4, Play } = require('../Player');
		Connect();
		Play();
		if (input == 1) {
			Stream1();
		}
		else if (input == 2) {
			Stream2();
		}
		else if (input == 3) {
			Stream3();
		}
		else if (input == 4) {
			Stream4();
		};
		await interaction.reply('Playing');
		await interaction.deleteReply();
	},
};
