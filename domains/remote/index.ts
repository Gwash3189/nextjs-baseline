const remote = (url: string, options: RequestInit) => {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: options.body ? JSON.stringify(options.body) : null
  })
}

export const post = (url: string, options: RequestInit = {}) => remote(url, {
  ...options,
  method: 'POST'
})

export const put = (url: string, options: RequestInit = {}) => remote(url, {
  ...options,
  method: 'PUT'
})

export const del = (url: string, options: RequestInit = {}) => remote(url, {
  ...options,
  method: 'DELETE'
})

export const get = (url: string, options: RequestInit = {}) => remote(url, options)