import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import ShoppingList from './ShoppingList1';
// import CommentCard from './CommentCard';
import WeatherCard from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';


// const formatName = (user: any) => {
//   return user.firstName + ' ' + user.lastName
// };

// const name2 = {
//   firstName: 'Tom',
//   lastName: 'Chan'
// }

// const element = 
// <div className="container">
// <h1 style={{color:'blue'}}>Hello {formatName(name2)}</h1>
// <h2> This is h2 </h2>
// </div>

ReactDOM.render(<WeatherCard weekdays="Wed" highestTemp="83" lowestTemp="76"/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
