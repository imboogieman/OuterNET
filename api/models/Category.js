module.exports = {

  attributes: {
    institution_id: {
      model: 'institution'
    },
    title: {
      type: 'string',
      required: true
    },
    products: {
      collection: 'product',
      via: 'category_id'
    }
  }

};

