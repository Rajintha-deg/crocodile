const crocodile_facts = [
    {
        "fact": "Crocodiles are reptiles that belong to the family Crocodylidae."
    },
    {
        "fact": "They are found in tropical and subtropical regions around the world."
    },
    {
        "fact": "Crocodiles can live for over 70 years in the wild."
    },
    {
        "fact": "They are carnivorous and primarily feed on fish, birds, and mammals."
    },
    {
        "fact": "Crocodiles have powerful jaws that can exert tremendous pressure."
    },
    {
        "fact": "They are excellent swimmers and can hold their breath underwater for over an hour."
    },
    {
        "fact": "Crocodiles are ectothermic, meaning they rely on external sources to regulate their body temperature."
    },
    {
        "fact": "They have a unique ability to see in the dark due to a reflective layer behind their retinas."
    },
    {
        "fact": "Crocodiles communicate through a variety of vocalizations, including hissing and growling."
    },
    {
        "fact": "Some species of crocodiles can reach lengths of over 20 feet (6 meters)."
    }
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * crocodile_facts.length);
    const fact = crocodile_facts[randomIndex].fact;
    const factDisplay = document.getElementById('factDisplay');
    
    factDisplay.style.opacity = 0; // Fade out
    setTimeout(() => {
        factDisplay.textContent = fact;
        factDisplay.style.opacity = 1; // Fade in
    }, 500);
});
