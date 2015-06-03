angular.module('ctrlshiftselection', [])
       .directive('ctrlshiftselect', [function () {
           return {
               restrict: 'A',
               controller: function ($scope, $element, $attrs) {

                   if ($attrs.ctrlshiftselectClass) {
                       this.selectedClass = $attrs.ctrlshiftselectClass;
                   } else {
                       this.selectedClass = 'selected';
                   }

                   var childItems = [];
                   var selectChildItems = [];
                   var lastSelectedItemScope;

                   var setSelected = function (modelGetter, scope, value) {
                       modelGetter.assign(scope, value);

                       if (value) {
                           lastSelectedItemScope = scope;
                       }
                       
                       $scope.$digest();
                       
                   };

                   this.initChild = function (childItem) {
                       childItems.push(childItem);
                   };
                   
                   function cleanSelectChildItems(){
                      selectChildItems = selectChildItems.filter(function(input){
                           return input.scope[input.type].isSelected ;
                       });
                   }
                   
                   function createSelectChildItems() {
                       
                       selectChildItems = childItems.filter(function(input){
                            return  input.scope[input.type].isSelected
                           ;})
                       
                        $scope[$attrs.selectList] = selectChildItems.map(function(input){
                             return input.scope[input.type] ;
                       });
                       $scope.$digest();
                   }

                   function GroupSelection(FromIndex,ToIndex){
                       
                       for(var i = FromIndex ; i<= ToIndex; i++){
                           var childTypeItem =  childItems[i].type ;
                           childItems[i].scope[childTypeItem].isSelected = true ;
                       }
                       
                       if($attrs.selectAll1)
                       {
                           $scope[$attrs.selectAll1] = false ;
                       }

                       lastSelectedItemScope = childItems[ToIndex].scope;
                       
                        $scope.$digest();
                   }
                   
                   this.onShiftClick = function (element, modelGetter, scope) {
                        cleanSelectChildItems();
                       
                       var lastSelectedItem = (typeof lastSelectedItemScope != 'undefined') ? {scope: lastSelectedItemScope} : childItems[childItems.length - 1];
                       var lastSelectedItemScopeIndex = childItems.indexOf(childItems.filter(function(input){
                                                         return input.scope.$id == lastSelectedItem.scope.$id })[0]) ;
                       
                       var currentSelectedItem  = scope ;
                       var currentSelectedItemScopeIndex = childItems.indexOf(childItems.filter(function(input){
                                                         return input.scope.$id == currentSelectedItem.$id })[0]) ; 
                       
                       var FromIndex = 0;
                       var ToIndex = 0 ;
                       if(lastSelectedItemScopeIndex < currentSelectedItemScopeIndex){
                           FromIndex = lastSelectedItemScopeIndex ;
                           ToIndex = currentSelectedItemScopeIndex ;
                       }
                       else {
                           FromIndex = currentSelectedItemScopeIndex ;
                           ToIndex = lastSelectedItemScopeIndex ;
                       }
                        GroupSelection(FromIndex,ToIndex);                        
                      
                       createSelectChildItems();
                   };

                   this.onCtrlClick = function (element, modelGetter, scope) {
                        cleanSelectChildItems();
                       //revert selection of clicked item
                       var currentValue = modelGetter(scope);
                       setSelected(modelGetter, scope, !currentValue);
                       createSelectChildItems();
                   };

                   this.onPlainClick = function (element, modelGetter, scope) {

                       cleanSelectChildItems();
                      
                       for(var item in selectChildItems){
                           var childType = selectChildItems[item].type ;
                           selectChildItems[item].scope[childType].isSelected = false ;
                       }                   
                       $scope.$digest();
                       $scope[$attrs.selectList] = [] ;                       
                       selectChildItems = [] ;
                       $scope.$digest();

                       //select the clicked item
                       setSelected(modelGetter, scope, true);
                       createSelectChildItems();
                   };
                   
               }
           };
       }])
       .directive('ctrlshiftselectModel', ['$parse', function ($parse) {
           return {
               restrict: 'A',
               require: '^ctrlshiftselect',
               link: function (scope, element, attributes, controller) {
                   
                   var type = attributes.ctrlshiftselectModel ;
                   attributes.ctrlshiftselectModel = attributes.ctrlshiftselectModel +'.isSelected' ;
                   var modelGetter = $parse(attributes.ctrlshiftselectModel );
                   
                   controller.initChild({
                       modelGetter: modelGetter,
                       scope: scope,
                       type: type
                   });

                   scope.$watch(attributes.ctrlshiftselectModel, function (newValue) {
                       if (newValue) {
                           element.addClass(controller.selectedClass);
                       } else {
                           element.removeClass(controller.selectedClass);
                       }
                   });
                   
                   var onMouseDown = function(event) {
                       //left mouse click
                       if (event.which !== 1) {
                           return true;
                       }

                       if (event.shiftKey) {
                           controller.onShiftClick(element, modelGetter, scope);
                       } else if (event.ctrlKey) {
                           controller.onCtrlClick(element, modelGetter, scope);
                       } else {
                           controller.onPlainClick(element, modelGetter, scope);
                       }
                   };
                   
                   element.on('mousedown', onMouseDown);
                   
                   scope.$on("$destroy", function() {
                        element.off('mousedown', onMouseDown);
                   });
               }
           };
       }]);
