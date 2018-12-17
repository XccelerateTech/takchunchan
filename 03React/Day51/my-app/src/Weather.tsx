import React from 'react';

import faker from 'faker';

interface IMyProps{
    weekdays: string;
    highestTemp: string;
    lowestTemp: string;
    children?: JSX.Element[] | JSX.Element;
}

const WeatherCard: React.SFC<IMyProps> = (props) => {
 return(
     <div className="box">
         <h3>{props.weekdays}</h3>
         <img src={faker.image.avatar()}/>
        <div className="row">
            <a className="col-6">{props.highestTemp}°</a>
              <a className="col-6">{props.lowestTemp}°</a>
        </div>
     </div>
 )
}

export default WeatherCard;