import React, { Component } from 'react'

const PlayersContext = React.createContext({
  players: [],
  user_id: '',
  signedIn: false,
  addPlayer: () => {}
})

export default PlayersContext

export class PlayersProvider extends Component {
  state = {
    error: null,
    players: [],
    user_id: '',
    signedIn: false,
    addPlayer: () => {},
  };


  signedInUpdate = (bool) => {
    this.setState({ signedIn: bool })
  }

  addPlayer = Player => {
    this.setState({
        players:[
            ...this.state.players,
            Player
    ]})
  }

  render() {
    const value = {
      players: this.state.players,
      addPlayer: this.addPlayer,
      signedInUpdate: this.signedInUpdate,
      user_id: this.state.user_id
    }
    return (
      <PlayersContext.Provider value={value}>
        {this.props.children}
      </PlayersContext.Provider>
    )
  }
}
