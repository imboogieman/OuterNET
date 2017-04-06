module.exports = {

  attributes: {
    category_id: {
      model: 'category'
    },
    title: {
      type: 'string',
      maxLength: 150,
      required: true
    },
    description: {
      type: 'string',
      maxLength: 180,
      required: true
    },
    weight: {
      type: 'string',
      maxLength: 150,
    },
    image: {
      type: 'string'//,
      //required: true
    },
    price: {
      type: 'float',
      defaultsTo: 0,
      required: true
    },
    ingredients: {
      type: 'json',
      defaultsTo: '{}'
    },
    orders:{
      collection: 'order',
      via: 'product'
    }
  }

};

