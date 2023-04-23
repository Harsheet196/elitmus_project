window.onload = () => {
    document.getElementById("ok").onclick = () => {
        document.getElementsByClassName("msg-container")[0].style.display = "none"
    }
    let temp = document.getElementsByClassName("submitwood")
    if (temp[0] == undefined) {
        return
    }
    temp[0].onclick = async () => {
        sendMsg("Checking your answer")
        let temp = document.getElementsByClassName("question_input")

        let ans = ""
        for (let i = 0; i < temp.length; ++i) {
            ans += temp[i].value.toString().trim()
        }
        console.log(ans);
        let res = await sendData({ "answer": ans })
        console.log(res);

        if (res["success"]) {
            sendMsg("correct answer ... to next stage now...!")
            window.location = "/game"
        } else {
            let res = await sendDataforsecond({ "answer": ans })
            if(res["success"])
            {
                window.location="/game"
            }
            sendMsg("Incorrect answer ... try again")
        }
    }

}
const sendDataforsecond = async (data) => {
    let res = await postData("/second_game", data);
    return res
}
const sendDataforfourth = async (data) => {
    let res = await postData("/fourth_game", data);
    return res
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

const sendData = async (data) => {
    let res = await postData("/check", data);
    return res
}

const sendMsg = (msg) => {
    document.getElementsByClassName("msg-container")[0].style.display = "flex"
    document.getElementById("msg").innerText = msg
}