// Model

skill = [
    "Basic programming (C, C++, Java, and Python)",
    "Data structures (C and C++)",
    "Object oriented programming (Java and PHP)",
    "Database system and management (MySQL and PostreSQL)",
    "Bash shell scripting",
    "Version control system (Git) and collaborate on GitHub",
    "Web programming (HTML, CSS, JavaScript, and PHP)",
    "Framework (Laravel) and API with Laravel",
];

character = [
    "Hard worker",
    "Eager to learn and grow",
    "Detail-oriented",
    "Highly committed",
    "Work well in group",
    "Creative",
    "Communicate well"
];

award = [
    "1.", "2019", "as 1st Winner", "in Del 5th Mathematics and Science Competition (Maths Olympiad)",
    "This competition is held by Institut Teknologi Del. All participants represent high schools near Toba Lake. There are four olympiads in the competition: Maths, Physics, Chemistry, and Biology."
];

experience = [
    "1.", "2022 – Now", "as Expert Staff", "in Schematics National Logic Competition",
    "I work with a team consisting of 12 members. Each person separately creates four new questions every week. Then, we will gather to discuss the eligible questions for the competition every Sunday night.",
    "2.", "2022 – Now", "as Event Staff", "in Welcome Party Keluarga Mahasiswa Katolik ITS",
    "I work with a team consisting of 6 members. We exchange ideas about the events we are holding and arrange all the schedules with rundowns and guidelines. We also cooperate with other divisions."
];

education = [
    "1.", "2022 – Now", "at Institut Teknologi Sepuluh Nopember", "in Informatics",
    "I got many self-development activities such as being an expert staff in Schematics event. In academics, I mostly learn about computational systems and structured programming.",
    "2.", "2017 – 2020", "at SMA Unggul Del", "in PMIA",
    "I lived in a strict boarding school where I was developed independently of every aspect with an emphasis on spirituality. Talking about academics, I mostly learned about Mathematics and Science. I was also one of the Maths Olympiad Club member."
];
    
// Controller

for(let i=0; i<skill.length; i++){
    let textNode = document.createTextNode(skill[i]);
    let element = document.createElement("li");
    element.appendChild(textNode);
    document.querySelector("#skill ol").appendChild(element);
}

for(let i=0; i<character.length; i++){
    let textNode = document.createTextNode(character[i]);
    let element = document.createElement("li");

    element.appendChild(textNode);
    document.querySelector("#character ul").appendChild(element);
}

let i = 0;
while(i<award.length){
    if(i%5 == 4){
        let element1 = document.createElement("tr");

        let textNode = document.createTextNode(award[i++]);
        let element2 = document.createElement("td");
        element2.appendChild(textNode);
        element2.setAttribute("colspan", "4");
        element2.setAttribute("class", "desc");
        element1.appendChild(element2);

        document.querySelector("#award table").appendChild(element1);
    }
    else{
        let element1 = document.createElement("tr");
        
        while(i%5 !=4){
            let textNode = document.createTextNode(award[i++]);
            let element2 = document.createElement("td");
            element2.appendChild(textNode);
            element1.appendChild(element2);
        }

        document.querySelector("#award table").appendChild(element1);
    }    
}

i = 0;
while(i<experience.length){
    if(i%5 == 4){
        let element1 = document.createElement("tr");

        let textNode = document.createTextNode(experience[i++]);
        let element2 = document.createElement("td");
        element2.appendChild(textNode);
        element2.setAttribute("colspan", "4");
        element2.setAttribute("class", "desc");
        element1.appendChild(element2);

        document.querySelector("#experience table").appendChild(element1);
    }
    else{
        let element1 = document.createElement("tr");
        
        while(i%5 !=4){
            let textNode = document.createTextNode(experience[i++]);
            let element2 = document.createElement("td");
            element2.appendChild(textNode);
            element1.appendChild(element2);
        }

        document.querySelector("#experience table").appendChild(element1);
    }    
}

i = 0;
while(i<education.length){
    if(i%5 == 4){
        let element1 = document.createElement("tr");

        let textNode = document.createTextNode(education[i++]);
        let element2 = document.createElement("td");
        element2.appendChild(textNode);
        element2.setAttribute("colspan", "4");
        element2.setAttribute("class", "desc");
        element1.appendChild(element2);

        document.querySelector("#education table").appendChild(element1);
    }
    else{
        let element1 = document.createElement("tr");
        
        while(i%5 !=4){
            let textNode = document.createTextNode(education[i++]);
            let element2 = document.createElement("td");
            element2.appendChild(textNode);
            element1.appendChild(element2);
        }

        document.querySelector("#education table").appendChild(element1);
    }    
}