/**
 * Created by pavel on 13.02.17.
 */

/*
 let instance = null;


 export class TransactionsStore {

 constructor() {
 'ngInject';

 if (!instance) {
 instance = this;
 }



 this.data = {
 transactions: [
 {amount: 500.00, date: "08/08/2014", description: "Подписка на журнал"},
 {amount: 150.00, date: "07/08/2015", description: "Кокаин"},
 {amount: 150.00, date: "07/08/2015", description: "Лунапарк"},
 {amount: 150.00, date: "07/08/2015", description: "Блек Джек"},
 {amount: 150.00, date: "07/08/2015", description: "Шлюхи"}],
 sum: 5
 };



 return instance;
 }


 getDatasadasds() {

 return 5;
 }




 }
 */

export class TransactionsStore {
  constructor() {
    this.data = {
      transactions: [
        {amount: 500.00, date: "08/08/2014", description: "Подписка на журнал"},
        {amount: 150.00, date: "07/08/2015", description: "Кокаин"},
        {amount: 150.00, date: "07/08/2015", description: "Лунапарк"},
        {amount: 150.00, date: "07/08/2015", description: "Блек Джек"},
        {amount: 150.00, date: "07/08/2015", description: "Шлюхи"}],
      sum: 66
    };

    this.getData();
  }

  getData() {
    let sum=0;
    this.data.transactions.forEach(function(el) {
      sum += parseFloat(el.amount);
    });
    this.data.sum= sum;
    /* console.log("this.data.transactions",this.data);
     return 6;*/
    return this.data.sum;
  }

}


