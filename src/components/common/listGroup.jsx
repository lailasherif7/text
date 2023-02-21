import React, { Component } from 'react';

const ListGroup = (props) => {

    const { items } = props;

    return <ul className="list-group">
        {items.map(item => <li key={item.name} className="list-group-item"> {item.name}</li>)}
    </ul>;
};
 
export default ListGroup;