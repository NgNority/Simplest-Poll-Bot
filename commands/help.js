module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args, Discord) {
                message.delete();
        let embedHelp = new Discord.RichEmbed()
        .setTitle("Simplest Poll Usage")
        .setDescription('**To make a simple pole use** \n */poll [Color] \"Question\"*\n\n**To make a advanced pole use** \n */poll [Color] \"Question\" \"Anwser1\" \"Anwser2\" \"Anwser3\"*\n**Note: The advanced pole can only take from 2-10 anwsers. If you write one with only one anwser it will defult to the simple form and use only the first question**\n\n**Suported colors:**\n*light-blue*\n*blue*\n*red*\n*yellow*\n*green*')
        .setColor("#000000")
        .setFooter('Poll bot made by @NgNority#2187');
      
        message.channel.send(embedHelp)
	},
};