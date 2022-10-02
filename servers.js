const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");
const sourcebin = require("sourcebin_js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("servers")
    .setDescription("servers")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const list = "";
    client.guilds.cache.forEach((guild) => {
      list += `${guild.name} (${guild.id}) | ${guild.memberCount} Members | Owner: ${guild.ownerId}\n`;
    });

    sourcebin
      .create([
        {
          name: `Code by Ducko#7068`,
          content: list,
          languageId: "js",
        },
      ])
      .then((src) => {
        interaction.reply({
          content: `My Server List - ${src.url}`,
          ephemeral: true,
        });
      });
  },
};
