import users from "./users.js"
export const task02 = () => {

	const getUsersWithEyeColor = (users, color) => 
		users.filter(user => user.eyeColor === color);
	
	console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

}
