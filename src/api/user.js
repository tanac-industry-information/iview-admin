import axios from '@/libs/api.request'

export const register = () => {
  return axios.request({
    url: 'Authenticate/register',
    method: 'post'
  })
}

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'Authenticate/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'Authenticate/get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'Authenticate/logout',
    method: 'post',
    params: {
      token
    }
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
