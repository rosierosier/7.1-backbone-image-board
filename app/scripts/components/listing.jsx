var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var models = require('../models/image')


console.log('Hello Listing');


var ImageItself = React.createClass({
  render: function(){
    return (
      <li>
        <img />
        <ImageCaption />
      </li>
  );
}
});

var ImageListing = React.createClass({
  render: function(){
    mixins: [Backbone.React.Component.mixin]
    var imageList = this.getCollection().map(function(image){
      return
        <ImageItself model={image} />
    });
    return (
      <ul>
        {imageList}
      </ul>
    )
  }
});

var ImageCaption = React.createClass({
  render: function(){
    mixins: [Backbone.React.Component.mixin]
    return (<p>{this.getModel().get('caption')}</p>);
  }
});


module.exports = ImageItself;
