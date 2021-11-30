import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
      return(<div className='cardsContainer'>
       contained
        {
          this.props.followersData.map( followerData => {
            return(
                <Follower followerImgUrl={followerData.followerImgUrl} followerLogin={followerData.followerLogin} key={`${followerData.followerId}`}/>
            )
          })
        }
      </div>)
    }
  }
  
  export default FollowerList;