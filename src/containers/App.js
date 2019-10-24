import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as ItemActionCreators from '../actions/items';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Item from '../components/Item';
import AddItemForm from '../components/AddItemForm';

class App extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };


    render() {

        const { dispatch, items } = this.props;
        const addItem = bindActionCreators(ItemActionCreators.addItem, dispatch);
        const removeItem = bindActionCreators(ItemActionCreators.removeItem, dispatch);
        const moveItemUp = bindActionCreators(ItemActionCreators.moveItemUp, dispatch);
        const moveItemDown = bindActionCreators(ItemActionCreators.moveItemDown, dispatch);
        const completeItem = bindActionCreators(ItemActionCreators.completeItem, dispatch);

        const itemComponents = items.map((item, index) => (
            <Item 
                index={index}
                key={index}
                content={item.content}
                completeItem={completeItem}
                moveItemUp={moveItemUp}
                moveItemDown={moveItemDown}
                checked={item.checked}
                removeItem={removeItem}
            /> 
        ));
        return (
            <div className="to-do">
                <Header items={items} />
                <ul className="list">
                    {itemComponents}
                </ul>
                <div className="add-item">
                    <AddItemForm addItem={addItem} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        items: state.items
    }
)

export default connect (mapStateToProps)(App);