import React from 'react';
import faker from 'faker';

const CommentCard = (props)=> {
    const listItems = props.list.map(l=>
        <li key={l.id}>
        <img className="card-img-top img-fluid" src={faker.image.avatar()} alt="avatar" />
        <div className="card-body">
        <h3 className="card-title">{l.author}</h3>
        <div>
            <p>Today at {l.date}</p>
            <p>{l.comment}</p>
        </div>
        </div>
        </li>
        )
    
    return (
        <ul className="card col-3" style={{backgroundColor:'rgba(30,30,30,0.1)',maxWidth:'200px'}}>
             {listItems}
        </ul>
    )

}
export default CommentCard;