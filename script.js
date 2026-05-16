const data = [
    {
        heading: "Web Design",
        text: "Modern responsive websites with clean UI design."
    },

    {
        heading: "JavaScript",
        text: "Dynamic and interactive frontend projects."
    },

    {
        heading: "UI/UX",
        text: "Professional layouts with user-friendly experience."
    },

    {
        heading: "Frontend",
        text: "HTML CSS Bootstrap and React based interfaces."
    }
];

const container = document.getElementById("container");

for(let i = 0; i < data.length; i++){

    
    const card = document.createElement("div");
    card.classList.add("card");

    
    const heading = document.createElement("h2");
    heading.innerText = data[i].heading;

    
    const para = document.createElement("p");
    para.innerText = data[i].text;


    const btn = document.createElement("button");
    btn.innerText = "Learn More";

    btn.addEventListener("click", function(){

        alert(data[i].heading);

    });

    card.appendChild(heading);
    card.appendChild(para);
    card.appendChild(btn);

    container.appendChild(card);
}