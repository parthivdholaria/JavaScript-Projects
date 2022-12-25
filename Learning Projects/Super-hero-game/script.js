
const token = '10223569763528853';

const base_url = `https://superheroapi.com/api.php/${token}`;

const getSuperHero= (id) => {

  fetch(`${base_url}/${id}`)
    .then(response => response.json())
    .then(json => {
      const herostats = json.powerstats;
      console.log(herostats);

      const stat = getHTMLData(json);
    
      
      heroImgDiv.innerHTML = `<img height=200 width=200 src='${json.image.url}'/> ${stat}`;

    });
  
  
}


const getHTMLData = (characters) => {
  const statobj = Object.keys(characters.powerstats).map(stat => {
    return `<p>${stat}: ${characters.powerstats[stat]}</p>`
  })

  // console.log(statobj.join(''));
  return statobj.join('');
}


const searchSuperHero = (name) => {
  // console.log(searchInput.value);
  fetch(`${base_url}/search/${name}`)
    .then(response => response.json())
    .then(json => {

      const hero= json.results[0];


      const stat = getHTMLData(hero);
      
      
      heroImgDiv.innerHTML= `<img height=200 width=200 src='${hero.image.url}'/> ${stat}`;
    });

  
}


superherobtn = document.getElementById('herobtn');
searchherobtn = document.getElementById('searchbtn');
searchInput = document.getElementById('searchInput');
heroImgDiv = document.getElementById('heroImg');

superherobtn.onclick = () => {
  getSuperHero(1+Math.floor(Math.random()*731));
}


searchherobtn.onclick = () => {
  searchSuperHero(searchInput.value);
}




