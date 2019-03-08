import * as React from "react";
import { connect } from "react-redux";
import { IRootState } from "./app"

interface UserListProps {
  users: {
      name: string}[]
  }
  
const PureUserList = (props: UserListProps) => {
    return (
      <div>
        {props.users.map(l => (
          <div>{l.name}</div>
        ))}
      </div>
    );
  }

const mapStateToProps = (state: IRootState) => {
    return {
      users: state.users
    }
  }
  
const UserList = connect(mapStateToProps)(PureUserList)

export default UserList