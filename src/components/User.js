import React from 'react';

class User extends React.Component {
  render() {
    return(<section className='profileInfo'>
      <div className='profileImage'>
        <img width='300' src={`${this.props.userImgURL}`}/>
      </div>
      <div className='profileInfo'>
        <h3 className='uppercase underline'>{`${this.props.userName}`}</h3>
        <h5 className='uppercase'>({`${this.props.userLogin}`})</h5>
        <p>TOTAL REPOS: {`${this.props.userRepos}`}</p>
        <p>TOTAL FOLLOWERS: {`${this.props.userFollowers}`}</p>
      </div>
    </section>)
  }
}

export default User;