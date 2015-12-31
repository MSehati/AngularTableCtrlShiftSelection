angular.module('app', ['ctrlshiftselection'])
               .controller('ExampleCtrl', ['$scope', function ($scope) {
                   $scope.selectedDayList = [] ;
                   $scope.months = [
                       { title: 'farvardin',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'ordibehesht',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'khordad',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'tir',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'mordad',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'shahrivar',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'mehr',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'aban',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'azar',
                        days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'dey',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'bahman',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                       { title: 'esfand',
                       days:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16},{num:17},{num:18},{num:19},{num:20},{num:21},{num:22},{num:23},{num:24},{num:25},{num:26},{num:27},{num:28},{num:29},{num:30},{num:31}]
                       },
                   ];
                       
                    $scope.removeSelection = function(){
                       var copy = $scope.selectedDayList.slice();
                       for(var item in copy)
                       {
                           $scope.selectedDayList[item].num = $scope.selectedDayList[item].num + "*" ;
                           $scope.selectedDayList[item].isSelected = false ;
                       }
                       $scope.selectedDayList = [] ;
                   }
                       
               }]);
