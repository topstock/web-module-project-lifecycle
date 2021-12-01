import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';
import axios from 'axios';
import './index.css';

class App extends React.Component {
  state = {
    user: {},
    follower: [],
    input: '',
    username: 'topstock'
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
        .then( res => { 
          this.setState({
            ...this.state,
            user: res.data
          });
        })
        .catch(err => console.error(err))

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => { 
        this.setState({
          ...this.state,
          follower: res.data
        });
      })
      .catch(err => console.error(err))
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      username: this.state.input
    });
  }
 
  handleChanges = (e) => {
    if (e.target.value) {
      this.setState({
        ...this.state,
        input: e.target.value
      });
    }
  }
  
  componentDidUpdate(prevState) {
    if ( this.state.username === this.state.input && this.state.input) {
      axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => { 
        this.setState({
          ...this.state,
          input: '',
          follower: res.data
        });
      })
      .catch(err => console.error(err))

      axios.get(`https://api.github.com/users/${this.state.username}`)
        .then( res => { 
          this.setState({
           ...this.state,
            user: res.data
          });
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    return(<div className='App'>
      <h1>GITHUB INFO</h1>
      <form>
        <input onChange={this.handleChanges} value={this.state.input} name='newUsername' placeholder='GitHub Handle'/>
        <button onClick={this.handleClick}>Search</button>
      </form>
      <User 
        userImgURL={this.state.user.avatar_url} 
        userLogin={this.state.user.login}
        userName={this.state.user.name}
        userFollowers={this.state.user.followers} 
        userRepos={this.state.user.public_repos}
      />
      <div className='followersList'>
        <h3>FOLLOWERS</h3>
          <FollowerList 
            follower={this.state.follower.map( f => {
              return {
                followerLogin: f.login,
                followerImgUrl: f.avatar_url,
                followerId: f.id
              }
            })}
          /> 
      </div>
    </div>);
  }
}

export default App;
