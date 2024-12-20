const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js');
module.exports = class LeaderboardCommand extends Command {
    constructor() {
        super('leaderboard', {
            aliases: ['leaderboard', 'lb'],
            description: {
                content: 'Affiche les statistiques total des personne ayant inviter le plus de personnes.',
                usage: ''
            },
            category: 'invites',
            clientPermissions: ['EMBED_LINKS'],
            ratelimit: 2,
        });
    };
    async exec(message) {
        const { client } = this;
        const { invites } = client;
        const embed = new MessageEmbed()
        .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setColor(client.config.colors.main);
        const all = await invites.findAll({order: [['invites', 'DESC']], limit: 10, where: {guildID: message.guild.id}});
        let LB = [];
        let i = 0
        await all.forEach(async entry => {
            if(!entry.invites) return;
            let user = await client.users.fetch(entry.discordUser)
            i++
            LB.push(`${i}. **${user.username}**#${user.discriminator} - ${entry.invites}`);
        });
        if(LB.length === 0) {embed.setDescription('Aucun membre a des invitations valide !')} else {embed.setDescription(`Voici le top des invitations ${LB.length}\n${LB.join('\n')}`)}
        message.channel.send(embed);
    };
};

module.exports.slashCommand = async (client, interaction, args, respond) => {
    const { invites } = client;
    const embed = new MessageEmbed()
    .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setColor(client.config.colors.main);
    const all = await invites.findAll({order: [['invites', 'DESC']], limit: 10, where: {guildID: interaction.guild.id}});
    let LB = [];
    let i = 0
    await all.forEach(async entry => {
        if(!entry.invites) return;
        let user = await client.users.fetch(entry.discordUser)
        i++
        LB.push(`${i}. **${user.username}**#${user.discriminator} - ${entry.invites}`);
    });
    if(LB.length === 0) {embed.setDescription('Aucun membre a des invitations valide !')} else {embed.setDescription(`Voici le top des invitations ${LB.length}\n${LB.join('\n')}`)}
    respond({embeds: [embed]});
}