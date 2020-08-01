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
		const myHTML = `
			<div class="card" data-id="${recipeId}" data-steps="${recipeSteps}"
			data-ingredients="${recipeIngredients}" data-author="${recipeAuthor}">
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
					<h2>${title}</h2>
					<p>by ${author}</p>
				</div>
				<img src="${picture}">
				<div class="difficult_time">
					<p>${timing}</p>
					<p>${difficulty}</p>
				</div>
				<div class="step_ingredient">
					<div>
						<h3>Steps</h3>
						<p>${steps}</p>
					</div>
					<div>
						<h3>Ingredients</h3>
						<p>${ingredients}</p>
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
