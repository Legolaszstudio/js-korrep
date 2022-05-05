const fastify = require('fastify')();
const cron = require('node-cron');
const config = require('../config.json');
const indexer = require('./indexer');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database/database.db');
let initialized = false;

if (config.index) cron.schedule('3 2 * * *', async () => {
    if (!initialized) return;
    console.log('Running fetching every two o\'clock'.rainbow);
    await indexer(config, db);
    console.log('Fetching done'.green);
});

fastify.addHook('onRequest', (request, reply, done) => {
    // Use https when possible
    reply.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    // Allow cors in debug
    if (!config.prod) reply.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (config.prod) reply.header('Cache-Control', 'public, max-age=1800');
    done();
});

fastify.get('/api/get-all', async (_request, reply) => {
    const points = await db.query('SELECT * FROM points');
    const refs = await db.query('SELECT * FROM refs');
    reply.status(200).send({
        points: points.rows,
        refs: refs.rows,
    });
});

async function main() {
    db.query = function (sql, params) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.all(sql, params, function (error, rows) {
                if (error)
                    reject(error);
                else
                    resolve({ rows: rows });
            });
        });
    };
    await db.query('CREATE TABLE IF NOT EXISTS points (id INTEGER PRIMARY KEY, name TEXT, img TEXT)');
    await db.query('CREATE TABLE IF NOT EXISTS refs (id TEXT PRIMARY KEY, name TEXT, maxpoints INTEGER DEFAULT 0)');
    console.log('Database initialized');

    const isIntitialized = await db.query('SELECT 1 FROM refs LIMIT 1');
    if (config.index && isIntitialized.rows.length === 0) {
        console.log('Not yet fetched, fetching'.cyan);
        await indexer(config, db);
        console.log('Fetching done'.green);
    }
    initialized = true;
    fastify.listen('5123', '0.0.0.0', async function (err, address) {
        if (err) {
            logger.error(err);
            process.exit(1);
        }
        console.log(`API listening on ${address}`.green);
    });
}

main();