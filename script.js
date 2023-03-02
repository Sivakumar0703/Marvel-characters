
// fetching data from marvel api

var url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f8b7f3be1da87fe350873705c6a19730&hash=0bcde198dddfb73187db42904e7c9411';

async function marvel() {

    try {

        let promise = fetch(url);
        let response = await promise;
        let promise2 = response.json();
        let object = await promise2;


        let itterate = object.data.results;

        cardDetails = '';  // where card details to be attached

        for (let i of itterate) {    // itterating through the array of objects 

            cardDetails += `     
                       <div class="col mb-3">
                       <div class="card h-100">
 
                     <div class="card-header bg-dark text-center">
                         <h1 class="heading">${i.name}</h1>
                     </div>
                     <div class="card-body text-center">
                         <img src=${i.thumbnail.path}/standard_fantastic.${i.thumbnail.extension} alt=image of ${i.name}>
                     </div>
                     <div class="card-footer">
                        <p class="text-muted">for ${i.name}'s comics and series </p>
                         <a class='btn btn-danger' href=${i.urls[2]?.url} target=_blank>Click Here</a>
                     </div>
 
                 </div>
                 </div>
     `}

        document.getElementsByClassName('row')[0].innerHTML = cardDetails; // sorted out the data from api and inserted the data into card through innerHTML

    } catch (error) {
        console.log(error);
    }
    
}
marvel();












