('💩 A bad way 💩');
function badTotalHitPoints(a, b, c, d) {
	return a + b + c + d;
}

('✅ A good way ✅');

function goodTotalHitPoints(...hits) {
	return hits.reduce((a, b) => a + b);
}

console.log(goodTotalHitPoints(1, 2, 3, 4, 5, 6, 7));
