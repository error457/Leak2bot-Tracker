const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js');
module.exports = class ResetInvitesCommand extends Command {
    constructor() {
        super('resetInvites', {
            description: {
                content: 'Reinitialise les invitations du membre choisi.',
                usage: ''
            },
            category: 'invites',
            clientPermissions: ['EMBED_LINKS'],
            ratelimit: 2,
            args: [
                {
                    id: 'member',
                    type: 'custom-MEMBER',
                    prompt: {
                        start: 'À qui voulez-vous réinitialiser ses invitations?',
                        retry: 'Nombre invalide, éssayez encore.'
                    }
                }
            ],
            userPermissions(message) {
                if(!message.member.roles.cache.some(role => role.name === 'Manage Invites') && !message.member.permissions.has(['BAN_MEMBERS', 'KICK_MEMBERS', 'MANAGE_GUILD', 'MANAGE_CHANNELS'])) return 'Manage Invites';
                return null;
            }
        });
    };
    async exec(message, {member}) {
        const { invites, config } = this.client;
        const embed = new MessageEmbed()
        .setColor(config.colors.main)
        .setDescription(`Réinitialisation des invitations de ${member.toString()} réussi !`)
        .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
        .setTimestamp();
        let foc = await invites.findOrCreate({where: {discordUser: member.id, guildID: message.guild.id}, defaults: {discordUser: member.id, invites: 0, guildID: message.guild.id}});
        if(!foc[0].invites) return message.channel.send(embed);
        foc[0].decrement('invites', {by: foc[0].invites});
        message.channel.send(embed);
    };
};