var data = [
    {
        name: 'liquid',
        description: 'The Liquid extension is a must have for those developing Shopify themes using VS Code. Though there’s support for sidebar icons to distinguish Liquid files out-of-the-box, VS Code doesn’t have syntax highlighting for Liquid without the help of this extension. This extension adds syntax highlighting for Liquid, and acts as a support for the Shopify Liquid Snippets extension. It also supports section code blocks, and snippet auto-completion for Liquid tags and filters.',
        author: 'Neil Ding',
        downloads: 216777,
        stars: 3.5,
        price: 0,
        selector: 'p1'
    },
    {
        name: 'ESLint',
        description: 'This extension integrates ESLint into VS Code, and it requires you to have already installed ESLint on your computer either locally or globally. You can do this with npm, by running npm install -g eslint. There are more detailed configuration and installation settings and instructions on the Visual Studio Code extension marketplace page.',
        author: 'Microsoft',
        downloads: 39514408,
        stars: 4.5,
        price: 0,
        selector: 'p2'
    },
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
}

var getEl = function (id) {
    return document.getElementById(id);
}

/** 
 * @param  {Package} package
 * @return {void}
*/
 var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = GETeL(SELECTOR + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
 }

 var init = function() {
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
 }

 init();