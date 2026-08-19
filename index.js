const {
  Client,
  GatewayIntentBits,
  Partials,
  EmbedBuilder
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.GuildMember]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} đã online!`);
});

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.systemChannel;

  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor(0x7c3aed)
    .setTitle("🎉 CHÀO MỪNG THÀNH VIÊN MỚI!")
    .setDescription(
      `Xin chào ${member} 👋\n\n` +
      `Chào mừng bạn đã gia nhập **${member.guild.name}**!\n\n` +
      `🔥 Hãy đọc nội quy và cùng mọi người tham gia server nhé!`
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter({
      text: "P1 WELCOME BOT • P1 ESPORTS"
    })
    .setTimestamp();

  await channel.send({
    content: `👋 Chào mừng ${member}!`,
    embeds: [embed]
  });
});

client.login(process.env.DISCORD_TOKEN);
