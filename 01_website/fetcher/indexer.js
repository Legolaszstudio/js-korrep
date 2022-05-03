const puppeteer = require("puppeteer");
const colors = require('colors');
const crypto = require('crypto');
let browser;

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = async function (config, db) {
    if (config.prod) {
        browser = await puppeteer.launch({
            headless: true,
            executablePath: "/usr/bin/chromium",
            args: [
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                "--no-sandbox",
                "--disable-web-security",
                "--disable-features=site-per-process,IsolateOrigins"
            ],
        });
    } else {
        browser = await puppeteer.launch({
            headless: false,
            args: [
                "--no-sandbox",
                "--disable-web-security",
                "--disable-features=site-per-process,IsolateOrigins"
            ],
        });
    }

    const page = await browser.newPage();
    await page.goto('https://office.com', { waitUntil: 'networkidle0', timeout: 0 });
    console.log("Opened office".magenta);
    await page.click("#hero-banner-sign-in-to-office-365-link"); //Press login
    console.log("Opened Login Page".magenta);
    try {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } catch (e) {
        console.log("Navigation timeout continuing".red);
    }
    await page.type('#i0116', config.teams.username);
    await page.click("#idSIButton9"); //Press next
    console.log("Entered Username".magenta);
    await page.type('#i0118', config.teams.password);
    await page.click("#idSIButton9"); //Press login
    console.log("Entered Password".magenta);
    try {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } catch (e) {
        console.log("Navigation timeout continuing".red);
    }
    console.log("Pressed Stay Logged In".magenta);
    await timeout(1500);
    await page.click("#idSIButton9"); //Press stayed login
    try {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } catch (e) {
        console.log("Navigation timeout continuing".red);
    }
    console.log("Office login complete".magenta);
    await page.goto('https://teams.microsoft.com/', { waitUntil: 'networkidle2', timeout: 0 });
    try {
        await page.click(".use-app-lnk"); //Navigate to teams and click on I rather use the webapp
    } catch (e) {
        console.error("Looks like you don't have a web app option, strange. Continuing".red);
    }
    console.log("Opened teams webapp".magenta);
    try {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } catch (e) {
        console.log("Navigation timeout continuing".red);
    }
    //END OF LOGIN
    //START OF GETTING ASSIGMENTS
    await timeout(2500);
    await page.click("#teams-app-bar > ul > li:nth-child(4)"); //Click on assignments
    await page.reload({ waitUntil: "networkidle2", timeout: 0 });
    console.log("Navigated To Assignments Page".magenta);
    await timeout(5000);
    const elementHandle = await page.$(
        'embedded-page-container > div > iframe',
    );
    const frame = await elementHandle.contentFrame();
    try {
        await frame.click("#PivotTab_classSelectorAndFilter > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)");
        console.log("Opened dropdown".magenta);
        await timeout(2000);
        await frame.type('input[data-test="dropdown-filter-input"]', config.teams.group);
        console.log("Typed team name".magenta);
        await timeout(500);
        await frame.click('div.ms-List-cell[data-list-index="0"]');
        console.log("Clicked first".magenta);
    } catch (e) {
        console.error(e);
    }
    console.log(`Navigated To ${config.teams.group} Page`.magenta);
    await timeout(2500);
    const itemCount = await frame.$eval('div[data-test="assignment-list"] > :nth-child(1)', e => e.children.length);
    console.log(itemCount);
    const assignments = [];
    for (let rep = 0; rep < 2; rep++) {
        if ((await frame.$('div[data-test="assignment-list"] > :nth-child(1) > :nth-child(1)')) == null) {
            if (rep == 0) {
                await frame.click('button#PivotTab_graded');
                await timeout(1000);
            }
            continue;
        }
        for (let i = 1; i <= itemCount; i++) {
            await frame.click(`div[data-test="assignment-list"] > :nth-child(1) > :nth-child(${i})`);
            await timeout(2500);
            let result = await frame.evaluate(() => {
                if (document.querySelector('main > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(1)') == null) return []; // Nothing to get
                const itLength = document.querySelector('main > :nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1)').children.length;
                const task = document.querySelector('h1[data-test="assignment-title"]').innerText;
                const maxPoints = parseInt(document.querySelector('main > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(1)').innerText.replace('/ ', ''));
                const itemList = [];
                for (let i = 1; i <= itLength; i++) {
                    const item = document.querySelector(`main > :nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(${i})`);
                    let name = item.children[0].children[1].outerText.replace(', ', ' ');
                    if (name.includes('\n')) {
                        name = name.split('\n')[1];
                    }
                    const points = item.children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].value;
                    itemList.push({
                        name,
                        points: points == '' ? 0 : parseInt(points),
                        maxPoints,
                        task
                    });
                }
                return itemList;
            });
            assignments.push(result);
            console.log(`Got ${i} task non returned`.magenta);
            await frame.click('button[data-test="graded-tab"]');
            await timeout(2500);
            result = await frame.evaluate(() => {
                if (document.querySelector('main > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(1)') == null) return []; // Nothing to get
                const itLength = document.querySelector('main > :nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1)').children.length;
                const task = document.querySelector('h1[data-test="assignment-title"]').innerText;
                const maxPoints = parseInt(document.querySelector('main > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(5) > :nth-child(1)').innerText.replace('/ ', ''));
                const itemList = [];
                for (let i = 1; i <= itLength; i++) {
                    const item = document.querySelector(`main > :nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(${i})`);
                    let name = item.children[0].children[1].outerText.replace(', ', ' ');
                    if (name.includes('\n')) {
                        name = name.split('\n')[1];
                    }
                    const points = item.children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].value;
                    itemList.push({
                        name,
                        points: parseInt(points),
                        maxPoints,
                        task
                    });
                }
                return itemList;
            });
            assignments[assignments.length - 1] = (assignments[assignments.length - 1].concat(result));
            console.log(`Got ${i} task returned`.magenta);
            try {
                await page.goBack({ timeout: 5000 });
            } catch (e) {
                console.log("Navigation timeout continuing".red);
            }
            await timeout(1000);
        }
        console.log(`Got all tasks ${rep == 0 ? 'that are not returned' : 'that are returned'}`.magenta);
        if (rep == 0) {
            await frame.click('button#PivotTab_graded');
            await timeout(1000);
        }
    }

    try {
        await browser.close();
    } catch (e) {
        console.log("An error happened while closing the browser, still continuing though!".red, e);
    }

    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].length == 0) continue;
        const taskHash = crypto.createHash('sha1').update(assignments[i][0].task).digest('hex');
        const hasHash = await db.query("SELECT 1 FROM refs WHERE id = ?", [taskHash]);
        if (hasHash.rows.length == 0) {
            await db.query("INSERT INTO refs (id, name, maxpoints) VALUES (?, ?, ?)", [taskHash, assignments[i][0].task, assignments[i][0].maxPoints]);
            await db.query(`ALTER TABLE points ADD COLUMN '${taskHash}' INTEGER DEFAULT 0;`);
        }
        for (const element of assignments[i]) {
            if (i == 0) {
                const doesExist = await db.query("SELECT 1 FROM points WHERE name = ?", [element.name]);
                if (doesExist.rows.length == 0) {
                    await db.query("INSERT INTO points (name) VALUES (?)", [element.name]);
                }
            }
            await db.query(`UPDATE points SET '${taskHash}' = ? WHERE name = ?`, [element.points, element.name]);
        }
    }
};