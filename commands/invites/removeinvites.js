const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js');
module.exports = class RemoveInvitesCommand extends Command {
    constructor() {
        super('removeInvites', {
            description: {
                content: 'Supprime le nombre spécifié des invitations du membres sélectionner.',
                usage: '<member> <amount>'
            },
            category: 'invites',
            clientPermissions: ['EMBED_LINKS'],
            ratelimit: 2,
            args: [
                {
                    id: 'member',
                    type: 'custom-MEMBER',
                    prompt: {
                        start: 'À qui voulez-vous retirer des invitations ?',
                        retry: 'Membre invalide, éssayez avec un autre.'
                    }
                },
                {
                    id: 'amount',
                    type: 'number',
                    prompt: {
                        start: 'Le nombre à retirer ?',
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
    async exec(message, {member, amount}) {
        const { client } = this;
        const { invites } = client;
        let embed = new MessageEmbed()
        .setColor(client.config.colors.main)
        .setFooter(client.user.username, client.user.displayAvatarURL({dynamic: true}))
        .setTimestamp();
        let entry = await invites.findOrCreate({where: {discordUser: member.id, guildID: message.guild.id}, defaults: {discordUser: member.id, invites: 0, guildID: message.guild.id}});
        if(entry[0].invites - amount < 0) {
            embed.setColor(client.config.colors.error)
            .setDescription('tu ne peux pas obliger une personne à recevoir des invitations négatives!');
            return message.channel.send(embed);
        };
        await entry[0].decrement('invites', {by: amount});
        embed.setDescription(`Suppréssions de ${amount} invitations de ${member.toString()}! Qui est maintenant à ${entry[0].invites - amount} invitations!`);
        return message.channel.send(embed);
    };
};
