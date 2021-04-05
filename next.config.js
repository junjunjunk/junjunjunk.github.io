require('dotenv').config();

module.exports = {
    poweredByHeader: false,
    reactStrictMode: true,
    assetPrefix: process.env.GITHUB_PAGES ? '/junjunjunk.github.io' : '',
}