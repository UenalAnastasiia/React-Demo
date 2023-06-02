import React, { Component } from 'react';
import Navbar from "./components/navbar"
import Product from "./components/product";

class App extends Component {
    state = {}
    render() {
        return <React.Fragment>
                <Navbar />
                <div className="product-container">
                    <Product title="Tomaten" image="tomate.jpg" description="Füge Tomaten zu deinem Warenkorb hinzu." />
                    <Product title="Gurken" image="gurke.jpg" description="Füge Gurken zu deinem Warenkorb hinzu." />
                    <Product title="Äpfel" image="apfel.jpg" description="Füge Äpfel zu deinem Warenkorb hinzu." />
                    <Product title="Birnen" image="birne.jpg" description="Füge Birnen zu deinem Warenkorb hinzu." />
                </div>
            </React.Fragment>;
    }
}

export default App;