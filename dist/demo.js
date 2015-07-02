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
        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '' }, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '' }, {name: "Player 8", country: 'USA', number: 8, type: 'W' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '' }, {name: "Player 12", country: 'USA', number: 12, type: 'W' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '' }, {name: "Player 14", country: 'USA', number: 14, type: 'W' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '' }, {name: "Player 16", country: 'USA', number: 16, type: 'W' }],
      ],
      "results": [
        // Results from the 1/8 finals
        [
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", info: "Корт 4" }],
        ],
        // Results from the 1/4 finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "29 Май 2015 - 23:00", club: "O.K. Sport - Club", info: "Корт 1" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "30 Май 2015 - 8:00", club: "Club", info: "Корт 2" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "31 Май 2015 - 11:00", club: "ELSYS", info: "Корт 3" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "1 Юни 2015 - 16:00", club: "Club", info: "Корт 4" }],
        ],
        // Results from the semi-finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "2 Юни 2015 - 10:00", club: "O.K. Sport - Club", info: "Корт 1" }],
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "3 Юни 2015 - 13:00", club: "Tennis Booking", info: "Корт 2" }],
        ],
        // Results from the finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "4 Юни 2015 - 16:00", club: "O.K. Sport - Club", info: "Корт 1" }],
        ]
      ],
      // Winner details here
      "winner": {
        result: "Result from the final",
      },
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
      init: data,
      skipConsolationRound: true,
    });
 
  };

  return {
    init: init
  };

})();

$(document).ready(function() {
  Bracket.init();
});