

const { default : axios } = require("axios");
const busStop = "18141"

const api =`http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`

const config = {
  headers: {
    'AccountKey':'xHrBZD3HTbqeGcgRVnd/1A=='
  }

}

async function loadBusData(){

  console.log('start');
  await axios.get(api,config)
    .then((res) => {console.log(res.data)})
    .catch((err) => console.log(err));
  console.log('end');

};

//console.log('start');
//const res = axios.get(api,config);
//console.log(res.data);
//console.log('end');

loadBusData();