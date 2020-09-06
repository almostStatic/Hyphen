/**
 * This function will add hyphens to a string every X characters; view [the article type thingy](https://repl.it/talk/share/Insert-Hyphens-in-JavaScript-String/50244) for additional information.
 * @param {String} str The string to hyphenify
 * @param {?Number} interval The interval of which to add hyphens to the string 
 * @param {?object} options Options to be applied.
 * @returns {string} String<hyphenified> Hyphenified String
 */

function hyphen(str, interval, options) {
	if (!options) {
		options = {
			/**
			 * Whether or not to reomve whitespaces from the string 
			 */
			removeWhiteSpaces: true,
			/**
			 * Whether or not to inc new line
			 */
			includeNewLine: false
		};
	};
	if (typeof options != 'object') {
		throw new TypeError("options must be of type object");
	};
	if (!str) return null;
	if (!interval) {
		interval = 1;
	};
	interval = Number(interval);
	str = str.toString();
	if (options.removeWhiteSpaces) {
		//remove whitespaces: 
		str = str.replace(/ +/g, '');
	};
	let matches;
	if (options.includeNewLine) {
		matches = str.match(new RegExp('.{1,' + interval + '}', 'gs')); 
	} else {
		matches = str.match(new RegExp('.{1,' + interval + '}', 'g')); 
	};
	if (!matches) return null;
	return matches.join('-');
};

console.log(hyphen('5017456334553847', 4));

/**
 * Returns the sum of all the numbers passed into this function
 * @param {number} args Numbers to be added together
 * @returns {number} Total sum of ...args
 */
function sum(...args) {
	return args.reduce((a, b) => a + b, 0);
};

sum(600, 200, 350, 450, 400, 1_000, 700, 480, 2_800, 600, 475, 636, 800, 120, 4_000)