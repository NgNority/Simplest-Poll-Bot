module.exports = {
	name: 'prefixChange',
	description: 'prefixChange!',
	execute(message, args, Discord) {
        const AWS = require("aws-sdk");
        let awsConfig = {
            "region": "ca-central-1",
            "endpoint": "https://dynamodb.ca-central-1.amazonaws.com",
            "accessKeyId": "[Yeah right like im giving you that]", "secretAccessKey": "[Yeah right like im giving you that]"
        };
        AWS.config.update(awsConfig);
        var newPrefix = args[0];
        let docClient = new AWS.DynamoDB.DocumentClient();
        let fetchOneByKey = function () {
            var params = {
                "TableName": "server-ids",
        Key: { "ID": message.guild.id },
        UpdateExpression: "set prefix = :prefix",
        ExpressionAttributeValues: {
            ":prefix": newPrefix
        },
        ReturnValues: "UPDATED_NEW"
            }
        
            if(newPrefix == null ||newPrefix == undefined){
                return console.log("Empty prefix, not adding to dyno");
            }

        docClient.update(params, function (err,data) {

            if (err) {
                console.log("users::update::error - " + JSON.stringify(err, null, 2));
            } else {
                console.log("users::update::success "+JSON.stringify(data) );
                message.delete();
                let embedHelp = new Discord.RichEmbed()
                .setTitle("Prefix Update")
                .setDescription('Prefix Updated to: ' + data.Attributes.prefix)
                .setColor("#000000")
                .setFooter('Poll bot made by @NgNority#2187');
              
                message.channel.send(embedHelp)
            }
        
        })
    };
    fetchOneByKey();

    
	},
};