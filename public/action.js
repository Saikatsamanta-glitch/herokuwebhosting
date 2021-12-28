var url = 'https://blynk.cloud/external/api/update?token=' + 'UJC2TluanZ-RIyvG4RBzYsHLfQUnAl2S' + '&';

const on = document.getElementById('on');
const off = document.getElementById('off');
const inside = document.getElementById('inside');

off.addEventListener('click', () => {
  console.log('Turning off sir');
  on.style = `color: white;`;
  off.style = `color: black;`;
  inside.style = ` 
        background: linear-gradient(
          to right, 
          #000000 0%, 
          #000000 50%, 
          #ffffff 50%, 
          #ffffff 100%
        ); `;
    fetchs(url + 'v0' + '=1');
});
on.addEventListener('click', () => {
  console.log('Turning on sir');
  on.style = `color: black;`;
  off.style = `color: white;`;
  inside.style = ` 
        background: linear-gradient(
          to right, 
          #ffffff 0%, 
          #ffffff 50%, 
          #000000 50%, 
          #000000 100%
        ); `
  fetchs(url + 'v0' + '=0');
});




// fetch(url+'v0'+'=0').then(response=>{
//     console.log(response.status);
// })


async function fetchs(u) {
  let respose = await fetch(u);
  console.log(respose.status);
  if (respose.status == 200) {
    console.log('working');
  }
}


console.log('starting');