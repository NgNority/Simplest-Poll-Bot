const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready!');
  client.user.setPresence({ game: {name: '/poll'}, status: 'online'});
});

client.on('message', async message => {
  try{
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if(message.member.roles.find(r => r.name === "no-poll")){
    message.reply('You have the `no-poll` role which wont allow you to make polls');
    console.log("User has no-poll role");
  }else{
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
  
     if (command === `help`) {
      try {
        client.commands.get(command).execute(message, args, Discord);
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
      }
  
    }else if (command === `poll`) {
      try {
        client.commands.get(command).execute(message, args, Discord);
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
      }
      //client.commands.get(command).execute(message, args, Discord);
  }else if (command === `colorhelp`) {
    try {
      client.commands.get('colorHelp').execute(message, args, Discord);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
    //client.commands.get(command).execute(message, args, Discord);
  }
  

  }
  

    
    
}catch (error){
  client.commands.get(command).execute(message, args, Discord);

//message.channel.send(embedHelp)
}    
    
});

// login to Discord with your app's token
client.login(token);