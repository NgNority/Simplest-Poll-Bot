module.exports = {
    name: 'poll',
    description: 'poll!',
    execute(message, args, Discord) {

        var colorBlue = "#0000FF";
        var colorLightBlue = "#0099ff";
        var colorRed = "#FF0000";
        var colorYellow = "#FFFF00";
        var colorGreen = "#00FF00";

        if (!args.length) {
            //client.commands.get(command).execute(message, args, Discord);
            return message.reply("No questions detected, Refer to /help");
        }

        var embedColor;
        var Question = args.join(" ").replace(/"/g, "");
        //var Question = args.join(" ");


        var questionSplit = args.join(" ").match(/"(.*?)"/g);




        console.log("Quest Split: " + questionSplit);




        if (args.includes("blue") || args.includes("Blue")) {
            embedColor = colorBlue;
            Question = Question.replace("blue", "");
            Question = Question.replace("Blue", "");
        } else if (args.includes("light-blue") || args.includes("Light-blue")) {
            embedColor = colorLightBlue;
            Question = Question.replace("light-blue", "");
            Question = Question.replace("Light-blue", "");
        } else if (args.includes("red") || args.includes("Red")) {
            embedColor = colorRed;
            Question = Question.replace("red", "");
            Question = Question.replace("Red", "");
        } else if (args.includes("yellow") || args.includes("Yellow")) {
            embedColor = colorYellow;
            Question = Question.replace("yellow", "");
            Question = Question.replace("Yellow", "");
        } else if (args.includes("green") || args.includes("Green")) {
            embedColor = colorGreen;
            Question = Question.replace("green", "");
            Question = Question.replace("Green", "");
        }
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

            message.channel.send(embed).then(sentEmbed => {
                var ql = questionSplit.length -1;
                if (ql <= 10) {
                    if(ql == 1){
                        return message.reply("Only between 2-10 anwsers are allowed");
                    }
                    //   //sentEmbed.react("1️⃣");
                     else if(ql == 2) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                    } else if (ql == 3) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                    } else if (ql == 4) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                    } else if (ql == 5) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                    } else if (ql == 6) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                        sentEmbed.react("6️⃣");
                    } else if (ql == 7) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                        sentEmbed.react("6️⃣");
                        sentEmbed.react("7️⃣");
                    } else if (ql == 8) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                        sentEmbed.react("6️⃣");
                        sentEmbed.react("7️⃣");
                        sentEmbed.react("8️⃣");
                    } else if (ql == 9) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                        sentEmbed.react("6️⃣");
                        sentEmbed.react("7️⃣");
                        sentEmbed.react("8️⃣");
                        sentEmbed.react("9️⃣");
                    } else if (ql == 10) {
                        console.log("Question -1: " + ql);
                        sentEmbed.react("1️⃣");
                        sentEmbed.react("2️⃣");
                        sentEmbed.react("3️⃣");
                        sentEmbed.react("4️⃣");
                        sentEmbed.react("5️⃣");
                        sentEmbed.react("6️⃣");
                        sentEmbed.react("7️⃣");
                        sentEmbed.react("8️⃣");
                        sentEmbed.react("9️⃣");
                        sentEmbed.react("🔟");
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