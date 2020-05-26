const URL_BASE = "http://blog-medium-api.mybluemix.net/"

function logIn(dataCredentials) {
    const URL = `${URL_BASE}auth/login`
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(dataCredentials),
        headers: {
            "Content-type": "application/json"
        },
        mode: "cors"
    })
}

export {
    logIn
}