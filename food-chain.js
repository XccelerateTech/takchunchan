let openingVerse = {
    1: "I know an old lady who swallowed a fly.",
    2: "I know an old lady who swallowed a spider.It wriggled and jiggled and tickled inside her.",
    3: "I know an old lady who swallowed a bird.How absurd to swallow a bird!",
    4: "I know an old lady who swallowed a cat.Imagine that, to swallow a cat!",
    5: "I know an old lady who swallowed a dog.What a hog, to swallow a dog!",
    6: "I know an old lady who swallowed a goat.Just opened her throat and swallowed a goat!",
    7: "I know an old lady who swallowed a cow.I don't know how she swallowed a cow!",
    8: "I know an old lady who swallowed a horse.",
};

let endingVerse = `I don't know why she swallowed the fly. Perhaps she'll die.\n`

let targetAnimal = {
    1: "fly",
    2: "spider that wriggled and jiggled and tickled inside her", //stupid lyrics
    3: "bird",
    4: "cat",
    5: "dog",
    6: "goat",
    7: "cow",
    8: "horse",
}

let hunterAniaml = {
    1: "spider",
    2: "bird",
    3: "cat",
    4: "dog",
    5: "goat",
    6: "cow",
    7: "horse",
}


class Song {

    //method to generate middle part of the song//
    accumulativeVerse(verseNumber) {
        let accVerse = ""
        for (let i = verseNumber; i > 1; i--) {
            accVerse += `She swallowed the ${hunterAniaml[i - 1]} to catch the ${targetAnimal[i - 1]}.`
        }
        return accVerse
    }

    //singular verse generator//
    verse(verseNumber) {
        if (verseNumber <= 7) {
            var verse = openingVerse[verseNumber] + song.accumulativeVerse(verseNumber)
            verse = verse.replace(/\./g, '.\n'); //annoying formatting to pass the test
            verse = verse.replace(/\!/g, '!\n'); //annoying formatting to pass the test
            verse += endingVerse; //annoying formatting to pass the test
            return verse;

        //eventually she eat a horse and go to heaven
        } else if (verseNumber = 8){
            var dyingVerse = `I know an old lady who swallowed a horse.\nShe's dead, of course!\n` 
            return dyingVerse
        }
    }

    //plural verse generator//
    verses(startVerseNumber,EndVerseNumber){
        var multiVerse = ""
        for (let i = startVerseNumber; i <= EndVerseNumber; i++){
        multiVerse += song.verse(i); 
        multiVerse += `\n`; //annoying formatting to pass the test
        }
        console.log('can Sam try to sing this??')
        return multiVerse;
    }
}

let song = new Song();


module.exports = Song