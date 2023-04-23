let inpBar = document.getElementById("searchNames")
inpBar.oninput = async () => {
    let tbody = document.getElementsByTagName("tbody")

    for (let i = 0; i < temp.length; i++) {
        tbody[i + 1].style.display = ""
    }

    let inp = inpBar.value
    inp = inp.trim()
    inp = inp.toLowerCase()

    if (inp.length > 0) {

        for (let i = 0; i < temp.length; i++) {
            let obj = temp[i].name.toLowerCase()

            if (obj.includes(inp)) {
                tbody[i + 1].style.display = ""
            } else {
                tbody[i + 1].style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < temp.length; i++) {
            tbody[i + 1].style.display = ""
        }
    }
}