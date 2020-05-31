module.exports = {
	name: 'colorHelp',
	description: 'colorHelp!',
	execute(message, args, Discord) {
                message.delete();
        let embedHelp = new Discord.RichEmbed()
        .setTitle("List of usable colors")
        .setDescription('**aliceblue\nantiquewhite\naqua\naquamarine\nazure\nbeige\nbisque\nblack\nblanchedalmond\nblue\nblueviolet\nbrown\nburlywood\ncadetblue\nchartreuse\nchocolate\ncoral\ncornflowerblue\ncornsilk/ncrimson\ncyan\ndarkblue\ndarkcyan\ndarkgoldenrod\ndarkgray\ndarkgreen\ndarkkhaki\ndarkmagenta\ndarkolivegreen\ndarkorange\ndarkorchid\ndarkred\ndarksalmon\ndarkseagreen\ndarkslateblue\ndarkslategray\ndarkturquoise\ndarkviolet\ndeeppink\ndeepskyblue\ndimgray\ndodgerblue\nfirebrick\nfloralwhite\nforestgreen\nfuchsia\ngainsboro\nghostwhite\ngold\ngoldenrod\ngray\ngreen\ngreenyellow\nhoneydew\nhotpink\nindianred\n indigo\nivory\nkhaki\nlavender\nlavenderblush\nlawngreen\nlemonchiffon\nlightblue\nlightcoral\nlightcyan\nlightgoldenrodyellow\nlightgrey\nlightgreen\nlightpink\nlightsalmon\nlightseagreen\nlightskyblue\nlightslategray\nlightsteelblue\nlightyellow\nlime\nlimegreen\nlinen\nmagenta\nmaroon\nmediumaquamarine\nmediumblue\nmediumorchid\nmediumpurple\nmediumseagreen\nmediumslateblue\nmediumspringgreen\nmediumturquoise\nmediumvioletred\nmidnightblue\nmintcream\nmistyrose\nmoccasin\nnavajowhite\nnavy\noldlace\nolive\nolivedrab\norange\norangered\norchid\npalegoldenrod\npalegreen\npaleturquoise\npalevioletred\npapayawhip\npeachpuff\nperu\npink\nplum\npowderblue\npurple\nrebeccapurple\nred\nrosybrown\nroyalblue\nsaddlebrown\nsalmon\nsandybrown\nseagreen\nseashell\nsienna\nsilver\nskyblue\nslateblue\nslategray\nsnow\nspringgreen\nsteelblue\ntan\nteal\nthistle\ntomato\nturquoise\nviolet\nwheat\nwhite\nwhitesmoke\nyellow\nyellowgreen\n** \n Yeah I told you there are a lot of colors')
        .setColor("#000000")
        .setFooter('Poll bot made by @NgNority#2187');
      
        message.channel.send(embedHelp)
	},
};