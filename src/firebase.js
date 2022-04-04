import { initializeApp } from 'firebase/app';
import axios from "axios";
// import { getDatabase } from "firebase/database";
import { getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, getDocs, updateDoc, setDoc,SetOptions } from "firebase/firestore";
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyCkmxCvw2Pe3ASRCBSgcKwXfwqOtOW3Hi4",
    authDomain: "cricketscoredb.firebaseapp.com",
    projectId: "cricketscoredb",
    storageBucket: "cricketscoredb.appspot.com",
    messagingSenderId: "430514396947",
    appId: "1:430514396947:web:69ac68199c6a3143bec4e6"
}

initializeApp(firebaseConfig);
const db = getFirestore()
const usersCollection =  collection(db,'Owners')

export const createUser = user => {
  addDoc(usersCollection, {
    data :'test',
    value : 'addedNew'
  })
  // return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  // const close = usersCollection.onSnapshot(snapshot => {
  //   users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  // })
  // onUnmounted(close)
  getDocs(usersCollection).then((snapshot)=>{
    // let users =[]
    users.value = snapshot.docs.forEach((doc)=>{
        ({ id: doc.id, ...doc.data() })
    })
  })
  return users
}
getDocs(usersCollection).then((snapshot)=>{
    let users=[]
    snapshot.docs.forEach((doc)=>{
      users.push({id: doc.id,...doc.data()})
    })
    console.log(users)
})

// addDoc(usersCollection, {
//   data :'test',
//   value : 'addedNew'
// }).catch(err=>{
//     console.log(err.message)
// })

// const docRef = doc(db,'Owners','Bala')
// const match = 'DC vs SRH'
// updateDoc(docRef,{
//   [match] : { 
//     Virat: {
//       runs : '200',
//       fours : '10'
//     }
//   }
//   }
//   )
  
  // const options = {
  //   method: 'GET',
  //   url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard',
  //   params: {matchId: '45886'},
  //   headers: {
  //     'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
  //     'X-RapidAPI-Key': '427451b511msh07056d18c6e0adcp1dae07jsn577cf6594d98'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   // console.log(response.data);
  //   const matchScore = response.data;
  //   proceedNext(matchScore)
  // }).catch(function (error) {
  //   console.error(error);
  // });
 
