import React, { Component } from 'react';

class ShoppingCard extends Component {
    state = {
    }


    render() {
        return <div className="shopping-card">
            <h2>Warenkorb</h2>
            {this.props.items.map(item =>
                <div key={item.name}>{item.amount}x {item.name} {item.price} €
                    <button onClick={() => { this.props.onDelete(item.name) }}>x</button>
                </div>
            )}
        </div>;
    }
}

export default ShoppingCard;