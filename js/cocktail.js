const loadDrink = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    //clear input field
    inputField.value = '';
    if (inputText == '') {
        alert('please give a name')
    }
    else {
        //load data
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayDrink(data.drinks))
    }
}
const displayDrink = drinks => {
    const container = document.getElementById('container');
    //clear previous results and detail area
    container.textContent = '';
    document.getElementById('show-detail').textContent = '';
    if (drinks === null) {
        const showDetail = document.getElementById('show-detail');
        const h1 = document.createElement('h1');
        h1.innerText = 'Your search does not get match with anything.....';
        showDetail.appendChild(h1)
    }
    else {
        drinks.forEach(drink => {
            // console.log(drink)
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                    <div onclick="loadDetail('${drink.idDrink}')" class="card">
                        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${drink.strDrink}</h5>
                            <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
                        </div>
                    </div>
            `;
            container.appendChild(div)
        })
    }
}

const loadDetail = drinkId => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data.drinks[0]))
}
const showDetail = drink => {
    const container = document.getElementById('show-detail');
    container.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
         <img height="500px" width="450px" src="${drink.strDrinkThumb}">
         <h4>${drink.strDrink}</h4>
         <h6>${drink.strCategory}</h6>
         <p>${drink.strInstructionsIT}</p>
    `;
    container.appendChild(div)
}