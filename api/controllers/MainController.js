/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	/*
		'ip': request.POST.get('ip'),
        'mac': request.POST.get('mac'),
        'link_login': request.POST.get('link-login'),
        'link_login_only': request.POST.get('link-login-only'),
        'link_orig': request.POST.get('link-orig'),
        'client_id': request.POST.get('client')

	*/

	check: function(req, res){

		console.log('params', req.params);
		console.log('query', req.query);
		console.log('body', req.body);

		var ip = req.param('ip');
		var mac = req.param('mac');
		var link_login = req.param('link-login');
		var link_login_only = req.param('link-login-only');
		var link_orig = req.param('link-orig');
		var client_id = req.param('client');

		Client.findOne({mac: mac}).exec(function(err, client){
			if (!client) {
				var data = {
					mac: mac,
					name: 'client'
				};
				Client.create(data).exec(function(err, status){
					if (err) res.send(500);
					//res.redirect('/client/');
				})
				res.send('New client was saved');
			}
			else{
				var oneWeek = 1000*60*60*24*7;
				Order
					.findOne({
						client: client.id,
						date: {'>': Date.now() - oneWeek}
					})
					.exec(function(err, order){
						if (!order){
							//console.log('There is no orders');
							res.send({
								error: 'There is no orders for client', 
								client: client});
						}
						else{
							// redirect
							res.redirect(link_login);
							//res.jsonApi(order);
						}
					})

			}
		})


		//res.redirect(link_orig);
		//res.jsonApi({ip: ip, mac: mac, link_login: link_login, link_login_only: link_login_only, link_orig: link_orig, client_id: client_id});
	}

};

