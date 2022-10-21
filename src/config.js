require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "911854373196423208", // your bot client id
    prefix: process.env.PREFIX || "-", // bot prefix
    ownerID: process.env.OWNERID || "572614372812390410", //your discord id
    SpotifyID: process.env.SPOTIFYID || "e311e16239d2491fb6c91f90facb0371",
    SpotifySecret: process.env.SPOTIFYSECRET || "cb3f5ae4c54542d09528c07318ba8060",
    mongourl: process.env.MONGO_URI || "mongodb+srv://bruh:bruh@cluster0.zjqq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || 0x303236, // embed colour
    logs: process.env.LOGS || "847747001537527813", // channel id for guild create and delete logs
    errorLogsChannel: process.env.errLogs || "847747001537527813", //error logs channel id
    SearchPlatform: process.env.searchPlatform || "youtube music", // Sets the Search Platform. Possibilities: youtube || youtube music || soundcloud
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/963097935820750878/983300268131225651/20220606_145403.png', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/ns8CTk9J3e', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=977742811132743762&permissions=8&scope=bot%20applications.commands' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "node1.kartadharta.xyz",
            port: parseInt(process.env.NODE_PORT || "443"),
            password: process.env.NODE_PASSWORD || "kdlavalink",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
