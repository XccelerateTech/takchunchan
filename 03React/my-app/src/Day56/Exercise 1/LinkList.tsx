import * as React from "react";
import { connect } from "react-redux";
import { IRootState } from "./app"

interface LinkListProps {
    links: {
      title: string,
      url: string
    }[]
  }
  
const PureLinkList = (props: LinkListProps) => {
    return (
      <div>
        {props.links.map(l => (
          <div>{l.title} - {l.url}</div>
        ))}
      </div>
    );
  }

const mapStateToProps = (state: IRootState) => {
    return {
      links: state.links
    }
  }
  
const LinkList = connect(mapStateToProps)(PureLinkList)

export default LinkList