import React from 'react';

class Follower extends React.Component {
  render(){
    return(
      <div className='card' key={`${this.props.followerLogin}`}>
        <img width='100' src={`${this.props.followerImgUrl}`}/>
        <h5 className='underline uppercase'>{`${this.props.followerLogin}`}</h5>
      </div>
    )
  }
}

export default Follower