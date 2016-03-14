console.log('Hello Form');

var FormComponent = React.createClass({

  handleSubmit: function(){

  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="image">Image Address</label> <input name="image" id="image-url" className="" /><br/>
        <label htmlFor="caption">Caption</label> <input name="caption" id="caption" className="" /><br/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});

ReactDOM.render(
  <FormComponent />,
  document.getElementById('form')
  );
