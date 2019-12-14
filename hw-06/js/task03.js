import users from "./users.js"
export const task03 = () => {

	const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);
	
	console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

}