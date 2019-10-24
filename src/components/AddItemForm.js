import React, { Component } from 'react';

class AddItemForm extends Component {
    state = {
        content: ""
    }

    addItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.content);
        this.setState({ content: '' });
    };

    onTextChange = e => {
        const content = e.target.value;
        this.setState({ content: content });
    };

    render() {
        return (
            
            <form onSubmit={this.addItem}>
                <input 
                    type="text" 
                    maxlength='50'
                    value={this.state.content}
                    onChange={this.onTextChange}
                    placeholder="New Task" />
                <button type="submit">Add</button>
            </form>
            
        );
    }
}

export default AddItemForm;