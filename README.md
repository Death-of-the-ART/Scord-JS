# SCORD JS 3.2.0

![Scord-JS.png](assets/Scord-JS.png)

## Description

Simple static 4Way music bot for one channel with deploy to Heroku 

## Commands

| VALUE | VARIABLE |
| -------- | ------ |
| !Radiop | Play Stream 1  |
| !Radiop2 | Play Stream 2  |
| !Radiop3 | Play Stream 3  |
| !Radiop4 | Play Stream 4  |
| !Radiodc | Disconnect  |
| !Clear | Cleanup to 99 Messages |s
| !Status | Version, Status, Uptime |

## Environment Variables

| VALUE | VARIABLE |
| -------- | ------ |
| AuthorizationToken | TOKEN |
| OwnerID | IDADMIN |
| VoiceChannel | IDVOICE |
| ServiceChannel | IDSTART |
| StreamURL | STREAM |
| StreamURL2 | STREAM2|
| StreamURL3 | STREAM3 |
| StreamURL4 | STREAM4 |
| PresencePlaying | STATUS |
| PresencePlaying2 | STATUS2 |
| PresencePlaying3 | STATUS3 |
| PresencePlaying4 | STATUS4|

## Dependencies

| ENGINES | VERSION |
| -------- | ------ | 
| [Node.js](https://nodejs.org/) | 14.18.1 |

| PACKAGE | VERSION |
| -------- | ------ |
|[discord.js](https://discord.js.org/#/) | 12.5.3 |
| [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus) | 0.60 |
| [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)| 4.4.0 |

```sh
  "engines": {
    "node": "14.18.1"
  },
  "author": "Death-of-the-ART",
  "license": "Apache-2.0",
  "repository": "https://github.com/Death-of-the-ART/Scord-JS",
  "dependencies": {
    "discord.js": "12.5.3",
    "@discordjs/opus": "^0.6.0",
    "ffmpeg-static": "^4.4.0"
  }
}
```