var options = {
	solution: [[null, null, null, null, null, null, null, 'Q',null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', null, null, null, 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, 'Q', null, null, null, 'Q', null, 'Q', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', null, 'Q', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'Q', null, 'Q', null, null, null, 'Q', null, 'Q', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'Q', null, 'Q', null, null, null, 'Q', null, 'Q', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'Q', null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'Q', null, 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'O', null, 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', null, null, null, null, null, null, null, null, null, null],
	['Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', 'Q', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	],


	index:
		[[null, null, null, null, null, null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, 2, null, null, null, null, null, 3, null, null, null, 4, null, 5, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
		[8, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]],

	questions_across: ["2. GDSC's event Bappa ka ______",
		"4. A mutant rat",
		"6. Game developed by Namco for arcades",
		"7. A puzzle video game",
		"8. I wait for my Kong to land on my top",],

	questions_down: [
		"1. Players can either be 'Crewmate' or 'Impostor' ",
		"3. Kill a duck with an artificial gun ",
		"4. A blue Anthropomorphic hedgehog ",
		"5. I protect my princess fair and dear",
		"6. Who is that pokemon?",]

};


cwp_nmsp.activateCWP(document.getElementById("myPuzzle"), false, options);