import * as React from "react";

import { connect } from "react-redux";

import { IRootState, LinkActions} from "./app"

import {ADD_LINK, CLEAR_LINK, DELETE_LINK} from "./app"

import { Dispatch} from "redux";

interface LinkListProps {
  links: {
    title: string,
    url: string
  }[],
  addLink: () => void, // Add a new mapped prop
  clearLink: () => void, // Add a new mapped prop
  deleteLink: () => void,// Add a new mapped prop
}

const PureLinkList = (props: LinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map(l => (
        <div>{l.title} - {l.url}
                <button onClick={props.deleteLink}>Delete</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>, answer: any) => {
  return {
    addLink: () => {
      answer = prompt("?");
      dispatch({
      type: ADD_LINK,
      link: {
        title: answer,
        url: "www.google.com"
      }
    })},
    clearLink: () => dispatch({
      type: CLEAR_LINK
    }),
    deleteLink: () => dispatch({
      type: DELETE_LINK
    })
  }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

export default LinkList 