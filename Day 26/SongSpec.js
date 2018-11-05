const Song = require('./Song')

let song1 = new Song ('The Ringer', 'Kamikaze', 'Eminem')
let song2 = new Song ('Lucky You', 'Kamikaze', 'Eminem')
let song3 = new Song ('Humble', 'DAMN.', 'Lamar')
let copiedSong = new Song ('Humble', 'DAMN.', 'Lamar')

describe('Song Test',function(){

    beforeEach(function() {
        this.song = new Song();
    });

    afterEach(function() {
        this.song = new Song();
    });

    it('Test song name',function(){
        expect(song1.name).toEqual('The Ringer');
    });

    it('Test song name',function(){
        expect(song2.album).toEqual('Kamikaze');
    });

    it('Test song name',function(){
        expect(song3.author).toEqual('Lamar');
    });

    it('Test return statement',function(){
        expect(song3.getDescription()).toEqual('The name of this song is Humble and it is from the album DAMN.. It is written by Lamar');
    });

    it('Test same album function',function(){
        expect(song2.isInSameAlbum(song1)).toBeTruthy();
    });

    it('Test same album function failure case',function(){
        expect(song2.isInSameAlbum(song3)).toBeFalsy();
    });

    it('Matcher',function(){
        expect(song2).toBeInTheSameAlbumAs(song1);
    });

    it('tobe or toequal that is the question',function(){
        expect(copiedSong).toEqual(song3)
    });

    it('tobe or toequal that is the question 2',function(){
        expect(copiedSong).not.toBe(song3)
    });
});