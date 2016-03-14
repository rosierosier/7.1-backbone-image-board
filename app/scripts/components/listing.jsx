var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

console.log('Hello Listing');

var Image = React.createClass({
  render: function(){
    return (
      <div>
        <img
          src="http://www.thegoldenantlers.com/wp-content/uploads/2015/03/SEA-pic.jpg" />
      </div>
  );
}
});

ReactDOM.render(
  <Image url="http://www.thegoldenantlers.com/wp-content/uploads/2015/03/SEA-pic.jpg" />,
  document.getElementById('app')
  );

var ImageCaption = React.createClass({
  render: function(){
    return (<div>(this.props.category)</div>);
  }
});
