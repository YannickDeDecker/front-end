const blogController = (req,res) => {
    res.render('blog', {
        name: 'Jack'
    });
};

module.exports = {blogController};