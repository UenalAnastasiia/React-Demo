import React, { Component } from 'react';
import Navbar from "./components/navbar"
import Product from "./components/product";
import ShoppingCard from './components/shopping-card';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push( {
            amount, 
            name, 
            price
        })
        this.setState({ items: currentItems });
        console.log(this.state);
    }


    render() {
        return <React.Fragment>
            <Navbar />
            <div className="main-container">
                <div className="product-container">
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} title="Tomaten" image="tomate.jpg" description="Füge Tomaten zu deinem Warenkorb hinzu." />
                    <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} title="Gurken" image="gurke.jpg" description="Füge Gurken zu deinem Warenkorb hinzu." />
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} title="Äpfel" image="apfel.jpg" description="Füge Äpfel zu deinem Warenkorb hinzu." />
                    <Product onAdd={() => this.addItem(1, 'Birnen', 4.49)} title="Birnen" image="birne.jpg" description="Füge Birnen zu deinem Warenkorb hinzu." />
                </div>
                <ShoppingCard items={this.state.items} />
            </div>
        </React.Fragment>;
    }
}

export default App;