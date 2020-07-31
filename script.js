console.log('HELLO');

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
		id: 1596168522409,
	},
];

const container = document.querySelector('.container');

const renderCard = () => {
	// check the recipes collection
	recipes.forEach(result => {
		// generate the HTML
		const myHTML = `
			<div class="card_body">
				<div class="card">
					<h2>${result.title}</h2>
					<img src="${result.picture}" alt>
					<p>${result.author}</p>
					<p>Timing: ${result.timing} Difficulty: ${result.difficulty}</p>
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
