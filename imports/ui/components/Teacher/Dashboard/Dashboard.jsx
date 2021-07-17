import React from 'react';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ReactPlayer from 'react-player'
import { Meteor } from 'meteor/meteor'
import './dashboard.css';

function Dashboard () {
  return (
    <div class="container">
      <div class="dashboard">
        <div class="header">
          <section>
            <h6> Dashboard &gt; Library &gt; Videos </h6>
            <h1>Video: Intro to Mobile Apps</h1>
            <h4>COMP0000</h4>
          </section>
        </div>
        <section class="content">
          <div class="row">
            <div class="col-8">
              <img src="/assets/graph.png" class="graph-img"/>
              <br/>
              <table>
                <tr>
                  <td class='table-title'>
                    Video Overview
                  </td>
                  <td class='table-title'></td>
                </tr>
                <tr>
                  <td>
                    <b>
                    Highest Drop Off at
                    </b>
                  </td>
                  <td>10:00:13:00</td>
                </tr>
                <tr>
                  <td>
                    <b>
                    Most flags at
                    </b>
                  </td>
                  <td>5:00:8:00</td>
                </tr>
                <tr>
                  <td>
                    <b>
                    Most replays at
                    </b>
                  </td>
                  <td>5:00:8:00</td>
                </tr>
              </table>
              <br/><br/>
              <button class="btn btn-lg btn-primary">
                Send Report Now →                
              </button>
              <br/>
              <hr/>
              <h5>Update reporting frequency</h5>
              <br/>
                <input type="radio"/> 
                <label>Weekly</label>
                <br/>
                <input type="radio"/> 
                <label>Monthly</label>
                <br/>
                <input type="radio"/> 
                <label>Trimester</label>
                <br/>
                <input type="radio"/> 
                <label>Semester</label>


            </div>
            <div class="col-4">
              {/* BERNARD TO ADD:  */}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Dashboard;
