module.exports = {
	name: 'pollUpdates',
	description: 'pollUpdates!',
	execute(message, args, Discord) {
                message.delete();
        let embedHelp = new Discord.RichEmbed()
        .setTitle("Simplest Poll Usage")
        .setDescription(' **Recent Updates:** \n \n **BETA: Custom Prefix**\n This feature works just you have to send a message in your server before you use poll bot, This is a bug that I know and will try and fix. To use it just type in `/poll-prefix [Your Prefix]` to switch it and `/poll-Reset-Prefix`to go back to `/` \n**Hex Color Update** \n This update adds the ability to use hex colors in the colors slot for even more colors! to use, insted of putting a color name there just do `-- [hex color]`. Note: Make sure you include that space in between the -- and hex color \n \n**no-poll:**\n This update adds the no-poll role, to use add a `no-poll` role to your server and put it on someone. You now see that they can\'t make polls')
        .setColor("#000000")
        .setFooter('Poll bot made by @NgNority#2187');
      
        message.channel.send(embedHelp)
	},
};
