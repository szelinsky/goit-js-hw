import users from "./users.js";
export const task04 = () => {

	const getInactiveUsers = users => users.filter(user => !user.isActive);
	
	console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
}