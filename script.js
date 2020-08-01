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
	// check the recipes collection
	recipes.forEach(result => {
		// generate the HTML
		const myHTML = `
			<div class="card" data-id="${result.id}">
				<h2>${result.title}</h2>
				<img src="${result.picture}" alt>
				<div class="details">
					<p>${result.timing}</P> 
					<p>${result.difficulty}</p>
				</div>
				<button class="more_info">More info</button>
			</div>
		`;
		// put it in the DOM
	 container.insertAdjacentHTML('beforeend', myHTML);
	})
};

generateButton.addEventListener('click', renderCard);

//Grab the outermodal and the innermodal
const outerModal = document.querySelector('.outermodal');
const innerModal = document.querySelector('.innermodal');

//Create a fuction to handle the modal
const openModal = () => {
	recipes.forEach(value => {
		innerModal.innerHTML = `
		    <div class="article" data-id="${value.id}">
				<div class="header">
					<h2>${value.title}</h2>
					<p>by ${value.author}</p>
				</div>
				<img src="${value.picture}">
				<div class="difficult_time">
					<p>${value.timing}</p>
					<p>${value.difficulty}</p>
				</div>
				<div class="step_ingredient">
					<div>
						<h3>Steps</h3>
						<ul>
							${value.steps}
						</ul>

					</div>
					<div>
						<h3>Ingredients</h3>
						<ol>
							${value.ingredients}
						</ol>
					</div>
				</div>
			</div>
		`;
		outerModal.classList.add('open');
	});
}

const handleHtml = event => {
	event.preventDefault();
	if(event.target.matches('.more_info')) {
		const detail = event.target.closest('.card');
		const id = Number(detail.dataset.id);
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		openModal(recipe);

	}
}

window.addEventListener('click', handleHtml);
//Create an event delegation for the button more info
// const handleHtml = event => {
// 	console.log(event);
// 	event.preventDefault();
// 	if(event.target.matches('.buton_more_info')) {
// 		const detail = event.target.closest('.card');
// 		const id = Number(detail.dataset.id);
// 		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
// 		openModal(recipe);
// 	}
// }

//Add event listener for that button




// window.addEventListener('click', handleHtml);

// 	const myModal = `
		
// // 	`;
// // 	document.innerHTML += myModal;
// // 	console.log(myModal);

// 

// const openModal = e => {
	
// 		outerModal.classList.add('open');
// }

const outsideClick = event => {
	const outside = !event.target.closest('.innermodal');
	if (outside) {
		outerModal.classList.remove('open');
	}
}

outerModal.addEventListener('click', outsideClick);
