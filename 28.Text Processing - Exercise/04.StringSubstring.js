function StringSubstring(w, string) {

	const arr = string.split(' ');
	const word = w.toLowerCase();

	for (const el of arr) {
		let curWord = el.toLowerCase();
		if (curWord === word) {
			console.log(word);
			return;
		}
	}

	console.log(`${word} not found!`);

}

StringSubstring('javascript', 'JavaScript is the best programming language')

StringSubstring('python', 'JavaScript is the bestprogramming language')

