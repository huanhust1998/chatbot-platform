const getLocalToken = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      return user?.token || null
    } catch (err) {
      return null
    }
  }
  
  const getLocalAccessToken = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      return user?.token?.accessToken || null
    } catch (err) {
      return null
    }
  }
  
  const updateLocalAccessToken = (token) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const newUser = {
      ...user,
      token: {
        ...user.token,
        access_token: token,
      },
    }
    localStorage.setItem("user", JSON.stringify(newUser))
  }
  
  const updateLocalRefreshToken = (refreshToken) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const newUser = {
      ...user,
      token: {
        ...user.token,
        refreshToken,
      },
    }
    localStorage.setItem("user", JSON.stringify(newUser))
  }
  
  const updateLocalNewToken = (newToken) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const newUser = {
      ...user,
      token: {
        ...user.token,
        ...newToken,
      },
    }
    localStorage.setItem("user", JSON.stringify(newUser))
  }
  
  export const getUserLocal = () => {
    if (typeof window !== "undefined") {
      let user
      try {
        user = JSON.parse(localStorage.getItem("user") || "{}")
      } catch (error) {
        user = {}
      }
      return user
    }
    return {}
  }
  
  export const getReferralInfoLocal = () => {
    if (typeof window !== "undefined") {
      let referralInfo
      try {
        referralInfo = JSON.parse(localStorage.getItem("referralInfo") || "{}")
      } catch (error) {
        referralInfo = {}
      }
      return referralInfo
    }
    return {}
  }
  
  const setUserLocal = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
  }
  
  const setReferralInfoLocal = (referralInfo) => {
    localStorage.setItem("referralInfo", JSON.stringify(referralInfo))
  }
  
  const removeUserLocal = () => {
    localStorage.removeItem("user")
  }
  
  const TokenService = {
    getLocalToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    updateLocalRefreshToken,
    updateLocalNewToken,
    getUserLocal,
    setUserLocal,
    setReferralInfoLocal,
    getReferralInfoLocal,
    removeUserLocal,
  }
  
  export default TokenService
  