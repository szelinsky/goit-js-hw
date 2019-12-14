import users from "./users.js";
export const task09 = () => {

	const getNamesSortedByFriendsCount = users => 
		users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
	
	console.log(getNamesSortedByFriendsCount(users));
	// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
	
}