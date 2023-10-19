# Discord bot

- Set your bot in discord in https://discord.com/developers/applications
- Set in bot tab:
- PRESENCE INTENT on
- SERVER MEMBERS INTENT On
- MESSAGE CONTENT INTENT

- Set the envs in .env:

OPEN_AI_API_KEY=
DISCORD_TOKEN=

- run nodemon index.js

- Go to oauth2 tab, URL generator and select:
- messages.read, application.commands and bot
- then select administrator, copy url and add the bot to your discord
