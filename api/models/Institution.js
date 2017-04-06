module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },
    logo: {
      type: 'string'
    },
    setting: {
      type: 'json'
    },
    categories: {
      collection: 'category',
      via: 'institution_id'
    },
  }

};

