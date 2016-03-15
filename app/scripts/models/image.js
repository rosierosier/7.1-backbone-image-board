var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var SingleImage = Backbone.Model.extend({
  idAttribute: '_id'
});

var ImageCollection = Backbone.Collection.extend({
  model: SingleImage,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/rosieimageproject',
});

module.exports = {
  'SingleImage': SingleImage,
  'ImageCollection': ImageCollection
};
