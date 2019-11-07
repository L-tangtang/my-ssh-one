const { data } = require('./data')

module.exports = {
    devServer: {
        before(app) {
            app.get('/getImg', (req, res) => {
                res.send({
                    code: 200,
                    data: data,
                    message: 'img'
                })
            })
        }
    }
}