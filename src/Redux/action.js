export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const loginLoading = () => {
    return {
        type: LOGIN_LOADING
    }
}

export const loginSuccess = (payLoad) => {
    return {
        type: LOGIN_SUCCESS,
        payLoad
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR
    }
}

export const allActions = (payLoad) => (dispatch) => {
    dispatch(loginLoading())
    fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.token) {
                console.log("token", res.token);
                dispatch(loginSuccess(res.token));
            }
        }
        )
        .catch(err => dispatch(loginError()));
}