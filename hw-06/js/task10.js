import users from "./users.js";
export const task10 = () => {
	const getSortedUniqueSkills = users =>  
		users.reduce((skillsArr, user) => {
			skillsArr.push(...user.skills);   
			return skillsArr.sort();
		}, []).filter((value, index, arr) => arr.indexOf(value) === index);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
}



//console.log(['hello', 'my', 'hello', 'name'].filter((value,index,arr)=>arr.indexOf(value)===index));