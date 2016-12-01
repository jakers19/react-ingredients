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

        var divStyle = {
            marginTop: 10
        };

        var headingStyle= {

        }

        if(this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-sm-9">
                            <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
