"use strict";

var Bracket = (function() {

  var graphContainer;

  var init = function() {

    graphContainer = $('#tournament-graph-framebox');

    initExample1();
    actions();
  };

  var initExample1 = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [{name: "Player 1", country: 'BUL', number: 1, type: '' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '' }, {name: "Player 4", country: 'USA', number: 4, type: 'W' }],
        [{name: "Player 5", country: 'GBR', number: 3, type: '' }, {name: "Player 6", country: 'USA', number: 4, type: 'W' }],
        [{name: "Player 7", country: 'GBR', number: 3, type: '' }, {name: "Player 8", country: 'USA', number: 4, type: 'W' }],
        [{name: "Player 9", country: 'BUL', number: 1, type: '' }, {name: "Player 10", country: 'FRA', number: 2, type: 'Q' }],
        [{name: "Player 11", country: 'GBR', number: 3, type: '' }, {name: "Player 12", country: 'USA', number: 4, type: 'W' }],
        [{name: "Player 13", country: 'GBR', number: 3, type: '' }, {name: "Player 14", country: 'USA', number: 4, type: 'W' }],
        [{name: "Player 15", country: 'GBR', number: 3, type: '' }, {name: "Player 16", country: 'USA', number: 4, type: 'W' }],
      ],
      "results": [
        // Results from the 1/8 finals
        [
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
          [1, 2, undefined, undefined, { date: "Date here 1", club: "Club", info: "Additional info" }],
        ],
        // Results from the 1/4 finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
        ],
        // Results from the semi-finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
        ],
        // Results from the finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "Date here 2", club: "Club", info: "Additional info" }],
        ]
      ],
      // Names of the rounds
      "roundsNames": [
        'Първи кръг (1/8)',
        'Четвъртфинал',
        'Полуфинал',
        'Финал',
      ]
    };

    initWithData(singleElimination);

  };

  var actions = function() {

  };

  var initWithData = function(data) {

    graphContainer.bracket({
      init: data
    });
 
  };

  return {
    init: init
  };

})();

$(document).ready(function() {
  Bracket.init();
});