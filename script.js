document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value 
    let finalURL =`https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
         .then(function(response){
             return response.json()
         })
        .then(function(data){
            console.log(data[0])
            console.log(data[0].population)
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])

            let flag = document.getElementById('flag')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('cap')
            let continente = document.getElementById('cont')
            let popu = document.getElementById('pop')

            
            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            continente.innerHTML  = data[0].continents[0]
            popu.innerHTML = data[0].population
            flag.src = data[0].flags.svg
            
        })
}