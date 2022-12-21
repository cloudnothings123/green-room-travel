//method for opening home page
module.exports = {
    getIndex: async (req,res) => {
            res.render('index.ejs')
    }
}