import React from 'react'

import PlayerCard from '../../components/PlayerCard/PlayerCard'

export default function Team({players, filterPlayersPos}) {

    const filter = () => {
        console.log(filterPlayersPos)
        if(filterPlayersPos === "All" || !filterPlayersPos) {
            return players.map((player, i) => (
                <PlayerCard
                    player={player}
                    id={i}
                />
            ))
        } else {
            console.log(filterPlayersPos)
            return players.filter((player) => player.pos === filterPlayersPos).map((player, i) => (
                <PlayerCard
                    player={player}
                    id={i}
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