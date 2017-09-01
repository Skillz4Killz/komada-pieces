exports.run = async (client, msg, [user, role]) => {
  if (!msg.guild.roles.exists("name", role)) return msg.reply(`There is no role by that name in this server.`)
  if (msg.guild.roles.exists("name", role) && user.roles.find("name", role)) {
    await user.removeRole(msg.guild.roles.find("name", role));
  } else {
    await user.addRole(msg.guild.roles.find("name", role));
  }
  return msg.reply(`${user} has ${user.roles.find("name", role) ? "lost" : "been given"} the ${role} role. 😄`);

};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["addrole", "ar", "removerole", "rr"],
  permLevel: 3,
  botPerms: ["MANAGE_ROLES"],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "role",
  description: "Assign a role to another user.",
  usage: "<user:member> <role:str>",
  usageDelim: " ",
  extendedHelp: "1) User must have a modRole as set in the bot settings for your server.\n2) Bot must have Manage Role permissions. The bot will not be able to assign a role higher than its highest role.",
};
