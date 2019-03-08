import * as React from "react";

import { createStore } from "redux";

import { Provider } from "react-redux";

// import { render } from "react-dom";

import LinkList from "./LinkList";

import UserList from "./UserList";


export interface IRootState {
  links: {
    id: number,
    title: string,
    url: string
  }[],
  users: {
    name: string
  }[]
}

const rootReducer = (state: IRootState) => {
  return {
    links: [
      { id: 1, title: 'Google', url: 'http://www.google.com' },
      { id: 2, title: 'Yahoo', url: 'http://www.yahoo.com' },
    ],
    users: [{name:"Tom"}]
  }
};

const store = createStore<any,any,any,any>(rootReducer);

const App = () => (
    <Provider store={store}>
      <div>
        <h2>Links</h2>
        <LinkList />
        <UserList />
      </div>
    </Provider>
  );
  
// render(<App />, document.getElementById("root"));

export default App
