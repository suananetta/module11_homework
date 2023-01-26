"use strict";

/* Create a Hashtag Generator:
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
*/

    export function generateHashtag(str) {
        
        if (typeof(str) != 'string') {   
            return 'error: string required';
        } else {

            let arr = [];

            for (let value of str.split(' ')) {
                if (Boolean(value) == true) arr.push(value);
            }

            str = arr.join('');

            if (str.length >= 140 || str.length == 0) {
                return false;
            } else {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
                };  
                arr.unshift('#');
            }

            return arr.join('');
        }
    }
    
    // console.log(generateHashtag("code" + " ".repeat(140) + "wars")); //#CodeWars
    // console.log(generateHashtag("Do we have A hashtag")); //#DoWeHaveAHashtag 
    // console.log(generateHashtag("")); //false 
    // console.log(generateHashtag(4)); //false 
    // console.log(generateHashtag("Codewars is nice")); //#CodewarsIsNice
    // console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); //false 




