console.log('Hello World!');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var FormComponent = require('./components/form.jsx');
var ImageListing = require('./components/listing.jsx');
var models = require('./models/image')

var newImageCollection = new models.ImageCollection();


// ReactDOM.render(
//   <FormComponent collection={newImageCollection}/>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <ImageListing collection={newImageCollection}/>,
  document.getElementById('app')
);

newImageCollection.fetch();
