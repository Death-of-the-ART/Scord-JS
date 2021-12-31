const { ContextMenuCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('sync')
        .setType(2),
    async execute(interaction) {
        const { data } = require('../firebaseTools/getData');
        if (interaction.member.id == process.env.IDADMIN) {
            data().then(outl => interaction.reply({ content: outl, ephemeral: true }));
        }
        else {
            await interaction.reply({ content: 'Owner Only!', ephemeral: true });
        }
    }
};
