import React, {Component} from 'react';

class ShoppingList extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.name}'s' ShoppingList</h2>
            </div>
        )
    }
}

export default ShoppingList;