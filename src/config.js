module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'a38dc621-4bf4-4910-8f72-f2b831f74aad',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/bookmarks',
}