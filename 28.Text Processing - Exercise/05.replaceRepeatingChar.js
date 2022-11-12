function replaceRepeatingChar(string) {

	let buff = string[0];

	for (let i = 1; i < string.length; i++) {
		const char = string[i];
		if (char !== string[i - 1] && i < string.length) {
			buff += char;
		}
	}
	console.log(buff);
}

replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChar('qqqwerqwecccwd')

