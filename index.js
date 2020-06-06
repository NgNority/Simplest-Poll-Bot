const fs = require('fs');
const AWS = require('aws-sdk');
const Discord = require('discord.js');
var { token } = require('./config.json');
var prefix = "/";
//aws setup
let awsConfig = {
  "region": "ca-central-1",
  "endpoint": "https://dynamodb.ca-central-1.amazonaws.com",
  "accessKeyId": "[Yeah right like im giving you that]", "secretAccessKey": "[Yeah right like im giving you that]"
};
AWS.config.update(awsConfig);

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

// client.on('disconnect', () => {
//   client.destroy().then(client.login(token));
// });

client.on('debug', console.log)

client.on('message', async message => {
  let docClient = new AWS.DynamoDB.DocumentClient();
  let fetchOneByKey = function () {
    var params = {
        TableName: "server-ids",
        Key: {
            "ID": message.guild.id
        }
    };
     docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
            console.log("Prefix Not Set, Reverting to defult");
            console.log("Eroor" + err);
            prefix = "/";
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
            console.log(data);  
            try{
            prefix = data.Item.prefix;
            } catch(err){
              console.log("Prefix Not Set, Reverting to defult");
              console.log("Eroor" + err);
              prefix = "/";
            }
            console.log("New Prefix is: " + prefix);
            
        }
    })
}


await fetchOneByKey();


  try{
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if(message.member.roles.find(r => r.name === "no-poll")){
    message.reply('You have the `no-poll` role which wont allow you to make polls');
    console.log("User has no-poll role");
  }else{
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
  
     if (command === `poll-help`) {
      try {
        client.commands.get("help").execute(message, args, Discord);
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
  }else if (command === `poll-colors`) {
    try {
      client.commands.get('colorHelp').execute(message, args, Discord);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
    //client.commands.get(command).execute(message, args, Discord);
  }else if (command === `poll-updates`) {
    try {
      client.commands.get('pollUpdates').execute(message, args, Discord);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
    //client.commands.get(command).execute(message, args, Discord);
  }else if (command === `poll-prefix`) {
    try {
      client.commands.get('prefixChange').execute(message, args, Discord);
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