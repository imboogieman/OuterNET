/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	number:{
  		type: "string",
  		required: true
  	},
  	date:{
  		type: "date",
  		required: true
  	},
  	qnt:{
  		type: "string",
  		required: true
  	}
  	,
  	client:{
  		model: "client"
  	},
  	product:{
  		required: true,
  		model: "product"
  	}
  }
};

