# Notable Changes

## 29.04.2020

+ Added new endpoints [``getDealCategories``](https://github.com/hundertzehn/mocoapp-api-docs/pull/69) & [``getDealCategory``](https://github.com/hundertzehn/mocoapp-api-docs/pull/69)
+ Added new endpoint [``getPurchases``](https://github.com/hundertzehn/mocoapp-api-docs/pull/76) & [``getPurchase``](https://github.com/hundertzehn/mocoapp-api-docs/pull/76)
+ Re-organized code, readme and tests
+ Dropped babel (no longer wanted due to native destructor support)

## 05.03.2020

+ use [@burnett01/extended-request@1.6.0](https://github.com/Burnett01/extended-request/issues/2) to make use of proper error handling at protocol level

## 24.01.2020

+ dropped support for node 6 and 7

## 01.10.2019

+ Added new endpoint [``getProjectsExpenses``](https://github.com/hundertzehn/mocoapp-api-docs/pull/42)

## 27.03.2019

+ Added new endpoints [``getUserEmployments``](https://github.com/hundertzehn/mocoapp-api-docs/pull/10) & [``getUserEmployment``](https://github.com/hundertzehn/mocoapp-api-docs/pull/10)
+ Added new endpoint [``getProjectsAssigned``](https://github.com/hundertzehn/mocoapp-api-docs/pull/19)
+ Added new endpoints [``getUserHolidays``](https://github.com/hundertzehn/mocoapp-api-docs/pull/26) & [``getUserHoliday``](https://github.com/hundertzehn/mocoapp-api-docs/pull/26)

## 01.01.2019

The ``getContactsOrganizations`` & ``getContactsOrganization`` methods have been deprecated and removed.

Please use the ``getCompanies`` method instead: https://github.com/Burnett01/node-moco#get-companies

To quote a Mocoapp developer: ["We made organization a first class citizen in MOCO"](https://github.com/hundertzehn/mocoapp-api-docs/issues/8)

