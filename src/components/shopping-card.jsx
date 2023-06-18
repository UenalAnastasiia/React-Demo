import React, { Component } from 'react';

class ShoppingCard extends Component {
    state = {
    }


    deleteItem = (name) => {
        let currentItems = this.props.items.filter((item) => item.name !== name);
        this.setState({ items: currentItems });
        this.props.onDelete(currentItems);
    }


    render() {
        return <div className="shopping-card">
            <h2>Warenkorb</h2>
            {this.props.items.map(item =>
                <div key={item.name}>{item.amount}x {item.name} {item.price} €
                <button onClick={() => { this.deleteItem(item.name) }}>x</button>
                </div>
            )}
        </div>;
    }
}

export default ShoppingCard;