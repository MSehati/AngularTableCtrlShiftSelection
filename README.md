AngularTableCtrlShiftSelection
======================

AngularTableCtrlShiftSelection is lightweight and simple set of directives which allows you to use left mouse button clicks with CTRL and SHIFT to select multiple items as you are used to from desktop apps.

See demo:
http://jsfiddle.net/b88rus7r/26/

Installation
------------

* Download  script file -
* https://rawgit.com/MSehati/AngularTableCtrlShiftSelection/master/CtrlShiftSelection.js
* Include the script in your webpage

Usage
-----

* Include module 'ctrlshiftselection' in your app/module
* Use standard ``ng-repeat`` to render your list
* Add  attribute ``ctrlshiftselect`` to a root element of your items, e.g. to a ``table`` element also add two below Attributes.
* 1- ctrlshiftselect-class:detemine the css class of selected td
* 2- select-list : an Array of Selected Items
* 
* In item template in your ``ng-repat`` (see example below) add attribute ``ctrlshiftselect-model="item"`` 
* when a td is selected a new boolean Property 'isSelected' Added to item which has True value


Example
-------
````javascript
angular.module('app', ['ctrlshiftselection']);
````

````html 
 <table ctrlshiftselect ctrlshiftselect-class="selected" select-list="selectedDayList" >            
            <tr ng-repeat="item in months" >
                <td>{{item.title}}</td>
                <td ng-repeat="day in item.days" ctrlshiftselect-model="day"  >
                    {{day.num + " " + (day.isSelected || false)}}
                </td>
            </tr>
        </table>
````
....
For full example see - http://jsfiddle.net/b88rus7r/26/
````

Other
-------
To create this directive I get basic idea from another directive written by 'David Bohunek' (https://github.com/davidbohunek/angularCtrlShiftSelect). 
It was a good directive but have one problem, It work slowly for table with lots of tds. I create this directive to work well on tables with many tds.

