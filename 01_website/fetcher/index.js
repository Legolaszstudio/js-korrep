const fastify = require('fastify')();
const cron = require('node-cron');
const config = require('./config.json');
const indexer = require('./indexer');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database/database.db');

fastify.get('/', async (request, reply) => {
    return "Hello World!";
});

async function main() {
    await db.run('CREATE TABLE IF NOT EXISTS points (id INTEGER PRIMARY KEY, name TEXT)');
    await db.run('CREATE TABLE IF NOT EXISTS refs (id TEXT PRIMARY KEY, name TEXT, maxpoints INTEGER)');
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
    console.log('Database initialized');
    indexer(config, db); // TODO: Only index on startup if this is first run
    fastify.listen('5123', '0.0.0.0', async function (err, address) {
        if (err) {
            logger.error(err);
            process.exit(1);
        }
        console.log(`API listening on ${address}`);
    });
}

main();