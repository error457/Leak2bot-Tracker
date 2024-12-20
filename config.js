module.exports = {
    prefix: "/", // Préfix du bot
    welcomeChannel: "WelcomeChannelID", // L'id du salon de bienvenue
    slashCommands: true, // Activer ou pas les commandes en slash
    colors: {
        main: [0, 110, 255],
        error: [231, 76, 60]
    },
    botstatus: {
        enabled: true, // Activer ou pas le status du bot
        status: "dnd", // Le status du bot (dnd, online, idle, invisible)
        activity_type: "streaming", // Le type d'activiter du bot (watching, listening, playing, streaming)
        activity_text: ".gg/leak2bot", // Le texte sur l'activiter du bot
        activity_url: "https://twitch.tv/202sql" // URL d'un de votre twitch ou youtube
    },
    inviteRewards: true, // Active ou pas les récompenses d'invitation sur le serveur
    rewards: [
        {
            invitesNeeded: 15, // Nombre d'inviations réquise
            roleID: "RewardRoleID" // ID du rôle récompenses
        } //Copiez et collez ceci pour chaque récompense d'invitation
    ],
    welcomeMessage: "{member} a rejoint le serveur il a était inviter par **{inviter}** (qui est maintenant à {invites} invites).", // Utilisez {inviter} pour qui a invité le membre, {member} pour le membre, {code} pour l'invitation utilisée, {mention} pour mentionner l'invitant, {ID} pour l'ID du membre, {inviterID} pour le l'ID de l'invitant et {invites} pour les invitations de l'invitant
    leaveMessage: "{member} a quitté le serveur, il avais était invité par **${inviter}** (qui est maintenant à ${invites} invites).", // Utilisez {inviter} pour qui a invité le membre, {member} pour le membre, {mention} pour mentionner l'invitant, {ID} pour l'ID du membre, {inviterID} pour l'ID de l'invitant et {invites} pour les invitations de l'invitant
}