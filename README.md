# SCORD JS 4.0.0

![Scord-JS.png](assets/Scord-JS.png)

## Description

Simple static 4Way music bot for one channel with deploy to Heroku 

## Slash Commands

| Slash | VARIABLE |
| -------- | ------ |
| radioplay | 1-4 |
| status | Version, Status, Uptime |
| clean | Delete multiple messanges up to 99 |
| disconnect | Disconnect bot from channel |

## Context Menu

| Slash | VARIABLE |
| -------- | ------ |
| sync | firebasesync |

## Environment Variables

| VALUE | VARIABLE |
| -------- | ------ |
| AuthorizationToken | TOKEN |
| OwnerID | IDADMIN |
| VoiceChannel | IDVOICE |
| ServiceChannel | IDSTART |
| Application ID | CLIENTID |
| Server ID | GUILDID |
| FirebaseApiKey | apiKey |
| FirebaseDomain | authDomain |
| FirebaseID | projectId |
| FirebaseBucket | storageBucket |
| FirebaseSenderID | messagingSenderId |
| FirebaseID | appId |
| FirebaseMail | MAIL |
| FirebasePassword | PASS |

## Dependencies

```sh
 "engines": {
    "node": "17.0.0"
  },
  "dependencies": {
    "discord.js": "13.4.0",
    "@discordjs/voice": "0.7.5",
    "@discordjs/builders": "0.10.0",
    "@discordjs/rest": "0.2.0-canary.0",
    "discord-api-types": "0.26.0",
    "libsodium-wrappers": "0.7.9",
    "firebase": "9.6.1",
    "ffmpeg-static": "4.4.0"
  }
}
```
