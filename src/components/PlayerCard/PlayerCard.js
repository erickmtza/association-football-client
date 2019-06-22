import React from 'react'

import './PlayerCard.css'

export default function PlayerCard({ player }) {
    return (
        <li className="player-card" key={player.id || player.name}>
            <img className="player-img" src={player.img} alt={player.name}/>
            <ul>
                <li>
                    {Math.ceil((Number(player.att) + Number(player.def) + Number(player.spd)) / 3)} AVG.
                </li>
                <li>
                    Name: {player.name}
                </li>
                <li>
                    Pos: {player.pos}
                </li>
                <li>
                    ATT: {player.att}
                </li>
                <li>
                    DEF: {player.def}
                </li>
                <li>
                    SPD: {player.spd}
                </li>
            </ul>
        </li>
    )
}