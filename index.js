var request = require('request');
const Cheerio = require('cheerio');

async function main(params) {
    let day = params.day;
    var calendar = new Promise(function (res, rej) {
        request(`https://www.englishclass101.com/calendar/${day}`, null, (err, body) => {
            if (err) {
                rej(err);
                return;
            }
            let $ = Cheerio.load(body.body);
            eval($('body').attr('ng-init'));
            calendar.day = day;
            res(calendar);
        });
    })
    return await calendar;
}
global.main = main