import "../../styles/mainstyles.css"
import {getId, getPassword} from "../../utils/currentacc"
import React from 'react';

export default function MainPage(){
  return(
      <>
        <div>
          <div className = 'head'>
            <div id = 'balance'>
              <label htmlFor = 'balance'>balance</label>
              <br/>
              <div id = 'balancenumber' ></div>
            </div>
            <span id = 'title'>posting_token</span>
            
            <button id = 'logout'>sign out</button>
          </div>  
        </div>
        <div>
          <div className = 'sidebar'>
            <div id = 'mytokens'>my tokens</div>
            <div id = 'initializedtokens'>initialized tokens</div>
            <div id = 'acquiredtokens'>acquired tokens</div>
            <div id = 'transactionrecord'>transaction record</div>
          </div>
          
          <div className = 'board'>
            <div id = 'post1'> post1</div>
            <div id = 'post2'>post2</div>
            <div id = 'post3'>post3</div>
          </div>
        </div>
      </>
  )
}
