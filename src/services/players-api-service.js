import TokenService from '../services/token-service'
import config from '../config'

const ArticleApiService = {
  getAllPlayers() {
    return fetch(`${config.API_ENDPOINT}/players`, {
        headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPlayers(player_id) {
    return fetch(`${config.API_ENDPOINT}/players/${player_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postPlayer(player) {
    return fetch(`${config.API_ENDPOINT}/players`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(player),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ArticleApiService