module.exports = {

	index: function(req, res){
		Order
			.find()
			.populate('client')
			.populate('product')
			.exec(function(err, orders){
				if (err) res.send(500);
				res.jsonApi(orders);
			});
	},

    addOrder: function (req, res) {
      var data = {
      	number: req.param('number'),
      	date: req.param('date'),
      	qnt: req.param('qnt'),
      	client: req.param('client'),
      	product: req.param('product')
      };
      //console.log(data);
      Order
      	.create(data)
      	.exec(function(err, status){
      		//res.jsonApi(err);
      		if (err) res.send(500);
      		else res.redirect('/order/');
      	})
    },

};

