import React, {useState} from 'react'

import Modal from '../../components/Modal/Modal'
import Team from '../../components/Team/Team'

export default function Dashboard() {
    const [players, setPlayers] = useState([])
    const [modal, setModal] = useState(false)
    const [filterPlayersPos, setFilterPlayersPos] = useState('')

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

    return (
        <section>
            <h1>Dashboard</h1>
            <section>
                <p>Team *name</p>
                <button onClick={() => setModal(true)}>Add Player</button>

                <label htmlFor="filter">Filter:</label>
                <select onChange={e => setFilterPlayersPos(e.target.value)} defaultValue="All" id="filter" name="filterPlayers">
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
                    <option value="LW, RW">Winger</option>
                </select>
                {modal && <Modal>
                    <span onClick={() => setModal(false)}>CLOSE</span>
                    <form onSubmit={(e) => addPlayer(e)}>
                        <fieldset>
                            <legend>ADD PLAYER</legend>
                            
                            <input placeholder="first/last name" name="name" required></input>
                            <label htmlFor="img">Player Image URL</label>
                            <input type="text" id="img" name="img"></input>
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
                                <option value="LW, RW">Winger</option>
                            </select>
                            <p>ATTRIBUTES</p>
                            <ul>
                                <li>
                                    <label htmlFor="att">ATT</label>
                                    <input type="number" id="att" min="1" max="100" name="att" required />
                                </li>
                                <li>
                                    <label htmlFor="def">DEF</label>
                                    <input type="number" id="def" min="1" max="100" name="def" required />
                                </li>
                                <li>
                                    <label htmlFor="spd">SPD</label>
                                    <input type="number" id="spd" min="1" max="100" name="spd" required />
                                </li>
                            </ul>
                            <button type="submit">Add Player</button>
                        </fieldset>
                    </form>
                </Modal>}
                <Team
                    players={players}
                    filterPlayersPos={filterPlayersPos}
                />
            </section>

        </section>
    )
}