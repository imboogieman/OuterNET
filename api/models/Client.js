/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name:{
  		type: "string",
  		required: true
  	},
  	mac:{
  		type: "string",
  		required: true
  	},
  	comment:{
  		type: "string",
  		required: false
  	},
  	orders:{
  		collection: 'order',
  		vai: 'client'
  	}
  }
};

