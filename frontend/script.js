const loadEvent = _ => {

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

   /*  for (const input of inputList) {        //átalakítjuk map()-pé
        input.addEventListener("input", function (event) {
            console.log(event.target.value);               // értékét elérni így lehet
        })
    } */
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    Array.from(inputList).map(function(input) {
        input.addEventListener("input", function (event) {
            console.log(event.target.value);
        });
    });

    form.querySelector("select").addEventListener("input", function (e) {  //kiírja a select valueban megadott adat valueját. kiválasztott option value-ja lesz ez.
        console.log(e.target.value);        
    })

    form.addEventListener("submit", function (event) {  //ne akarjon megnyitni egy új lapot amikor submitre kattintunk. onsubmit csak formban van ez. nem csak kattintásra történik.
        event.preventDefault();
        console.log(event.target);
    })

}

window.addEventListener("load", loadEvent)