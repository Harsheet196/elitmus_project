window.handleCredentialResponse = async (e) => {
    // console.log(e.credential);
    document.getElementsByClassName("loader-container")[0].style.display = "flex"
    document.getElementById("sign-in-img").style.display = "none"
    let res;
    try {
        res = await postData("/login", { "token": e.credential });
    } catch (e) {
        await signOut()
        window.location = "/"
        return
    }
    console.log(res);
    if (res != undefined) {
        window.location = "/game"
    }
}

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

const signOut = async () => {
    console.log("lll");
    let res = await postData("/logout", {});
}