// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        '@': path.resolve('../src/assetbundles/retour/src'),
    },
    copyright: '©2020 nystudio107.com',
    entry: {
        'dashboard': '@/js/Dashboard.js',
        'import': '@/js/Import.js',
        'redirects': '@/js/Redirects.js',
        'retour': '@/js/Retour.js',
        'widget': '@/js/Widget.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'retour',
    paths: {
        dist: path.resolve('../src/assetbundles/retour/dist/'),
    },
    urls: {
        publicPath: () => process.env.PUBLIC_PATH || '',
    },
};
