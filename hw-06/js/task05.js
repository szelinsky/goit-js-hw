import users from "./users.js";
export const task05 = () => {
	const getUserWithEmail = (users, email) => {
		return users.find(user => {
			return user.email === email;
		});
	};
	
	console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
	console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
} 