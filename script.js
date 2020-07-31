console.log('HELLO');

const container = document.querySelector('.container');
const outerModal = document.querySelector('.outermodal');
const innerModal = document.querySelector('.innermodal');

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
			<div class="card_body">
				<div class="card" data-id="${result.id}">
					<h2>${result.title}</h2>
					<img src="${result.picture}" alt>
					<div class="details">
						<p>${result.timing}</P> 
						<p>${result.difficulty}</p>
					</div>
					<button class="buton_more_info">More info</button>
				</div>
			</div>
		`;
		// put it in the DOM
	 container.innerHTML += myHTML;
	})
};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

// const handleHtml = event => {
// 	event.preventDefault();
// 	if(event.target.matches('.buton_more_info')) {
// 		const detail = event.target.closest('.card');
// 		const id = numbers(detail.dataset.id);
// 		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
// 		openModal(recipe);
// 	}
// }

// window.addEventListener('click', handleHtml);

// 	const myModal = `
		
// // 	`;
// // 	document.innerHTML += myModal;
// // 	console.log(myModal);

// 

// const openModal = e => {
	
// 		outerModal.classList.add('open');
// }

// const outsideClick = event => {
// 	const outside = !event.target.closest('.innermodal');
// 	if (outside) {
// 		outerModal.classList.remove('open');
// 	}
// }



	// 	const { title, picture, author, time, difficulty} = detail;

	// 	innerModal.innerHTML = `
	// 		<div class="modal_body">
	// 			<div class="header">
	// 				<h2>${title}</h2>
	// 				<p>by ${author}</p>
	// 			</div>
	// 			<img src="${picture}">
	// 			<div class="difficult_time">
	// 				<p>${difficulty}</p>
	// 				<p>${time}</p>
	// 			</div>
	// 			<div class="step_ingredient">
	// 				<div>
	// 					<h3>Steps</h3>
	// 				</div>
	// 				<div>
	// 					<h3>Ingredients</h3>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	`;
	// 	console.log(innerHTML);
	// 	outerModal.classList.add('open');
	// }




// outerModal.addEventListener('click', outsideClick);
