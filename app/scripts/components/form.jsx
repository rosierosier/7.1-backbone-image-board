console.log('Hello Form');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/image')

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var FormComponent = React.createClass({

mixins: [Backbone.React.Component.mixin],
// this.props.
// this.state.

  handleSubmit: function(e){
    e.preventDefault();
    console.log('working');
    var formData = $(e.currentTarget).serializeObject();
    console.log(this.props.collection);
    this.getCollection().create(formData);
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="image">Address</label> <input name="image" id="image-url" className="" /><br/>
        <label htmlFor="caption">Caption</label> <input name="caption" id="caption" className="" /><br/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});

module.exports = FormComponent;
