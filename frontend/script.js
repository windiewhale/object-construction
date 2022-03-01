// 1. get the data -- we are going to genarate this time, not downloading

function Month(name, id, nth, days){
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month("january", "jan", 1, 31),
    new Month("february", "feb", 2, 28),
    new Month("march", "mar", 3, 31),
    new Month("april", "apr", 4, 30),
    new Month("may", "may", 5, 31),
    new Month("june", "jun", 6, 30),
    new Month("july", "jul", 7, 31),
    new Month("august", "aug", 8, 31),
    new Month("september", "sep", 9, 30),
    new Month("october", "oct", 10, 31),
    new Month("november", "nov", 11, 30),
    new Month("december", "dec", 12, 31),
]

/* console.log(months); */

// 2. prepare data -- (quite important, codewars tasks are like this. business logic kinda)

// 3. components (building blocks) = HTML elements that we would like to add the document later
//this time these are the sections and what they contain

const monthSection = (id, h1, days) => { // need to give 3 parameters, as the html requires
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="cards">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name</button> 
    </div>
    `;                                  // add button element for clickevent
}

const dayCards = (month, callDayCard) => { 
    let toReturn = "";
    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i) // ! must be += to have all the days listed
    }
    
    return toReturn
}

/* console.log(dayCards(months[0], dayCard));  */

// 4. render = add the components to the document

/*  const loadEvent = () => {
    let rootElement = document.getElementById("root");

    let stringHTML = "";
    for (const month of months) {
        stringHTML += monthSection(month.id, month.name, dayCards(month, dayCard))
    }

     rootElement.insertAdjacentHTML("beforeend", stringHTML)  
   
}  */

const loadEvent = _ => { // _ : some variable or param we do not wish to use
    
    let content = ""
    for (const month of months) { // months could move here to loadEvent function 
        content += monthSection( month.id, month.name, dayCards(month, dayCard) )
    }

    document.getElementById("root").insertAdjacentHTML("beforeend", content)

   /*  const cardList = document.querySelectorAll(".card")  // store the cards in this var */
    
    // click event / event handling

    /* function cardButtonClickEvent(event) {
        console.log(event.target.parentElement);
        event.target.parentElement.classList.toggle("clicked") // toggle: if its on takes off, in not puts on
    }

    for (const card of cardList) {
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)
    } */

    function clickEvent(event) {
        /* console.log(event.target); */
        console.log();(this.target)
        if(event.target.classList.contains("card-btn")){
            console.log("hello click");
            event.target.innerHTML = "This button was clicked"
        }
    }
    document.addEventListener("click", clickEvent)

}  // if we mannipulate the document it has to happen inside the loadEvent

window.addEventListener("load", loadEvent)  