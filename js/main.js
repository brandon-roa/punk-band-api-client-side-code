const button = document.querySelector('button')
const input = document.querySelector('input')
const toggle = document.getElementsByClassName('headToggle')
button.addEventListener('click', toggleHeaders)
input.addEventListener('keypress', function(event){
    if (event.key === 'Enter')
    {
        event.preventDefault();
        toggleHeaders()
    }
})
function toggleHeaders(){
    if(toggle[0].style.display = "none"){
        for (let i = 0; i < toggle.length; i++) {
            toggle[i].style.display = "block"; 
        }
    }
    apiRequest();
}

async function apiRequest(){
    const bandName = document.querySelector('input').value
    try{
        const response = await fetch(`https://punk-band-api.herokuapp.com/api/${bandName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.name
        document.getElementById('years').innerText = `Years Active: \n`+data.yearsActive
        document.getElementById('releases').innerText = `Releases: \n `+data.releases
        const domImage = document.createElement("img");
        domImage.src = data.image
        document.getElementById('image').replaceChildren(domImage)
    }catch(error){
        console.log(error)
    }
}