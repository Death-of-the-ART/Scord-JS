const { client } = require("./index.js");
const { joinVoiceChannel, getVoiceConnection, createAudioResource, createAudioPlayer } = require("@discordjs/voice");
const { value1, value2, value3, value4, name1, name2, name3, name4 } = require('./source.json');

var connection;
var player;

async function Play() {
    player = createAudioPlayer();
    const resource = createAudioResource(value1);
    connection = getVoiceConnection(process.env.GUILDID);
    connection.subscribe(player);
    player.play(resource);
    client.user.setActivity(name1, { type: 'LISTENING' });
};

function Connect() {
    const channel = client.channels.cache.get(process.env.IDVOICE);
    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    });
};

function Disconnect() {
    connection.disconnect();
};

async function Activity(state) {
    client.user.setActivity(state, { type: 'LISTENING' });
};

async function Stream1() {
    const resource = createAudioResource(value1);
    player.play(resource);
    Activity(name1); 1
};

async function Stream2() {
    const resource2 = createAudioResource(value2);
    player.play(resource2);
    Activity(name2);
};

async function Stream3() {
    const resource2 = createAudioResource(value3);
    player.play(resource2);
    Activity(name3);
};

async function Stream4() {
    const resource2 = createAudioResource(value4);
    player.play(resource2);
    Activity(name4);
};

module.exports = { Play, Connect, Disconnect, Stream1, Stream2, Stream3, Stream4 };
