import 'dotenv/config';

const environment = process.env.NODE_ENV || 'development';
const isProduction = environment === 'production';

export const config = {
        token: process.env.TOKEN,
        clientId: process.env.CLIENT_ID || (isProduction ? '1277525844319014955' : '1031120600858624000'),
        prefix: '.',
        ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : ['931059762173464597'],

        colors: {
                bot: [214, 211, 203],
                error: [230, 190, 175],
                success: [140, 200, 170],
                warn: [255, 190, 120],
        },
        links: {
                supportServer: 'https://discord.gg/Ez4gCJQDxB',
                invite: 'https://discord.com/oauth2/authorize?client_id=1277525844319014955&permissions=4820258979704064&integration_type=0&scope=bot+applications.commands',
        },
        watermark: 'coded by bre4d',
        version: '2.0.0',

        database: {
                url: process.env.MONGODB_URI || process.env.DATABASE_URL,
        },

        cache: {
                type: 'memory',
                maxSize: isProduction ? 100000 : 50000,
                flushOnStart: false,
                flushOnShutdown: false,
        },

        debug: !isProduction,
        environment,
};
