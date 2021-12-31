const { getFirestore, getDoc, doc } = require('firebase/firestore');
const db = getFirestore();
const fs = require("fs");
var json = JSON.parse(fs.readFileSync('./source.json'))

async function data(number) {
    try {
        const docRef1 = doc(db, "streams", "value1");
        const docRef2 = doc(db, "streams", "value2");
        const docRef3 = doc(db, "streams", "value3");
        const docRef4 = doc(db, "streams", "value4");
        const docSnap1 = await getDoc(docRef1);
        const docSnap2 = await getDoc(docRef2);
        const docSnap3 = await getDoc(docRef3);
        const docSnap4 = await getDoc(docRef4);
        console.log("|14|STARTING SYNCHRONIZACTION");
        if (docSnap1.exists()) {
            json.value1 = docSnap1.data().Link;
            json.name1 = docSnap1.data().Name;
            json.value2 = docSnap2.data().Link;
            json.name2 = docSnap2.data().Name;
            json.value3 = docSnap3.data().Link;
            json.name3 = docSnap3.data().Name;
            json.value4 = docSnap4.data().Link;
            json.name4 = docSnap4.data().Name;
            var a = JSON.stringify(json)
            fs.writeFileSync('./source.json', a, function () { });
            console.log("|15|DONE SYNCHRONIZACTION");
            return "|15|DONE SYNCHRONIZACTION";
        }
        else {
            return "|16|FAILED SYNCHRONIZACTION";
        };
    } catch (error) {
        console.log("|17|FAILED SYNCHRONIZACTION");
        return "|17|FAILED SYNCHRONIZACTION";
    }
};

module.exports = { data };
