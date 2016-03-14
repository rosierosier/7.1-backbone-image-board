var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var SingleImage = Backbone.Model.extend({

});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/rosie-image-project',
});

module.exports = {
  'SingleImage': SingleImage,
  'ImageCollection': ImageCollection
};
