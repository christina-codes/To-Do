import React from 'react';

const Item = props => {
    return (
        <li>
            <p>
                <span 
                className={props.checked ? 'checkbox checked' : 'checkbox'}
                onClick={() => props.completeItem(props.index, props.checked)}
                ></span>
                <span className="content">{props.content}</span>
            </p>
            <div className="controls">
                <button onClick={() => props.removeItem(props.index)}>&times;</button>
                <button onClick={() => props.moveItemUp(props.index)}>&#9653;</button>
                <button onClick={() => props.moveItemDown(props.index)}>&#9663;</button>
        </div>
        </li>
    );
}

export default Item;