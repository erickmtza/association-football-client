import React, {useState} from 'react'

export default function Dashboard() {
    const [players, setPlayers] = useState([])

    const addPlayer = (newPlayer) => {
        setPlayers([...players, newPlayer])
    }

    const displayPlayers = players.map((player,i) => (
        <li key={i}>
            <p>Name: {player.name}</p>
            <img src={player.img} />
        </li>
    ))

    const sample = {
        name: 'Cristiano R.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVIKhEXqujrRqWW7CvPMgudWRF2D4YM8PTpHAMtg2uRbPP_PYJg'
    }

    return (
        <section>
            <h1>Dashboard</h1>
            <section>
                <p>Team *name</p>
                <button onClick={() => addPlayer(sample)}>Add Player</button>
                <label htmlFor="filter">Filter:</label>
                <select id="filter">
                    <option value="GK">All</option>
                    <option value="GK">Goalkeeper</option>
                    <option value="CB">Center Back</option>
                    <option value="LB, RB">Fullback</option>
                    <option value="LWB, RWB">Wingback</option>
                    <option value="SW">Sweeper</option>
                    <option value="DM">Defensive Midfielder</option>
                    <option value="CM">Central Midfielder</option>
                    <option value="AM">Attacking Midfielder</option>
                    <option value="LM, RM">Left/Right Midfielder</option>
                    <option value="CF">Center Forward</option>
                    <option value="S">Striker</option>
                    <option value="Lw, RW">Winger</option>
                </select>
                <ul>
                    {displayPlayers}
                </ul>
            </section>

        </section>
    )
}