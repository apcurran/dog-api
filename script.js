const dogAPI = (() => {
    const imgEl = document.querySelector("img");
    const breedSelectionEl = document.getElementById("breed-select");
    const searchBtn = document.querySelector(".search-btn");

    
    function getUserSelection() {
        const breedSelection = breedSelectionEl.options[breedSelectionEl.selectedIndex].value;
        return breedSelection;
    }
   
    async function getDogs() {
        const userSelection = getUserSelection();
        console.log(userSelection);

        const response = await fetch(`https://dog.ceo/api/breed/${userSelection}/images/random`);
        const dogData = await response.json();
        
        imgEl.src = dogData.message;
    }

    searchBtn.addEventListener("click", getDogs);

})();