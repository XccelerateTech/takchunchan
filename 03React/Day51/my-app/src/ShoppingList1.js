import React from 'react';

const ShoppingList: React.SFC<IMyProps> = (props) => {
        return (
            <div>
                <h2> {props.name}'s' ShoppingList</h2>
                <h2> {props.date}'s' ShoppingList</h2>
            </div>
        )

}



export default ShoppingList;