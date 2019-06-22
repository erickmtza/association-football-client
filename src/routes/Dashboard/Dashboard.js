import React, {useState, useContext, useEffect} from 'react'

import Modal from '../../components/Modal/Modal'
import Team from '../../components/Team/Team'

import PlayersContext from '../../context/PlayersContext'
import AuthApiService from '../../services/players-api-service'

import './Dashboard.css'

export default function Dashboard() {
    const [modal, setModal] = useState(false)
    const [filterPlayersPos, setFilterPlayersPos] = useState('')
    const [effectWatch, setEffectWatch] = useState(false)
    const [error, setError] = useState('')

    const value = useContext(PlayersContext)

    useEffect(() => {

        if(value.players.length === 0) {
            AuthApiService.getAllPlayers()
                .then(res => {
                    value.initiatePlayers(res)
                    value.teamnameUpdate(res[0].user.teamname)
                })
                .catch(res => {
                    setError(res.error)
                })
        }
        
    }, [effectWatch])

    const addPlayer = (e) => {
        e.preventDefault()
        const player = {
            name: e.target.name.value,
            img: e.target.img.value ? e.target.img.value : "https://www.sports.legal/files/2016/09/Soccer_Football_Player-335x168.jpg",
            att: e.target.att.value,
            def: e.target.def.value,
            spd: e.target.spd.value,
            pos: e.target.pos.value,
        }

        AuthApiService.postPlayer(player)
            .then(res => {
                if(value.players.length === 0) {
                    setEffectWatch(true)
                }

                value.addPlayer(player)
            })
            .catch(res => {
                setError(res.error)
                console.log(error)
            })

        setModal(false)
    }

    

    return (
        <section className="dashboard">
            <h1 className="dashboard-title">Welcome to Association Football</h1>
            <section>
                <h2 className="teamname">{value.teamname ? `Club Name - ${value.teamname}` : `Add players to your Club`}</h2>

                <section className="interactives">
                    <button className="add-player-btn in-btn" onClick={() => setModal(true)}>Add Player</button>
                    <section>
                        <label className="filter-label" htmlFor="filter">Filter:</label>
                        <select className="filter-player-btn in-btn" onChange={e => setFilterPlayersPos(e.target.value)} defaultValue="All" id="filter" name="filterPlayers">
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
                    </section>
                    
                </section>
                
                {modal && <Modal>
                    <span
                        className="close-modal" 
                        onClick={() => setModal(false)}
                        tabIndex="0"
                    >CLOSE</span>
                    <form className="add-player-form" onSubmit={(e) => addPlayer(e)}>
                        <fieldset className="add-player-field">
                            <legend className="add-player-legend">ADD PLAYER</legend>
                            
                            <input className="player-info-input first" placeholder="first/last name" name="name" autoFocus={true} required></input>
                            <label className="labelName" htmlFor="img">Player Image URL (not required)</label>
                            <input className="player-info-input" type="text" id="img" name="img" placeholder="https://www.sports.legal/files/2016/09/Soccer_Football_Player-335x168.jpg"></input>
                            <label className="labelName" htmlFor="position">Position:</label>
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
                            <p className="labelName">ATTRIBUTES</p>
                            <ul className="attr">
                                <li>
                                    <label htmlFor="att">ATT</label>
                                    <input className="player-info-input" type="number" id="att" min="1" max="100" name="att" placeholder="eg. 80" required />
                                </li>
                                <li>
                                    <label htmlFor="def">DEF</label>
                                    <input className="player-info-input" type="number" id="def" min="1" max="100" name="def" placeholder="eg. 50" required />
                                </li>
                                <li>
                                    <label htmlFor="spd">SPD</label>
                                    <input className="player-info-input" type="number" id="spd" min="1" max="100" name="spd" placeholder="eg. 79" required />
                                </li>
                            </ul>
                            <button className="addPlayer-btn" type="submit">Add Player</button>
                        </fieldset>
                    </form>
                </Modal>}
                <Team
                    players={value.players}
                    filterPlayersPos={filterPlayersPos}
                />
            </section>

        </section>
    )
}