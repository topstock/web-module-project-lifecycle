import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
      return(<div className='cardsContainer'>
    
        {
          this.props.follower.map( followerData => {
            return(
                <Follower followerImgUrl={followerData.followerImgUrl} followerLogin={followerData.followerLogin} key={`${followerData.followerId}`}/>
            )
          })
        }
      </div>)
    }
  }
  
  export default FollowerList;