function ModernTimesOfHashTag(string) {

	let arr = string.split(' ');

	for (let word of arr) {
		if (word.startsWith('#') === true && word.length > 1) {
			let isValid = true;

			for (let i = 1; i < word.length; i++) {
				const char = word[i].toUpperCase();
				let isCapLetter = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
				if (!isCapLetter) {
					isValid = false;
					break;
				}
			}
			if (isValid) { console.log(word.slice(1)); }
		}
	}
}

ModernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
ModernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
ModernTimesOfHashTag('#social@Media')
ModernTimesOfHashTag('#a')