const fs = require("fs");

//Firebase
const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { firebaseConfig } = require('./firebaseTools/firebaseConfig.js');

const app = initializeApp(firebaseConfig);
const { data } = require('./firebaseTools/getData.js');

const auth = getAuth();

var email = process.env.MAIL;
var password = process.env.PASS;

// Login Firebase
function Auth(params) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
};

// Discord
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES] });
client.commands = new Collection();

client.login(process.env.TOKEN);

module.exports = { client };

// Login Report
client.once('ready', () => {
    console.log(`|0|INVOKE_REQUEST`);
    console.log(`|2|INVOKE_SUCCESSFUL - ${client.user.tag}`);
    client.user.setActivity('ONLINE', { type: "LISTENING" });
    const channel = client.channels.cache.get(process.env.IDSTART);
    if (channel != null) {
        channel.send("`|-----|SERVICE-ONLINE|-----|`");
    } else {
        console.log("|404|Undefined Start Channel");
    };
});

const { Play, Connect, Disconnect } = require("./Player.js");

// Autoplay
client.on('ready', () => {
    Connect();
    Play();
});

// Autoreconnect
client.on('ready', () => {
    const timeout = 240 * 60 * 1000;
    setTimeout(() => {
        console.log("|7|RESTART_VOICE")
        Disconnect();
        setInterval(() => {
            Connect();
            Play();
        }, 5000);
    }, timeout);
});

// Commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() && !interaction.isContextMenu()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});
