const task02 = () => {

	const inventory = {
		items: ['Knife', 'Gas mask'],
		add(itemName) {
			console.log(`Adding ${itemName} to inventory`);
	
			this.items.push(itemName);
		},
		remove(itemName) {
			console.log(`Removing ${itemName} from inventory`);
	
			this.items = this.items.filter(item => item !== itemName);
		},
	};
	
	const invokeInventoryAction = function(itemName, action) {
		console.log(`Invoking action on ${itemName}`);
		action(itemName);
	};
	
	const newFixedAdd = inventory.add.bind(inventory);
	invokeInventoryAction('Medkit', newFixedAdd);
	//invokeInventoryAction('Medkit', inventory.add.bind(inventory)); 
	//invokeInventoryAction('Medkit', inventory.add);
	// Invoking action on Medkit
	// Adding Medkit to inventory
	
	console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
	
	const newFixedRemove = inventory.remove.bind(inventory)
	invokeInventoryAction('Gas mask', newFixedRemove);
	// Invoking action on Gas mask
	// Removing Gas mask from inventory
	
	console.log(inventory.items); // ['Knife', 'Medkit']

}

export default task02;