const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clean')
		.setDescription('Delete multiple messanges up to 99!')
		.addIntegerOption(option => option.setName('int').setDescription("How Many").setMinValue(1).setMaxValue(99)),
	async execute(interaction) {
		if (interaction.member.id == process.env.IDADMIN) {
			const amount = interaction.options.getInteger('int');
			interaction.channel.bulkDelete(amount, true).catch(error => { console.log(error) });
			await interaction.reply({ content: "Deleted: " + amount, ephemeral: true });
		}
		else {
			await interaction.reply({ content: "Only Owner!", ephemeral: true });
		};
	},
};
