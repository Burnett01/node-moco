# Changes

## 29.04.2020

+ Added new endpoints ``getDealCategories`` ``getDealCategory``
+ Added new endpoint ``getPurchases`` ``getPurchase``
+ Re-organized code, readme and tests
+ Dropped babel (no longer wanted due to native destructor support)

## 05.03.2020

+ use @burnett01/extended-request@1.6.0 to make use of proper error handling at protocol level

## 24.01.2020

+ dropped support for node 6 and 7

## 01.10.2019

+ Added new endpoint ``getProjectsExpenses``

## 27.03.2019

+ Added new endpoints ``getUserEmployments` ``getUserEmployment``
+ Added new endpoint ``getProjectsAssigned``
+ Added new endpoints ``getUserHolidays`` ``getUserHoliday``

## 01.01.2019

The ``getContactsOrganizations`` and ``getContactsOrganization`` methods have been deprecated and removed.

Please use the ``getCompanies`` method instead: https://github.com/Burnett01/node-moco#get-companies

To quote a Mocoapp developer: "We made organization a first class citizen in MOCO[...]"

