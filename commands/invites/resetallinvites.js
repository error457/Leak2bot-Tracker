const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js');
module.exports = class ResetAllInvitesCommand extends Command {
    constructor() {
        super('resetAllInvites', {
            aliases: ['resetallinvites'],
            description: {
                content: 'Reinitialise toute les invitations du serveur.',
                usage: ''
            },
            category: 'invites',
            clientPermissions: ['EMBED_LINKS'],
            ratelimit: 2,
            ownerOnly: true
        });
    };
    async exec(message) {
        const { invites, config } = this.client
        const embed = new MessageEmbed()
            .setColor(config.colors.main)
            .setDescription('Suppréssions de toute les invitations réussi !');
        await invites.destroy({where: {guildID: message.guild.id}});
        return message.channel.send(embed)
    };
};
