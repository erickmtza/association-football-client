import React, { Component } from 'react'

const PlayersContext = React.createContext({
  players: [],
  teamname: '',
  signedIn: false,
  addPlayer: () => {},
  initiatePlayers: () => {},
  teamnameUpdate: () => {}
})

export default PlayersContext

export class PlayersProvider extends Component {
  state = {
    error: null,
    players: [],
    signedIn: false,
    teamname: ''
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

  initiatePlayers = players => {
      this.setState({ players })
  }

  teamnameUpdate = teamname => {
    this.setState({ teamname })
  }

  render() {
    const value = {
      players: this.state.players,
      addPlayer: this.addPlayer,
      signedInUpdate: this.signedInUpdate,
      initiatePlayers: this.initiatePlayers,
      teamname: this.state.teamname,
      teamnameUpdate: this.teamnameUpdate
    }
    return (
      <PlayersContext.Provider value={value}>
        {this.props.children}
      </PlayersContext.Provider>
    )
  }
}
