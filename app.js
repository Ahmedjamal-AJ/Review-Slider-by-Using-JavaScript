const testimonals =  [
    {
        name: " JEFF BEZOS",
        job: "CEO, AMAZON.COM",
        Image: "Assets/Jeff-bezos.webp",
        testimonal: 
        "Amazon has a rating of 3.98 stars from 10,326 reviews, indicating that most customers are generally satisfied with their purchases. Reviewers satisfied with Amazon most frequently mention customer service, free shipping, and prime member. Amazon ranks 4th among Marketplace sites.",

    },

    {
        name: "JACK MA",
        job: "CEO,  ALIBABA.COM",
        Image:"Assets/jack-ma.webp",
        testimonal: 
        " Overview Alibaba has a rating of 4.57 stars from 13,679 reviews, indicating that most customers are generally satisfied with their purchases. Reviewers satisfied with Alibaba most frequently mention good quality, trade assurance, and customer service. Alibaba ranks 1st among Sourcing sites.",
    },

    {
        name: "JAMIE LANNONE",
        job: "CEO, EBAY.COM",
        Image: "Assets/jamie.jpg",
        testimonal: 
        "eBay reviews are ratings and comments left by buyers who purchased the product on or off eBay1. eBay has a consumer rating of 3.14 stars from 4,578 reviews, indicating that most customers are generally satisfied with their purchases2. eBay offers various purchasing options, free shipping, and a money back guarantee.",
    },

];

let i = 0;
let j = testimonals.length;

let testimonalContainer = document.getElementById("testimonal-Container");
let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("prev");


nextbtn.addEventListener("click", () => {
    i = (j+i+1) %j;
    displaytestimonal();
});

prevbtn.addEventListener("click", () => {
    i = (j+i-1) %j;
    displaytestimonal();
});


let displaytestimonal = () => {
    testimonalContainer.innerHTML = `
    <p>${testimonals[i].testimonal}</p>
    <img src=${testimonals[i].Image}>
    <h3>${testimonals[i].name}</h3>
    <h6>${testimonals[i].job}</h6>
    `;

};
window.onload = displaytestimonal;