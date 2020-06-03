module.exports ={
    name: 'poll',
    description: 'poll!',
    async execute(message, args, Discord) {
        //const colorPicker = require('./colorPicked.js');
        //var async = require('./node_modules/asyncawait/async');

        var colorBlue = "#0000FF";
        var colorLightBlue = "#0099ff";
        var colorRed = "#FF0000";
        var colorYellow = "#FFFF00";
        var colorGreen = "#00FF00";

        //Colors
        var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

        if (!args.length) {
            //client.commands.get(command).execute(message, args, Discord);
            return message.reply("No questions detected, Refer to /help");
        }

        var embedColor;
        var Question = args.join(" ").replace(/"/g, "");
        //var Question = args.join(" ");


        var questionSplit = args.join(" ").match(/"(.*?)"/g);




        console.log("Quest Split: " + questionSplit);



        //Old color picker code
        // if (args.includes("blue") || args.includes("Blue")) {
        //     embedColor = colorBlue;
        //     Question = Question.replace("blue", "");
        //     Question = Question.replace("Blue", "");
        // } else if (args.includes("light-blue") || args.includes("Light-blue")) {
        //     embedColor = colorLightBlue;
        //     Question = Question.replace("light-blue", "");
        //     Question = Question.replace("Light-blue", "");
        // } else if (args.includes("red") || args.includes("Red")) {
        //     embedColor = colorRed;
        //     Question = Question.replace("red", "");
        //     Question = Question.replace("Red", "");
        // } else if (args.includes("yellow") || args.includes("Yellow")) {
        //     embedColor = colorYellow;
        //     Question = Question.replace("yellow", "");
        //     Question = Question.replace("Yellow", "");
        // } else if (args.includes("green") || args.includes("Green")) {
        //     embedColor = colorGreen;
        //     Question = Question.replace("green", "");
        //     Question = Question.replace("Green", "");
        // }


        //New color picker code
        for (var prop in colours) {
            if (colours.hasOwnProperty(prop)) { 
                if(args.includes(prop)){
                    embedColor = colours[prop];
                    Question = Question.replace(prop, "");
                }
                // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
                //console.log(prop);
            }
        }

            
        //console.log("Colors: " colours);
        console.log(questionSplit.length);





        if (questionSplit.length - 1 >= 2 && questionSplit.length - 1 <= 10) {

            var questionStr = "";

            console.log("Is higher than 2");
            message.delete();


            for (i = 1; i < questionSplit.length; i++) {
                questionStr = questionStr.concat(i + ":" + questionSplit[i] + "\n");

            }

            console.log("str: " + questionStr);

            let embed = new Discord.RichEmbed()
                .setTitle('\:chart_with_upwards_trend: **' + questionSplit[0].replace(/"/g, "") + '**')
                .setDescription(questionStr.replace(/"/g, ""))
                .setColor(embedColor)

            message.channel.send(embed).then(async function sentEmbed()
             {
                var ql = questionSplit.length -1;
                if (ql <= 10) {
                    if(ql == 1){
                        return message.reply("Only between 2-10 anwsers are allowed");
                    }
                    //   //sentEmbed.react("1️⃣");
                     else if(ql == 2) {
                        console.log("Question -1: " + ql);
                        try {
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 3) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 4) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 5) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 6) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        await sentEmbed.react("6️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 7) {
                        console.log("Question -1: " + ql);
                        try {
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        await sentEmbed.react("6️⃣");
                        await sentEmbed.react("7️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 8) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        await sentEmbed.react("6️⃣");
                        await sentEmbed.react("7️⃣");
                        await sentEmbed.react("8️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 9) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        await sentEmbed.react("6️⃣");
                        await sentEmbed.react("7️⃣");
                        await sentEmbed.react("8️⃣");
                        await sentEmbed.react("9️⃣");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    } else if (ql == 10) {
                        console.log("Question -1: " + ql);
                        try{
                        await sentEmbed.react("1️⃣");
                        await sentEmbed.react("2️⃣");
                        await sentEmbed.react("3️⃣");
                        await sentEmbed.react("4️⃣");
                        await sentEmbed.react("5️⃣");
                        await sentEmbed.react("6️⃣");
                        await sentEmbed.react("7️⃣");
                        await sentEmbed.react("8️⃣");
                        await sentEmbed.react("9️⃣");
                        await sentEmbed.react("🔟");
                        }catch (error) {
                            console.error('One of the emojis failed to react.');
                        }
                    }

                }
            })
        }  else if (questionSplit.length - 1 > 10){
            message.delete();
            return message.reply("Only between 2-10 anwsers are allowed");
            
        }else {

            message.delete();
            //customEmoji = 

            let embed = new Discord.RichEmbed()
                .setTitle('\:chart_with_upwards_trend: **' + questionSplit[0].replace(/"/g, "") + '**')
                .setColor(embedColor)

            message.channel.send(embed).then(sentEmbed => {
                sentEmbed.react("👍");
                sentEmbed.react("👎");

            })

        }




    },
};