var Backbone = require('backbone');

var Image = Backbone.Models.extend({

});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/rosie-image-project",
});
