console.log('HELLO');

const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Meat',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Anita',
		difficulty: 'hard',
		timing: 'More than an hour',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'Kadaka',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Ally',
		difficulty: 'medium',
		timing: '45minutes',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522428,
	},
];

const renderCard = () => {
	for (let i = 0; i < recipes.length; i++) {
		const recipeId = recipes[i].id;
		const recipeTitle = recipes[i].title;
		const recipeAuthor = recipes[i].author;
		const recipePicture = recipes[i].picture;
		const recipeTiming = recipes[i].timing;
		const recipeDifficulty = recipes[i].difficulty;
		const recipeSteps = recipes[i].steps;
		const recipeIngredients = recipes[i].ingredients;

		//Loop through the ingredients list
		var list = "";

		recipeSteps.forEach(addStep);
			function addStep(result) {
				list += "<li>" + result + "</li>";
			}

		//Loop through the ingredients list
         
		var list2 = "";

		recipeIngredients.forEach(addingredients);
			function addingredients(result) {
				list2 += "<li>" + result + "</li>";
			}

		const myHTML = `
			<div class="card" data-id="${recipeId}" data-steps="${list}"
			data-ingredients="${list2}" data-author="${recipeAuthor}">
				<h2>${recipeTitle}</h2>
				<img src="${recipePicture}" alt>
				<div class="details">
					<p class="time">${recipeTiming}</P> 
					<p class="difficulty">${recipeDifficulty}</p>
				</div>
				<button class="more_info">More info</button>
			</div>
		`;
		// put it in the DOM
	 container.insertAdjacentHTML('beforeend', myHTML);
	}
	const newButton = `
		<button class="newrecipe">Add a recipe</button>
	`;
	container.insertAdjacentHTML('afterend', newButton);
}

generateButton.addEventListener('click', renderCard);

//Grab the outermodal and the innermodal
const outerModal = document.querySelector('.outermodal');
const innerModal = document.querySelector('.innermodal');

//Open the modal
const openModal = () => {
	outerModal.classList.add('open');
}

//Create a fuction to handle the modal
const handleHtml = event => {
	event.preventDefault();
	//Create an event delegation for the button more info
	if(event.target.matches('.more_info')) {
		const detail = event.target.closest('.card');
		const id = Number(detail.dataset.id);
		const {author, steps, ingredients } = detail.dataset; 
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		const title = detail.querySelector('h2').textContent;
		const picture = detail.querySelector('img').src;
		const timing = detail.querySelector('.time').textContent;
		const difficulty = detail.querySelector('.difficulty').textContent;
		innerModal.innerHTML = `
		    <div class="article" data-id="${id}">
				<div class="header">
					<h2>${title} by ${author}</h2>
				</div>
				<img src="${picture}">
				<div class="difficult_time">
					<p>${timing}</p>
					<p>${difficulty}</p>
				</div>
				<div class="step_ingredient">
					<div>
						<h3>Steps:</h3>
						<ul>${steps}</ul>
					</div>
					<div>
						<h3>Ingredients:</h3>
						<ol>${ingredients}</ol>
					</div>
				</div>
			</div>
		`;
		openModal(recipe);

	}
}

window.addEventListener('click', handleHtml);

//Close the modal
const outsideClick = event => {
	const outside = !event.target.closest('.innermodal');
	if (outside) {
		outerModal.classList.remove('open');
	}
}

outerModal.addEventListener('click', outsideClick);

//Form modal

const formModal = event => {
	event.preventDefault();
	if (event.target.matches('.newrecipe')) {
		innerModal.innerHTML = `
		<form>
            <label for="recipename">The recipe name</label>
            <input type="text" id="recipename" name="recipename" class="input recipename">

            <label for="recipephoto"> A photo for the recipe (URL)</label>
            <input type="url" id="recipephoto" name="recipephoto" class=" input recipephoto">

            <label for="cookname"> The cook's name</label>
            <input type="text" id="cookname" name="cookname" class="input cookname">

            <label for="level"> A defficulty level</label>
            <select name="defficultylevel" id="level" class="select">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <label for="timing">The timing</label>
            <select name="time" id="timing" class="select">
                <option value="less than 15min">Less than 15minute</option>
                <option value="15min">15 minute</option>
                <option value="30min">30 minute</option>
                <option value="45min">45 minute</option>
                <option value="60min">60 minute</option>
                <option value="more than an hour">More than an hour</option>
            </select>

            <label for="ingredient1">Ingredients</label>
				<ul id="ingredientList">
					<li>
						<input
							type="text"
							id="ingredient1"
							name="ingredient1"
							value="Ingredient 1"
						/>
					</li>
				</ul>
            <button class="button button-ingredient">Add a new ingredients</button>

            <label for="step1">Steps</label>
				<ul id="stepList">
					<li>
						<input type="text" id="step1" name="step1" value="Step 1" />
					</li>
				</ul>
            
            <button class="button button_steps">Add a new steps</button>
            <button type="submit" class="button button_submit">Submit</button>
        </form>
		`;
		outerModal.classList.add('open');
	}
}

window.addEventListener('click', formModal);

//Event delegation with the add more ingredients button
const handleNewIngredients = event => {
	event.preventDefault();
	if (event.target.matches('.button-ingredient')) {
		const ingredientLists = event.target;
		const number = ingredientLists.children.length + 1;
		
		const myIngredients = `
		<li>
			<input
				type="text"
				id="ingredient${number}"
				name="ingredient${number}"
				value="Ingredient ${number}"
			/>
		</li>
    `;
	ingredients.insertAdjacentHTML("beforebegin", myIngredients);
	}
  }

window.addEventListener('click', handleNewIngredients);

//Event delegation for the add more steps button
const handleNewSteps = event => {
	if (event.target.matches('.button_steps')) {
	const stepLists = event.target;
    const number = stepLists.children.length + 1;
    const mySteps = `
    <li>
    <input type="text" id="step${number}" name="step${number}" value="Step ${number}" />
    </li>
    `
    stepLists.insertAdjacentHTML('beforebegin', mySteps);
}
}
window.addEventListener('click', handleNewSteps);

//submit button to get the new recipe and add event delegation to make it appear in the list of the recipe
const handleSubmitBtn = event => {
	event.preventDefault();
	if (event.target.matches('.button_submit')) {
		const form = event.target.closest('form');
		const newTitle = form.recipename.value;
		const newPicture = form.recipephoto.value;
		const newDifficulty = form.defficultylevel.value;
		const newTiming = form.time.value;
		const newHtml = `
		<div class="card">
			<h2>${newTitle}</h2>
			<img src="${newPicture}" alt>
			<div class="details">
				<p class="time">${newDifficulty}</P> 
				<p class="difficulty">${newTiming}</p>
			</div>
			<button class="more_info">More info</button>
		</div>
		`; 

		container.insertAdjacentHTML('beforeend', newHtml);
		form.reset();

		outerModal.classList.remove('open');
	}
}

window.addEventListener('click', handleSubmitBtn);


