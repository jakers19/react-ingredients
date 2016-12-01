var React = require('react'); //import React
var List = require('./List.jsx'); //import component List


var ListManager = React.createClass({    //create object in which,
    getInitialState: function() {           //just for the first time this is run
        return {items: [], newItemText: ''}; //build List
    },
    onChange: function(e) {        //this allows user to see as they type
            this.setState({newItemText: e.target.value}); // e is HTML element, setState when changing
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText); //moves item to end

        this.setState({items: currentItems, newItemText:''});
    },
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