console.log('start')
  const matchScore = {
    "scorecard": [{
      "inningsId": 1,
      "batsman": [{
        "id": 11813,
        "balls": 4,
        "strkRate": "0",
        "name": "Ruturaj Gaikwad",
        "outDec": "c Nitish Rana b Umesh"
      }, {
        "id": 9838,
        "balls": 8,
        "runs": 3,
        "strkRate": "37.5",
        "name": "Conway",
        "outDec": "c Shreyas Iyer b Umesh"
      }, {
        "id": 527,
        "balls": 21,
        "runs": 28,
        "fours": 2,
        "sixes": 2,
        "strkRate": "133.33",
        "name": "Uthappa",
        "outDec": "st Jackson b Chakaravarthy"
      }, {
        "id": 6311,
        "balls": 17,
        "runs": 15,
        "fours": 1,
        "sixes": 1,
        "strkRate": "88.24",
        "name": "Rayudu",
        "outDec": "run out (Shreyas Iyer/Narine) "
      }, {
        "id": 587,
        "balls": 28,
        "runs": 26,
        "sixes": 1,
        "strkRate": "92.86",
        "name": "Ravindra Jadeja",
        "isCaptain": true,
        "outDec": "not out"
      }, {
        "id": 11195,
        "balls": 6,
        "runs": 3,
        "strkRate": "50",
        "name": "Shivam Dube",
        "outDec": "c Narine b Russell"
      }, {
        "id": 265,
        "balls": 38,
        "runs": 50,
        "fours": 7,
        "sixes": 1,
        "strkRate": "131.58",
        "name": "Dhoni",
        "isKeeper": true,
        "outDec": "not out"
      }, {
        "id": 242,
        "strkRate": "0",
        "name": "DJ Bravo"
      }, {
        "id": 10100,
        "strkRate": "0",
        "name": "Santner"
      }, {
        "id": 7625,
        "strkRate": "0",
        "name": "Milne"
      }, {
        "id": 11307,
        "strkRate": "0",
        "name": "Tushar Deshpande"
      }],
      "bowler": [{
        "id": 1858,
        "overs": "4",
        "wickets": 2,
        "runs": 20,
        "economy": "5",
        "name": "Umesh"
      }, {
        "id": 12345,
        "overs": "4",
        "runs": 35,
        "economy": "8.8",
        "name": "Shivam Mavi"
      }, {
        "id": 12926,
        "overs": "4",
        "wickets": 1,
        "runs": 23,
        "economy": "5.8",
        "name": "Chakaravarthy"
      }, {
        "id": 2276,
        "overs": "4",
        "runs": 15,
        "economy": "3.8",
        "name": "Narine"
      }, {
        "id": 7736,
        "overs": "4",
        "wickets": 1,
        "runs": 38,
        "economy": "9.5",
        "name": "Russell"
      }],
      "fow": [{
        "fow": [{
          "batsmanId": 11813,
          "batsmanName": "Ruturaj Gaikwad",
          "overNbr": 0.3,
          "runs": 2,
          "ballNbr": 3
        }, {
          "batsmanId": 9838,
          "batsmanName": "Conway",
          "overNbr": 4.1,
          "runs": 28,
          "ballNbr": 41
        }, {
          "batsmanId": 527,
          "batsmanName": "Uthappa",
          "overNbr": 7.5,
          "runs": 49,
          "ballNbr": 75
        }, {
          "batsmanId": 6311,
          "batsmanName": "Rayudu",
          "overNbr": 8.4,
          "runs": 52,
          "ballNbr": 84
        }, {
          "batsmanId": 11195,
          "batsmanName": "Shivam Dube",
          "overNbr": 10.5,
          "runs": 61,
          "ballNbr": 105
        }]
      }],
      "extras": {
        "wides": 4,
        "noBalls": 2,
        "total": 6
      },
      "pp": [{
        "powerPlay": [{
          "id": 41,
          "ovrFrom": 0.1,
          "ovrTo": 6.0,
          "ppType": "mandatory",
          "run": 35
        }]
      }],
      "score": 131,
      "wickets": 5,
      "overs": 20.0,
      "runRate": 6.55,
      "batTeamName": "Chennai Super Kings",
      "batTeamSName": "CSK",
      "ballNbr": 120,
      "rpb": 0.66
    }, {
      "inningsId": 2,
      "batsman": [{
        "id": 1447,
        "balls": 34,
        "runs": 44,
        "fours": 6,
        "sixes": 1,
        "strkRate": "129.41",
        "name": "Ajinkya Rahane",
        "nickName": "Rahane",
        "outDec": "c Ravindra Jadeja b Santner"
      }, {
        "id": 10917,
        "balls": 16,
        "runs": 16,
        "fours": 2,
        "strkRate": "100",
        "name": "Venkatesh Iyer",
        "nickName": "Venkatesh Iyer",
        "outDec": "c Dhoni b DJ Bravo"
      }, {
        "id": 9204,
        "balls": 17,
        "runs": 21,
        "fours": 2,
        "sixes": 1,
        "strkRate": "123.53",
        "name": "Nitish Rana",
        "nickName": "Nitish Rana",
        "outDec": "c Rayudu b DJ Bravo"
      }, {
        "id": 9428,
        "balls": 19,
        "runs": 20,
        "fours": 1,
        "strkRate": "105.26",
        "name": "Shreyas Iyer",
        "nickName": "Shreyas Iyer",
        "isCaptain": true,
        "outDec": "not out"
      }, {
        "id": 7990,
        "balls": 22,
        "runs": 25,
        "fours": 1,
        "sixes": 1,
        "strkRate": "113.64",
        "name": "Sam Billings",
        "nickName": "Billings",
        "outDec": "c Tushar Deshpande b DJ Bravo"
      }, {
        "id": 8846,
        "balls": 3,
        "runs": 3,
        "strkRate": "100",
        "name": "Sheldon Jackson",
        "nickName": "Jackson",
        "isKeeper": true,
        "outDec": "not out"
      }, {
        "id": 7736,
        "strkRate": "0",
        "name": "Andre Russell",
        "nickName": "Russell"
      }, {
        "id": 2276,
        "strkRate": "0",
        "name": "Sunil Narine",
        "nickName": "Narine"
      }, {
        "id": 1858,
        "strkRate": "0",
        "name": "Umesh Yadav",
        "nickName": "Umesh"
      }, {
        "id": 12345,
        "strkRate": "0",
        "name": "Shivam Mavi",
        "nickName": "Shivam Mavi"
      }, {
        "id": 12926,
        "strkRate": "0",
        "name": "Varun Chakaravarthy",
        "nickName": "Chakaravarthy"
      }],
      "bowler": [{
        "id": 11307,
        "overs": "3",
        "runs": 23,
        "economy": "7.7",
        "name": "Tushar Deshpande",
        "nickName": "Tushar Deshpande"
      }, {
        "id": 7625,
        "overs": "2.3",
        "runs": 19,
        "economy": "7.6",
        "name": "Adam Milne",
        "nickName": "Milne"
      }, {
        "id": 10100,
        "overs": "4",
        "wickets": 1,
        "runs": 31,
        "economy": "7.8",
        "name": "Mitchell Santner",
        "nickName": "Santner"
      }, {
        "id": 242,
        "overs": "4",
        "wickets": 3,
        "runs": 20,
        "economy": "5",
        "name": "Dwayne Bravo",
        "nickName": "DJ Bravo"
      }, {
        "id": 11195,
        "overs": "1",
        "runs": 11,
        "economy": "11",
        "name": "Shivam Dube",
        "nickName": "Shivam Dube"
      }, {
        "id": 587,
        "overs": "4",
        "runs": 25,
        "economy": "6.2",
        "name": "Ravindra Jadeja",
        "nickName": "Ravindra Jadeja",
        "isCaptain": true
      }],
      "fow": [{
        "fow": [{
          "batsmanId": 10917,
          "batsmanName": "Venkatesh Iyer",
          "overNbr": 6.2,
          "runs": 43,
          "ballNbr": 62
        }, {
          "batsmanId": 9204,
          "batsmanName": "Nitish Rana",
          "overNbr": 9.6,
          "runs": 76,
          "ballNbr": 96
        }, {
          "batsmanId": 1447,
          "batsmanName": "Ajinkya Rahane",
          "overNbr": 11.4,
          "runs": 87,
          "ballNbr": 114
        }, {
          "batsmanId": 7990,
          "batsmanName": "Sam Billings",
          "overNbr": 17.3,
          "runs": 123,
          "ballNbr": 173
        }]
      }],
      "extras": {
        "byes": 4,
        "total": 4
      },
      "pp": [{
        "powerPlay": [{
          "id": 42,
          "ovrFrom": 0.1,
          "ovrTo": 6.0,
          "ppType": "mandatory",
          "run": 43
        }]
      }],
      "score": 133,
      "wickets": 4,
      "overs": 18.3,
      "runRate": 7.19,
      "batTeamName": "Kolkata Knight Riders",
      "batTeamSName": "KKR",
      "ballNbr": 111,
      "rpb": 0.73
    }],
    "isMatchComplete": true,
    "appIndex": {
      "seoTitle": "Cricket scorecard - CSK vs KKR 1st Match,Indian Premier League 2022 | Cricbuzz.com",
      "webURL": "http://www.cricbuzz.com/live-cricket-scorecard/45886/csk-vs-kkr-1st-match-indian-premier-league-2022"
    },
    "status": "Kolkata Knight Riders won by 6 wkts",
    "responseLastUpdated": "1648837358"
  };
  proceedNext(matchScore)
  function proceedNext(matchScore){
    console.log('matchScore:'+matchScore)
    const matchId = '45886'
    const match = matchScore.appIndex.seoTitle.split(',')[0].split('-')[1].split(' ') 
    const matchNm = matchId+'_'+match[1]+match[2]+match[3]
    console.log(matchNm)

    let playersScore = new Map();

    Object.entries(matchScore.scorecard).forEach(item => {
      console.log('inside', item.length)
      
      if(item.batsman !== null){
        Object.entries(item[1].batsman).forEach(batsman => {
          playersScore.set(batsman[1].name,[getValidScore(batsman[1].runs),getValidScore(batsman[1].sixes),getValidScore(batsman[1].fours)])
      })
      }else{
        console.log(item)
      }
    })

    // console.log(playersScore)
    addFieldsToDocInDB(matchNm, '1Total')
    playersScore.forEach((values,keys)=>{
      writeMatchScoreToDB(matchNm, keys, values)
    })

  }
  
  function getValidScore(value) {
    return (value == undefined ? '0' : value);
  }
  
  function writeMatchScoreToDB(match,playerName,values){
    const docRef = doc(db,'Owners','Bala')
    setDoc(docRef,{
      [match] : { 
         [playerName]: {
          runs : values[0],
          sixes : values[1],
          fours : values[2]
        }
      }
      },{merge:true}
      )
  }

  function addFieldsToDocInDB(fieldName, fieldValue){
    const docRef = doc(db,'Owners','Bala')
    updateDoc(docRef, {
        [fieldName] :{
          [fieldValue] : '0'
        }
      }).catch(err=>{
          console.log('error: '+err.message)
      })
    }