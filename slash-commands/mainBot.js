module.exports = [
    {
        name: 'uptime',
        description: 'Envoie le status du bot.'
    },
    {
        name: 'invites',
        description: 'Ajouter, supprimer ou bien reinitialiser les invitation de la personne mentionné.', 
        options: [
            {
                name: 'show',
                description: 'Affiche vos statistique de vos invitations.',
                type: 1,
                options: [
                    {
                        name: 'member',
                        description: 'Voir les information du membres choisi.',
                        type: 6,
                        required: false
                    }
                ]
            },
            {
                name: 'add',
                description: 'Ajoute un nombre spécifique pour les invites.',
                type: 1,
                options: [
                    {
                        name: 'member',
                        description: 'Montre les infos du membres.',
                        type: 6,
                        required: true
                    },
                    {
                        name: 'amount',
                        description: 'Le montant à ajouter.', 
                        type: 4,
                        required: true
                    }
                ]
            },
            {
                name: 'remove',
                description: 'Supprimes les invitations du membres.', 
                type: 1,
                options: [
                    {
                        name: 'member',
                        description: 'Supprime les invitations du membres.',
                        type: 6,
                        required: true
                    },
                    {
                        name: 'amount',
                        description: 'Le nombres des invitations à enlever.', 
                        type: 4,
                        required: true
                    }
                ]
            },
            {
                name: 'reset',
                description: 'Supprimes toutes les invitations du membres choisi.',
                type: 1,
                options: [
                    {
                        name: 'member',
                        description: 'Reinitialise les invitations du membres.', 
                        type: 6,
                        required: true
                    }
                ]
            },
        ]
    },
    {
        name: 'help',
        description: 'Affiche les commandes disponnible ou bien les informations des commandes spécifique.',
        options: [
            {
                name: 'command',
                description: 'Une commandes pour avoir une commandes custom.',
                type: 3,
                required: false
            }
        ]
    },
    {
        name: 'leaderboard',
        description: 'Envoie la liste des meilleurs inviteurs.',
    }
]