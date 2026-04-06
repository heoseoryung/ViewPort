const BASE_URL = 'http://localhost:8072'

// ─── Access Token ────────────────────────────────
let _accessToken = null
export const getAccessToken = () => _accessToken
export const setAccessToken = (token) => { _accessToken = token }
export const clearAccessToken = () => { _accessToken = null }

// ─── User 정보 ───────────────────────────────────
let _user = null
export const getUser = () => _user
export const setUser = (user) => { _user = user }
export const clearUser = () => { _user = null }

// ─── CSRF 토큰 읽기 ──────────────────────────────
export const getCsrfToken = () => {
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/)
  return match ? decodeURIComponent(match[1]) : ''
}

// ─── 앱 시작 시 호출 ─────────────────────────────
export const initAuth = async () => {
  await fetch(`${BASE_URL}/api/v1/csrf`, { credentials: 'include' }).catch(() => {})

  try {
    const res = await fetch(`${BASE_URL}/api/v1/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    })
    if (res.ok) {
      const data = await res.json()
      setAccessToken(data.accessToken)

      const meRes = await authFetch(`${BASE_URL}/api/v1/auth/me`)
      if (meRes?.ok) {
        const me = await meRes.json()
        setUser(me)
      }
    }
  } catch {
    // 비로그인 상태
  }
}

// ─── 인증 fetch (401 시 Silent Refresh) ──────────
export const authFetch = async (url, options = {}) => {
  const makeRequest = () =>
    fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
        ...(shouldIncludeCsrf(options.method) && {
          'X-XSRF-TOKEN': getCsrfToken(),
        }),
      },
    })

  let res = await makeRequest()

  if (res.status === 401) {
    const refreshRes = await fetch(`${BASE_URL}/api/v1/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    })

    if (!refreshRes.ok) {
      clearAccessToken()
      clearUser()
      window.location.href = '/login'
      return
    }

    const data = await refreshRes.json()
    setAccessToken(data.accessToken)
    res = await makeRequest()
  }

  return res
}

const shouldIncludeCsrf = (method = 'GET') =>
  ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())