const pdf2html = require('pdf2html');
const fs = require('fs');

// pdf2html.html('./pdf/test.pdf', (err, html) => {
//     if (err) {
//         console.error('Conversion error: ' + err)
//     } else {
//         fs.writeFileSync('test.html', html);
//         // console.log(html)

//     }
// })

// const { Poppler } = require('node-poppler');

// const file = './pdf/test.pdf';
// const poppler = new Poppler();
// const options = {
//     firstPageToConvert: 1,
//     lastPageToConvert: 2,
//     pngFile: true
// };

// poppler.pdfToCairo(options, file).then((res) => {
//     console.log(res);
// });

// const path = require('path');
// const pdf = require('pdf-poppler');

// let file = './pdf/test.pdf'

// let opts = {
//     format: 'html',
//     out_dir: path.dirname(file),
//     out_prefix: 'test4.html',
//     page: null
// }

// pdf.convert(file, opts)
//     .then(res => {
//         console.log('Successfully converted');
//     })
//     .catch(error => {
//         console.error(error);
//     })

const { Poppler } = require('node-poppler');

const file = './pdf/test.pdf';
const poppler = new Poppler();
const options = {
    noDrm: true,
    noFrames: true,
    complexOutput: true
};

poppler.pdfToHtml(options, file, './indexs.html').then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
});