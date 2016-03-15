var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var models = require('../models/image');
var FormComponent = require('./form.jsx');

console.log('Hello Listing');

var ImageItself = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    // console.log(this.props.model.get('image'));
    // console.log(this.props.model.get('caption'));
    return (
      <div className="image-caption-div">
        <div className="image-div">
          <img src={this.props.model.get('image')}/>
        </div>
        <div className="caption-div">
          <p>
            {this.props.model.get('caption')}
          </p>
        </div>
      </div>
    );
  }
});

var ImageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var imageList = this.props.collection.map(function(model){
      return (
        <ImageItself model={model} key={model.id} />
        );
    });
    return (
      <div className="wrapper">
        <div id="form">
          <FormComponent collection={this.props.collection}/>
        </div>
        <div className="image-wrapper">
          {imageList}
        </div>
      </div>
    )
  }
});

module.exports = ImageListing;
