module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args, Discord) {
                message.delete();
        let embedHelp = new Discord.RichEmbed()
        .setTitle("Simplest Poll Usage")
        .setDescription(' **Recent Updates:** \n \n **Hex Color Update** \n *This update adds the ability to use hex colors in the colors slot for even more colors! to use, insted of putting a color name there just do `-- [hex color]`. Note: Make sure you include that space in between the -- and hex color * \n \n**no-poll:**\n *This update adds the no-poll role, to use add a `no-poll` role to your server and put it on someone. You now see that they can\'t make polls*')
        .setColor("#000000")
        .setFooter('Poll bot made by @NgNority#2187');
      
        message.channel.send(embedHelp)
	},
};