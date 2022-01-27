const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './../index.html'), 'utf8');
const page = new JSDOM(html);

jest.dontMock('fs');

describe('Validate HTML Structure:', () => {

    it('<html> tag should exist', function () {
        let a = page.window.document.body.innerHTML = html.toString()
        expect(a.indexOf('<html')).not.toBe(-1)
    });

    it('<meta charset="utf-8"> tag should exist', function () {
        let a = page.window.document.body.innerHTML = html.toString()
        expect(a.indexOf('<meta charset="UTF-8">')).not.toBe(-1)
    });

})