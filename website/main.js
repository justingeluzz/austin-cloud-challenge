const counter = document.querySelector(".counter-test");
async function updateCounter(){
    let response = await fetch("https://cvplvyolxx5qgpk72gma6dxslu0rohtr.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;


    
}

updateCounter();
