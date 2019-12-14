import users from "./users.js";
export const task07 = () => {

	const calculateTotalBalance = users => 
		users.reduce((totalBalance, user) => 
			totalBalance + user.balance, 0);

	console.log(calculateTotalBalance(users)); // 20916
}