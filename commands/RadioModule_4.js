module.exports = {
    name: 'radiop4',
    guildOnly: true,
    cooldown: 3,
    execute(message) {
        const channel = message.client.channels.cache.get(process.env.IDVOICE);
        
        if (!channel) return console.error("|6|REQUEST_FAILED");
        channel.join().then(connection => {
            console.log(`|3|[4]REQUEST_CONNECT - ${message.author.tag}`);
            connection.play(process.env.STREAM4, { volume: false }, { bitrate: 44100 }, { highWaterMark: 100 });
            message.client.user.setActivity(process.env.STATUS4, { type: "LISTENING" })
                .then(console.log(`|4|[4]REQUEST_SUCCESSFUL`), message.delete());
        }).catch(e => {
            console.error(e);
        });
    },
};