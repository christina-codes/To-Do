import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as ItemActionCreators from '../actions/items';
import { connect } from 'react-redux';
import Item from './Item';
import AddItemForm from './AddItemForm';

class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {

        const { dispatch, items } = this.props;
        const addItem = bindActionCreators(ItemActionCreators.addItem, dispatch);
        const removeItem = bindActionCreators(ItemActionCreators.removeItem, dispatch);
        const moveItemUp = bindActionCreators(ItemActionCreators.moveItemUp, dispatch);
        const moveItemDown = bindActionCreators(ItemActionCreators.moveItemDown, dispatch);
        const checkBox = bindActionCreators(ItemActionCreators.checkBox, dispatch);
        

        const itemComponents = items.map((item, index) => (
            <Item 
                index={index}
                content={item.content}
                checkBox={item.checkBox}
            /> 
        ));
        return (
            <div>
                <ul className="list">
                    {itemComponents}
                </ul>
                <div className="add-item">
                    <AddItemForm />
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

export default connect (mapStateToProps)(ItemList);