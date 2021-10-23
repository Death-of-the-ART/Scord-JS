module.exports = {
    name: 'radiop',
    guildOnly: true,
    cooldown: 3,
    execute(message) {
        const channel = message.client.channels.cache.get(process.env.IDVOICE);
        
        if (!channel) return console.error("|6|REQUEST_FAILED");
        channel.join().then(connection => {
            console.log(`|3|REQUEST_CONNECT[0] - ${message.author.tag}`);
            connection.play(process.env.STREAM, { volume: false }, { bitrate: 44100 }, { highWaterMark: 100 });
            message.client.user.setActivity(process.env.STATUS, { type: "LISTENING" })
                .then(console.log(`|4|REQUEST_SUCCESSFUL`), message.delete());
        }).catch(e => {
            console.error(e);
        });
    },
};