import React from 'react';

import faker from 'faker';

interface IMyProps{
    author: string;
    date: string;
    comment: string;
    children?: JSX.Element[] | JSX.Element;
}

const CommentCard: React.SFC<IMyProps> = (props) => {
 return(
     <div>
         <img src={faker.image.avatar()}/>
         <h3>{props.author}</h3>
         <div>
             <p>Today at {props.date}</p>
             <p>{props.comment}</p>
         </div>
         <a className="btn btn-primary">Click me</a>
     </div>
 )
}

export default CommentCard;