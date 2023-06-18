import React, { Component } from 'react';

class ShoppingCard extends Component {
    state = {
    }


    deleteItem = (name) => {
        let currentItems = this.props.items.filter((item) => item.name !== name);
        this.props.onDelete(currentItems);
    }


    addAmountFromItem = (name, price) => {
        let currentItems = this.props.items;
        let existingItem = currentItems.find(item => item.name === name);
        existingItem.amount++;
        this.props.onAddAmount(currentItems);
    }


    removeAmountFromItem = (name, price) => {
        let currentItems = this.props.items;
        let existingItem = currentItems.find(item => item.name === name);
        existingItem.amount--;

        if (existingItem.amount <= 0) {
            currentItems = this.props.items.filter((item) => item.name !== name);
        }

        this.props.onRemoveAmount(currentItems);
    }


    render() {
        return <div className="shopping-card">
            <h2>Warenkorb</h2>
            {this.props.items.map(item =>
                <div key={item.name}>
                    <button className="btn btn-outline-primary" onClick={() => { this.addAmountFromItem(item.name, item.price) }}>+</button>
                    <button className="btn btn-outline-primary" onClick={() => { this.removeAmountFromItem(item.name, item.price) }}>-</button>
                    <span>{item.amount}x {item.name} {item.price} €</span>
                    <button className="btn btn-outline-danger" onClick={() => { this.deleteItem(item.name) }}>x</button>
                </div>
            )}
        </div>;
    }
}

export default ShoppingCard;