/// <reference path="angular.min.js" />

angular.module("myApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.message = "Lets Go Pokemon!!!!!";
        $scope.imagesrc = "/Images/Pikachu.png";
        var pokemon = 
            [
                 {
                     Type: 'None',
                     Name: '!!!!!',
                     Color: '!!!',
                     Id: 0,
                     attack: 0,
                     defend: 0,
                     power: "rfgr"
                 },
                {
                    Type: 'Electric',
                    Name: 'Pichu',
                    Color: 'Yellow',
                    Id: 1,
                    attack: 0,
                    defend: 0,
                    power:1234567.5645645
                },
                {
                    Type: 'Fire',
                    Name: 'Charizard',
                    Color: 'Red',
                    Id: 2,
                    attack: 0,
                    defend: 0,
                    power: 1675664.898778
                },
                {
                    Type: 'Water',
                    Name: 'Bulbsor',
                    Color: 'Blue',
                    Id: 3,
                    attack: 0,
                    defend: 0,
                    power: 1135564.6556
                },
                {
                    Type: 'Electric',
                    Name: 'Zapdos',
                    Color: 'Yellow',
                    Id: 1,
                    attack: 0,
                    defend: 0,
                    power: 2235684.34
                },
                {
                    Type: 'Normal',
                    Name: 'Keklion',
                    Color: 'Green',
                    Id: 1,
                    attack: 0,
                    defend: 0,
                    power: 1036578.34
                },
                {
                    Type: 'Dark',
                    Name: 'Houndour',
                    Color: 'Black',
                    Id: 1,
                    attack: 0,
                    defend: 0,
                    power: 2235685.34
                },

            ];
        var evolution = [
            {
                Pokemon: "Pichu",
                Evolutions: [{
                    name: "Pikachu"
                }]               
            },
            {
                Pokemon: "Charmelon",
                Evolutions: [
                    {name: "Char"},
                    {name: "Charizard"}
                ]
            },
            {
                Pokemon: "Bulbasor",
                Evolutions: [
                    {name: "Watertole"},
                    {name: "Blastoise"}
                ]
            }

        ]; 

        $scope.pokemons = pokemon;
        $scope.evolutions = evolution;
        $scope.rowLimit = 0;
        $scope.sortBy = "Name"
        $scope.reverseSort = false;

        $scope.sorting = function (column) {

            $scope.reverseSort = ($scope.sortBy == column) ? !$scope.reverseSort : false;
            $scope.sortBy = column;

        };

        $scope.changeClass = function (column) {

            if ($scope.sortBy == column)
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            else
                return '';
        };

        $scope.Attack = function (pokemon) {

            pokemon.attack++;
            pokemon.power++;
            if (pokemon.defend !=0)
            pokemon.defend--;
        };

        $scope.Defend = function (pokemon) {

            pokemon.defend++;
            pokemon.power--;
            if (pokemon.attack != 0)
            pokemon.attack--;
        };
    });