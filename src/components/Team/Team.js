import React from 'react'

import PlayerCard from '../../components/PlayerCard/PlayerCard'

import './Team.css'

export default function Team({players, filterPlayersPos}) {

    const filter = () => {
        if(filterPlayersPos === "All" || !filterPlayersPos) {
            return players.map((player) => (
                <PlayerCard
                    player={player}
                    key={player.id || player.name}
                />
            ))
        } else {
            return players.filter((player) => player.pos === filterPlayersPos).map((player) => (
                <PlayerCard
                    player={player}
                    key={player.id || player.name}
                />
            ))
        }
    }

    return (
        <ul className="team-container">
            {filter()}
        </ul>
    )
}