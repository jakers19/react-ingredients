var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do" headingColor="#26a74e"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217"/>, document.getElementById('christmas'));
ReactDOM.render(<ListManager title="Birthday" headingColor="#ee6aa4"/>, document.getElementById('birthday'));
ReactDOM.render(<ListManager title="Grocery" headingColor="#333333"/>, document.getElementById('grocery'));
ReactDOM.render(<ListManager title="Blogs to Read" headingColor="#e8b23f"/>, document.getElementById('blogs'));
