module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args, Discord) {
                message.delete();
        let embedHelp = new Discord.RichEmbed()
        .setTitle("Simplest Poll Usage")
        .setDescription('**To make a simple pole use** \n *`/poll [Color] \"Question\"`*\n\n**To make a advanced pole use** \n *`/poll [Color] \"Question\" \"Anwser1\" \"Anwser2\" \"Anwser3\"`*\n**\nNote: The advanced pole can only take from 2-10 anwsers. If you write one with only one anwser it will defult to the simple form and use only the first question**\n\n*The supported colors for this bot can be found with the `/colorhelp` command*\n **Recent Updates:** \n **no-poll:**\n *This update adds the no-poll role, to use add a `no-poll` role to your server and put it on someone. You now see that they can\'t make polls*')
        .setColor("#000000")
        .setFooter('Poll bot made by @NgNority#2187');
      
        message.channel.send(embedHelp)
	},
};