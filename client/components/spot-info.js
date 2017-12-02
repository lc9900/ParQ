import React, { Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { timer, timeSince } from '../helpers';

class SpotInfo extends Component {
  render(){
  const { spot, map, handleTakeSpot } = this.props;
  const { createdAt } = spot.properties

  return (
       <div>
         <div>
          <strong>Reported</strong><br/>
          <span className="time"><Moment fromNow>{createdAt}</Moment></span>
          </div>
          <div className="spot-actions">
          <button onClick={handleTakeSpot}>TAKE SPOT</button>
          </div>
       </div>
    )
  }
}

export default SpotInfo
