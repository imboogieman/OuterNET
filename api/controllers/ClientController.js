module.exports = {

	index: function(req, res){
		Client.find()
			.sort('mac DESC')
			.exec(function(err, clients){
				if (err) res.send(500);
				res.jsonApi(clients);
			});
	},

	addClient: function(req, res){
		var data = {
			id: req.param('id'),
			mac: req.param('mac'),
			name: req.param('name'),
		};
		Client.create(data).exec(function(err, status){
			if (err) res.send(500);
			res.redirect('/client/');
		})
	},

	watch: function(req, res){
		var id = req.param('id');
		Client
			.findOne(id)
			.exec(function(err, client){
				if (!client) res.send(404);
				if (err) res.send(500);

				res.jsonApi(client);
			})
	}

}