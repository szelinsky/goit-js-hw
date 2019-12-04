const task07 = () => {
	
	const Transaction = {
		DEPOSIT: 'deposit',
		WITHDRAW: 'withdraw',
	};

	const account = {
		// Текущий баланс счета
		balance: 0,
	
		// История транзакций
		transactions: [],
	
		/*
		 * Метод создает и возвращает объект транзакции.
		 * Принимает сумму и тип транзакции.
		 */
		createTransaction(amount, type) {
			this.transactions.push({
				id: this.transactions.length + 1,
				amount,
				type,
			});
		},
	
		/*
		 * Метод отвечающий за добавление суммы к балансу.
		 * Принимает сумму танзакции.
		 * Вызывает createTransaction для создания объекта транзакции
		 * после чего добавляет его в историю транзакций
		 */
		deposit(amount) {
			let depositAmount = amount;
			let depositType = Transaction.DEPOSIT;

			this.createTransaction(depositAmount, depositType);
		},
	
		/*
		 * Метод отвечающий за снятие суммы с баланса.
		 * Принимает сумму танзакции.
		 * Вызывает createTransaction для создания объекта транзакции
		 * после чего добавляет его в историю транзакций.
		 *
		 * Если amount больше чем текущий баланс, выводи сообщение
		 * о том, что снятие такой суммы не возможно, недостаточно средств.
		 */
		withdraw(amount) {
			let withdrawAmount = amount;
			let withdrawType = Transaction.WITHDRAW;
			let balance = this.getBalance();
			
			
			if (amount > balance) {   
				console.log('Cнятие такой суммы не возможно, недостаточно средств');   
			} else {	
				this.createTransaction(withdrawAmount, withdrawType);
			}
		},
	
		/*
		 * Метод возвращает текущий баланс
		 */
		getBalance() {
			let transactions = this.transactions;
			const totalBalance = (type) => {
				let total = 0;
				for (let i = 0; i < transactions.length; i++) {
					if (transactions[i].type === type) {
						total += transactions[i].amount
					}
				}
				return total;
			} 
			let totalDeposit = totalBalance('deposit');
			let totalWidthdraw = totalBalance('withdraw');
			let balance = totalDeposit - totalWidthdraw;
			//console.log(balance);
			return balance;
		},
	
		/*
		 * Метод ищет и возвращает объект транзации по id
		 */
		getTransactionDetails(id) {
			for (const key in this.transactions) {
				if (this.transactions[key].id == id) {
					console.log(account.transactions[key])
				}
			}
		},
	
		/*
		 * Метод возвращает количество средств
		 * определенного типа транзакции из всей истории транзакций
		 */
		getTransactionTotal(type) {
			for (const key in this.transactions) {
				if (this.transactions[key].type == type) {
					console.log(account.transactions[key])
				}
			}
		},
	};

	account.deposit(20);

	account.deposit(50);

	account.withdraw(100);

	account.deposit(50);

	account.withdraw(100);



	console.log(account.getBalance());


	console.log(account.transactions);

	//account.getTransactionDetails(3);

	//account.getTransactionTotal('withdraw');
	
}