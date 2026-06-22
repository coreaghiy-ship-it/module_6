const word = 'Довод';
const normalizedWord = word.toLowerCase();
const reversedWord = normalizedWord.split('').reverse().join('');

if (normalizedWord === reversedWord) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
}
