let name = document.querySelector("#name");
let apiUrl = 'https://swapi.dev/api/planets/';
let temp;

function getInfo() {
    axios.get(apiUrl).then(function(response){
        temp = response;
        let a;
        name.innerHTML += "<h1 class='title'>"+"Planets"+"</h1>"
        for(let i=0; i<temp.data.results.length; i++){
            console.log([i+1]+" PLANET");
            console.log(temp.data.results[i]);
            name.innerHTML += "<h1 class='block_planet'>"+"<span class='name'>"+temp.data.results[i].name+"</span>"+
                "<br>Rotation period: "+"<a>"+temp.data.results[i].rotation_period+"</a>"+
                "<br>Diameter: "+"<a>"+temp.data.results[i].diameter+"</a>"+
                "<br>Climate: "+"<a>"+temp.data.results[i].climate+"</a>"+
                "<br>Gravity: "+"<a>"+temp.data.results[i].gravity+"</a>"+
                "<br>Terrain: "+"<a>"+temp.data.results[i].terrain+"</a>"+
                "<br>Surface water: "+"<a>"+temp.data.results[i].surface_water+"</a>"+
                "<br>Population: "+"<a>"+temp.data.results[i].population+"</a>"+"</h1>";
        }
    })
}


getInfo();


