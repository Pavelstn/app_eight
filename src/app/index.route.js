export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('transactions', {
      url: '/transactions',
      templateUrl: 'app/transactions/transactions.html',
      controller: 'TransactionsController',
      controllerAs: 'transactions_ctrl'
    }).state('settings', {
    url: '/settings',
    templateUrl: 'app/settings/settings.html'
  }).state('main', {
    url: '/main',
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  });

  $urlRouterProvider.otherwise('/transactions');
}
