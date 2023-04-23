const addToLeaderBoard = (i, obj) => {
    let sum = obj.badge + obj.skill
    if (sum == 0) {
        return 0
    }
    let board = document.getElementById("leaderboard");
    let newRow = `
    <tr class="row">
            <td class="cell">${i}</td>
            <td class="cell">
                ${obj.name}
            </td>
            <th class="cell robo">${obj["GBugs"]}</th>
    </tr>
        `
    board.innerHTML += newRow
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
let temp = []
const init = async () => {
    let data = await postData("/leaderboard", {})
    // console.log(data);

    temp = data["data"]
    // console.log(temp);

    temp.sort(function (a, b) {
        return b["GBugs"] - a["GBugs"];
    });
    console.log(temp);

    let shadowLoad = document.getElementsByClassName("shadowLoad")
    for (let i = 0; i < shadowLoad.length; i++) {
        shadowLoad[i].style.display = "none"
    }

    for (let i = 0; i < temp.length; i++) {
        addToLeaderBoard(i + 1, temp[i])
    }

    // document.getElementById("timeUpdate").innerText = `Last Updated : ${time}`

}

// entry function
window.onload = init()