import React from 'react';
import {Col} from 'react-bootstrap';
import DisplayLifeGoals from './DisplayLifeGoals';
import { inject, observer } from 'mobx-react';

class HomeGoals extends React.Component{
  render(){
    let priorityGoals = this.props.goalStore.goalsArr.filter(goal => goal.status == 'trash');
    let displayTrashColumnGoals = priorityGoals.map((goal, index) =>
        ( <div key={index} style={{border:'1px solid black', width:'100%', padding:"15px", borderRadius: "15px", background:"rgba(255,255,255,0.6)", textAlign: 'center', marginTop: '1vh', marginBottom: '1vh'}}>
            <h4 style={{color: `${this.props.goalStore.cardColor(goal)}`}}>{goal.value}</h4>
              <p>{goal.lifeGoal}</p>
          </div>)
      );
    return(
        <Col md={3}>
          {displayTrashColumnGoals}
        </Col>
    );
  }
}

HomeGoals.propTypes = {
  goalStore: React.PropTypes.object
};

export default inject('goalStore')(observer(HomeGoals));
