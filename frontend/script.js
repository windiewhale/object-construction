const loadEvent = async _ => {

    const rootElement = document.getElementById("root");

    const content = `
    <div id="pic">
    </div>
    <form action="fill">
        <input type="text" placeholder="your name" name="name" id="name"><br>
        <input type="text" placeholder="cat or dog?" name="animal" id="animal"><br>
        <input type="text" placeholder="your pet's name" name="pet" id="pet"><br>
        <select name="choose" id="choose">
            <option value="both">both</option>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>
        </select>
        <input type="submit" id="btn" value="Submit">
    </form>
    `;

    rootElement.insertAdjacentHTML("beforeend", content);

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input");

   /*  for (const input of inputList) {        
        input.addEventListener("input", function (event) {
            console.log(event.target.value);              
        })
    } */
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    Array.from(inputList).map(function(input) {
        input.addEventListener("input", function (event) {
            console.log(event.target.value);
        });
    });

    form.querySelector("select").addEventListener("input", function (e) {  
        console.log(e.target.value);        
    })

    form.addEventListener("submit", function (event) { 
        event.preventDefault();
        console.log(event.target);
    })

    const apiKey = "pCcUL8XmwhHYkGRjcsNKCOmxe7FISccTWBl2Ie9h"
    const requestedDate = "2022-02-22"
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`) 


    
    const apodJson = await apod.json()
    /* console.log(apodJson.explanation); */

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
        function (apodResponse) {
            console.log(apodResponse);
            apodResponse.json().then(
                function (apodResponseJson) {
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )
}

window.addEventListener("load", loadEvent)