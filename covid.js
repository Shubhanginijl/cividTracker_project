let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchGitUser(searchText);
    }
})
async function searchGitUser(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active,Date} = JSON[JSON.length-1];
templete.innerHTML =`
<main>
    <div>
       <p class="country" id="country">Country:${Country} </p>
       <p  class="positive"id="one">Positive: ${Confirmed}</p>
       <p class="userName" id="one">Deaths: ${Deaths}</p>
       <p class="userName" id="two">Active: ${Active}</p>
       <p class="userName" id="two">Date: ${Date}</p>
    </div>
</main>`
}