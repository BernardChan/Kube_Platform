import React from 'react';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ReactPlayer from 'react-player'
import { Meteor } from 'meteor/meteor'

function Dashboard () {
  // const [dropoffPoints, setDropOffPoints] = React.useState([]);
  const [flags, setFlags] = React.useState();
  const [replayedSegments, setReplayedSegments] = React.useState();

  const dropoffPoints = (
    [
      {timestamp: "0:00-1:00",
      flagCount: 20,
      },
      {timestamp: "10:00-11:00",
      flagCount: 20,
      }
    ]
  )
  return (
    <div>
      data
      {
        dropoffPoints.map((field, id) => (
          <div key = {id}>
            {field.timestamp} {field.flagCount}
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard;
