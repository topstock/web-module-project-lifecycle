import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
      return(<div className='cardsContainer'>
        {
          this.props.map( followerData => {
            return(
                <Follower props={followerData} key={`${followerData.id}`}/>
            )
          })
        }
      </div>)
    }
  }
  
  export default FollowerList;