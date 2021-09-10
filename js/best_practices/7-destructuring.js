// 7. Object destructuring

// Objects
('=======================EX1=======================');

const pikachu = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 60, defense: 45 };

('💩 A bad way 💩');

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45 });

('✅ A good way ✅');

const lvl10 = { ...pikachu, ...stats };
const lvl11 = { ...pikachu, hp: 45 };

('=======================EX2=======================');
('💩 A bad way 💩');

function feed(animal) {
	return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

('✅ A good way ✅');

function feed({ name, meal, diet }) {
	return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

function feed(animal) {
	const { name, meal, diet } = animal;
	return `Feed ${name}, ${meal} kilos of ${diet}`;
}

('=======================ARR=======================');
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

('💩 A bad way 💩');

pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

('✅ A good way ✅');

// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle'];
