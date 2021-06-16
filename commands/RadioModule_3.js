module.exports = {
    name: 'radiop3',
    guildOnly: true,
    cooldown: 3,
    execute(message) {
        const channel = message.client.channels.cache.get(process.env.IDVOICE);
        
        if (!channel) return console.error("|6|REQUEST_FAILED");
        channel.join().then(connection => {
            console.log(`|3|[3]REQUEST_CONNECT - ${message.author.tag}`);
            connection.play(process.env.STREAM3, { volume: false }, { bitrate: 44100 }, { highWaterMark: 100 });
            message.client.user.setActivity(process.env.STATUS3, { type: "LISTENING" })
                .then(console.log(`|4|[3]REQUEST_SUCCESSFUL`), message.delete());
        }).catch(e => {
            console.error(e);
        });
    },
};