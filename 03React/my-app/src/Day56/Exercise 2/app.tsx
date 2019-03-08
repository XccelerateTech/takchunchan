import * as React from "react";

import { Action, createStore} from "redux";

import { Provider } from "react-redux";

// import { render } from "react-dom";

import LinkList from "./LinkList";



// Define ADD_LINK const and its type
export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface AddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface ClearLinkAction extends Action {
  type: CLEAR_LINK;
}

export const DELETE_LINK = 'DELETE_LINK';
type DELETE_LINK = typeof DELETE_LINK;

interface DeleteLinkAction extends Action {
  type: DELETE_LINK;
}



// Collection of both for easier integration
export type LinkActions = AddLinkAction | ClearLinkAction | DeleteLinkAction


export interface IRootState {
  links: {
    title: string,
    url: string
  }[]
}

export const rootReducer = (state: IRootState, action: LinkActions /* add parameter here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link]) // Use concat to add a new link
      }
    case CLEAR_LINK:
      return {
        links: [] // Reset the link
      }
    default:
      return {
        links: []
      }; // Do not change the state in case of any other actions
  }
};

const store = createStore<any,any,any,any>(rootReducer);

const App = () => (
    <Provider store={store}>
      <div>
        <h2>Links</h2>
        <LinkList />
      </div>
    </Provider>
  );
  
// render(<App />, document.getElementById("root"));

export default App
