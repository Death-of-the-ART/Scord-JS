module.exports = {
    name: 'radiodc',
    description: 'Disconnect bot from the channel!',
    cooldown: 5,
    execute(message) {

        try {
            message.delete()
            message.guild.voice.channel.leave()
            console.log(`|5|REQUEST_DISCONNECT`)
        } catch (error) {}
    },
};