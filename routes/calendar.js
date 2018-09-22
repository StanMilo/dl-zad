module.exports = app => {
    app.get('/calendar', (req, res) => {
        res.send('Calendar')
    })
}