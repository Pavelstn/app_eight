/**
 * Created by pavel on 13.02.17.
 */
export class TransactionsController {



  constructor (trStore) {
    'ngInject';
    //  this.transactions = tttt.transactions;
    this.transactions = trStore.data.transactions;

    // let aaaa= new TransactionsStore;
    //console.log("TransactionsStore",aaaa);
    //console.log("trStore",trStore.getData());
    // this.transactions = [
    //   { amount: 500.00, date: "08/08/2014", description: "Подписка на журнал" },
    //   { amount: 150.00, date: "07/08/2015", description: "Кокаин" },
    //   { amount: 150.00, date: "07/08/2015", description: "Лунапарк" },
    //   { amount: 150.00, date: "07/08/2015", description: "Блек Джек" },
    //   { amount: 150.00, date: "07/08/2015", description: "Шлюхи" }
    // ];

    this.resetTransaction();
  }

  resetTransaction() {
    this.newTransaction = {
      amount: 0.0,
      date: "01/02/1993",
      description: null
    }
  }



  addTransaction(){
    this.transactions.push(this.newTransaction);
    this.resetTransaction();
  }


}
