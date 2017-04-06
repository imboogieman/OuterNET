module.exports = {

    menu: function (req, res) {
      Category.find({institution_id: req.headers.institution})
        .populate('products')
        .exec(function (err, products) {
          return res.jsonApi(products, {error: err});
        });
    },

    index: function(req, res){
        Product
            .find()
            .exec(function(err, products){
                if (err) res.send(500);
                res.jsonApi(products);
            });
    },

    addProduct: function(req, res){
        var data = {
            id: req.param('id'),
            title: req.param('title'),
            description: req.param('description'),
            price: req.param('price')
        };
        Product
            .create(data)
            .exec(function(err, status){
                if (err) res.send(500, err);
                res.redirect('/product/');
            });
    }

    //watch: function (req, res) {
    //    var Id = req.param('id');
    //
    //    Product.findOne(Id)
    //        .exec(function (err, post) {
    //            if (!post) return res.send(404);
    //            if (err) return res.send(500);
    //
    //            res.view({
    //                post: post
    //            });
    //        });
    //},
    //
    //page: function (req, res) {
    //    var page = req.param('page');
    //
    //    Product.find()
    //        .sort('id DESC')
    //        .paginate({
    //            page : page,
    //            limit: 5
    //        })
    //        .exec(function (err, posts) {
    //            if (err) return res.send(500);
    //
    //            res.view({
    //                posts: posts
    //            });
    //        });
    //},
    //
    //create: function (req, res) {
    //    console.log('create');
    //
    //    var params = {
    //        description : req.param('description'),
    //        content     : req.param('content'),
    //        title       : req.param('title'),
    //    };
    //
    //    Product.create(params).exec(function (err, post) {
    //        res.redirect('/post/watch/' + post.id);
    //
    //        if (err) return res.send(500);
    //    });
    //},
    //
    //update: function (req, res) {
    //    var Id = req.param('id');
    //
    //    var elem = {
    //        description : req.param('description'),
    //        content     : req.param('content'),
    //        title       : req.param('title'),
    //    };
    //
    //    Product.update(Id, elem).exec(function (err) {
    //        if (err) return res.send(500);
    //
    //        res.redirect('/');
    //    });
    //},
    //
    //delete: function (req, res) {
    //    var Id = req.param('id');
    //
    //    Product.destroy(Id).exec(function (err) {
    //        if (err) return res.send(500);
    //        res.redirect('/post');
    //    });
    //}

};

