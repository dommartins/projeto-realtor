import React from 'react';
import './Agents.scss';
import AgentsConstructor from '../../assets/images/img-constructor.svg';

export default function Agents() {
  return (
    <React.Fragment>
        <div className="re-agents">
          <img src={AgentsConstructor} alt="Agents" />
        </div>
    </React.Fragment>
  )
}