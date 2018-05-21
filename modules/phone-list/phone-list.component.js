
angular.module("phoneList")
    .component("phoneList", {
        templateUrl: "./modules/phone-list/phone-list.template.html",
        controller: ["phone", function(phone) {
            this.phones = phone.doQuery();

            this.sortTerms = [
              {
                label: 'Alphabetical',
                value: 'name'
              },
              {
                label: 'Newest',
                value: 'age'
              },
              {
                label: 'oldest',
                value: '-age'
              }
            ];
            this.sortKey = this.sortTerms[1];
        }]
    });