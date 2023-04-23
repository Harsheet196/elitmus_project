const admin = require('firebase-admin');

const serviceAccount = require("./../secret/harsheet.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

const dbname = "wreck-it-retro-db"

const getData = async (ID) => {
    let doc = firestore.doc(`${dbname}/${ID}`);
    let docData = await doc.get()
    return docData.data()
}
const createDoc = async (data) => {

    if (data["email"] == undefined || data["email"] == "gameData") {
        console.log("invalid entry")
        return
    }

    if (await getData(data["email"]) != undefined) {
        console.log("already exists");
        return
    }

    firestore.collection(`${dbname}`).doc(data["email"]).set({
        "name": data["name"],
        "GBugs": 0,
        "email": data["email"],
        "level": 1,
        "time": 0
    }).then(() => {
        console.log(`new data added for ${data["email"]}`)
    })
}

const updateData = async (data) => {
    if (data["email"] == undefined || data["email"] == "gameData") {
        console.log("invalid entry")
        return
    }
    if (await getData(data["email"]) == undefined) {
        console.log("doc doesn't exists");
        return
    }
    firestore.collection(`${dbname}`).doc(data["email"]).update(data).then(() => {
        console.log(`Data updated for ${data["email"]}`)
    })
}

const allData = async () => {
    let arr = []
    await firestore.collection(`${dbname}`).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            if (doc.id != "gameData") {
                arr.push(doc.data())
            }
        });
    })
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = {
            "email": arr[i]["email"],
            "GBugs": arr[i]["GBugs"],
            "name": arr[i]["name"]
        }
    }
    // console.log(arr);
    return arr;
}

const resetTimeToNow = async () => {
    let arr = await allData()
    console.log(arr);

    for (let i = 0; i < arr.length; ++i) {
        let newTime = {
            "email": arr[i]["email"],
            "time": Date.now()
        }
        await updateData(newTime)
    }
}
const dbcall = async () => {
    await resetTimeToNow()
}
// dbcall()
module.exports = { getData, createDoc, updateData, allData }
