module.exports = {

    init: function (req, res) {
      Institution
        .findOne(
          {slug: req.param('slug')},
          {select: [
            'id',
            'slug',
            'logo',
            'setting'
          ]}
        )
        .exec(function (err, institution) {
          return res.jsonApi(institution, {error: err});
        });
    }

};

