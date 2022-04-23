var GetToken = (): string => {
    var sessionToken = sessionStorage.getItem('token')
    if (sessionToken) {
        return sessionToken
    }

    var localToken = localStorage.getItem('token')
    if (localToken) {
        return localToken
    }
    return ""
}

export {
    GetToken
}