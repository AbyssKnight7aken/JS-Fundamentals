function extractFile(string) {

	const arr = string.split('\\');
	const line = arr.pop();
	const result = line.split(`.`);
	const extension = result.pop();
	const file = result.join`.`;

	console.log(`File name: ${file}`);
	console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak.cs')