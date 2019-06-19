import React from 'react'

import PlayerCard from '../../components/PlayerCard/PlayerCard'

export default function Team({players, filterPlayersPos}) {

    const filter = () => {
        if(filterPlayersPos === "All" || !filterPlayersPos) {
            return players.map((player) => (
                <PlayerCard
                    player={player}
                    key={player.id}
                />
            ))
        } else {
            return players.filter((player) => player.pos === filterPlayersPos).map((player) => (
                <PlayerCard
                    player={player}
                    key={player.id}
                />
            ))
        }
    }

    return (
        <ul>
            {filter()}
        </ul>
    )
}