import React from 'react';

class Follower extends React.Component {
  render(){
    return(
      <div className='card' key={`${this.props.login}`}>
        <img width='100' src={`${this.props.avatar_url}`}/>
        <h5 className='underline uppercase'>{`${follower.login}`}</h5>
      </div>
    )
  }
}

export default Follower