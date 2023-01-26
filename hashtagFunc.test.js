import {generateHashtag} from './hashtagFunc.js';

describe ('test of hashtag generating function_positive result', () => {
    it('base: adds # symbol, deletes spaces, all words with first letter capitalized', () => {
        expect(generateHashtag("Do we have A hashtag")).toBe('#DoWeHaveAHashtag');
    }),
    it('base + deletes all extra spaces', () => {
        expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe('#CodeWars');
    })
});

describe ('test of hashtag generating function_negative result', () => {
    it('empty string makes a false result', () => {
        expect(generateHashtag("")).toBe(false);
    }),
    it('string with more than 140 letters makes a false result', () => {
        expect(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")).toBe(false);
    })
});

describe ('test of hashtag generating function_invalid data', () => {
    it('invalid entering data makes an error', () => {
        expect(generateHashtag(4)).toBe('error: string required');
        expect(generateHashtag([1,1,1])).toBe('error: string required');
        expect(generateHashtag(true)).toBe('error: string required');
    })
});