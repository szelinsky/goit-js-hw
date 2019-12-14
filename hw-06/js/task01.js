import users from "./users.js"
export const task01 = () => {
	
	const getUserNames = users => {
		return users.map(user => {
			return user.name;
		});
	};
	//	const getUserNames = users => users.map(user => user.name);

	
	console.log(getUserNames(users));
	// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
}


