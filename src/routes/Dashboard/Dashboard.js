import React, {useState} from 'react'
import Modal from '../../components/Modal/Modal'

export default function Dashboard() {
    const [players, setPlayers] = useState([])
    const [modal, setModal] = useState(false)

    const addPlayer = (e) => {
        e.preventDefault()
        const player = {
            name: e.target.name.value,
            img: e.target.img.value,
            att: e.target.att.value,
            def: e.target.def.value,
            spd: e.target.spd.value,
            pos: e.target.pos.value,
        }
        setPlayers([...players, player])
        setModal(false)
    }

    const displayPlayers = players.map((player, i) => (
        <li key={i}>
            <img src={player.img} alt={player.name}/>
            <p>{Math.ceil((Number(player.att) + Number(player.def) + Number(player.spd)) / 3)} AVG.</p>
            <p>Name: {player.name}</p>
            <p>ATT: {player.att}</p>
            <p>DEF: {player.def}</p>
            <p>SPD: {player.spd}</p>
        </li>
    ))

    const sample = {
        name: 'Cristiano R.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVIKhEXqujrRqWW7CvPMgudWRF2D4YM8PTpHAMtg2uRbPP_PYJg',
        att: 91,
        def: 65,
        spd: 86,
        pos: 'S'
    }

    return (
        <section>
            <h1>Dashboard</h1>
            <section>
                <p>Team *name</p>
                <button onClick={() => setModal(true)}>Add Player</button>

                <label htmlFor="filter">Filter:</label>
                <select id="filter">
                    <option value="All">All</option>
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
                {modal && <Modal>
                    <span onClick={() => setModal(false)}>CLOSE</span>
                    <form onSubmit={(e) => addPlayer(e)}>
                        <fieldset>
                            <legend>ADD PLAYER</legend>
                            
                            <input placeholder="first/last name" name="name" required></input>
                            <label htmlFor="img">Player Image URL</label>
                            <input type="text" id="img" name="img"></input>
                            <label htmlFor="date">DOB</label>
                            <input type="date" id="bday" name="date"></input>
                            <label htmlFor="position">Position:</label>
                            <select id="position" name="pos">
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
                            <label htmlFor="att">ATT</label>
                            <input type="number" id="att" min="1" max="100" name="att"></input>
                            <label htmlFor="def">DEF</label>
                            <input type="number" id="def" min="1" max="100" name="def"></input>
                            <label htmlFor="spd">SPD</label>
                            <input type="number" id="spd" name="spd"></input>

                            <button type="submit">Add Player</button>
                        </fieldset>
                    </form>
                </Modal>}
                <ul>
                    {displayPlayers}
                </ul>
            </section>

        </section>
    )
}