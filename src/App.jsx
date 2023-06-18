import React, { Component } from 'react';
import Navbar from "./components/navbar"
import Product from "./components/product";
import ShoppingCard from './components/shopping-card';

class App extends Component {
    state = {
        items: []
    }

    products = [
        {
            title: 'Tomaten',
            image: 'tomate.jpg',
            description: 'Füge Tomaten zu deinem Warenkorb hinzu.',
            price: 2.99
        },
        {
            title: 'Gurken',
            image: 'gurke.jpg',
            description: 'Füge Gurken zu deinem Warenkorb hinzu.',
            price: 1.99
        },
        {
            title: 'Äpfel',
            image: 'apfel.jpg',
            description: 'Füge Äpfel zu deinem Warenkorb hinzu.',
            price: 3.99
        },
        {
            title: 'Birnen',
            image: 'birne.jpg',
            description: 'Füge Birnen zu deinem Warenkorb hinzu.',
            price: 4.49
        },
    ]


    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        let existingItem = this.state.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({ amount, name, price });
        }

        this.setState({ items: currentItems });
    }


    addAmountFromItem = (itemData) => {
        this.setState({ items: itemData });
    }


    removeAmountFromItem = (itemData) => {
        this.setState({ items: itemData });
    }


    updateDeleteItemState = (itemData) => {
        this.setState({ items: itemData });
    }


    render() {
        return <React.Fragment>
            <Navbar />
            <div className="main-container">
                <div className="product-container">
                    {this.products.map(product =>
                        <Product key={product.title} title={product.title} image={product.image} description={product.description}
                            onAdd={() => this.addItem(1, product.title, product.price)} />
                    )}
                </div>

                <ShoppingCard items={this.state.items}
                    onDelete={this.updateDeleteItemState}
                    onAddAmount={this.addAmountFromItem}
                    onRemoveAmount={this.removeAmountFromItem} />
            </div>
        </React.Fragment>;
    }
}

export default App;