import React from 'react'

export default function PlayerCard({ player, id }) {
    console.log(id)
    return (
        <li key={player.id}>
            <img src={player.img} alt={player.name}/>
            <p>{Math.ceil((Number(player.att) + Number(player.def) + Number(player.spd)) / 3)} AVG.</p>
            <p>Name: {player.name}</p>
            <p>Pos: {player.pos}</p>
            <p>ATT: {player.att}</p>
            <p>DEF: {player.def}</p>
            <p>SPD: {player.spd}</p>
        </li>
    )
}