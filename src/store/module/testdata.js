import {
  get_all_stations_info,
  // get_station_info,
  // set_station_info,
  // get_station_data,
  get_station_data
  // upload_test_data
} from '@/api/testdata'
// import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    station_infos: [],
    station_data: [],
    current_station_info: {},
    stationName: ''
  },
  mutations: {
    setStationsInfo (state, infos) {
      state.station_infos = infos
    },
    setStationData (state, data) {
      state.station_data = data
    },
    setStationInfo (state, info) {
      state.current_station_info = info
    }
  },
  getters: {},
  actions: {
    getAllStationInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          get_all_stations_info().then(res => {
            const data = res.data
            commit('setStationsInfo', data)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    getStationData ({ state, commit }, { Id, From, To, PageNumber, PageSize }) {
      return new Promise((resolve, reject) => {
        try {
          get_station_data({ Id, From, To, PageNumber, PageSize })
            .then(res => {
              const data = res.data
              commit('setStationData', data)
              resolve(data)
            }).catch(err => {
              reject(err)
            })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
