console.log('Hello World!');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var ImageItself = require('./components/listing.jsx');
var FormComponent = require('./components/form.jsx');
var models = require('./models/image')

var newImage = new models.SingleImage;
var newImageCollection = new models.ImageCollection;

newImage = {
  caption: 'caption here'
}

ReactDOM.render(
  <FormComponent collection={newImageCollection}/>,
  document.getElementById('form')
  );

ReactDOM.render(
  <ImageItself model={newImage}/>,
  document.getElementById('app')
  );
