"use strict";

var Bracket = (function() {

  var graphContainer;

  var init = function() {

    graphContainer = $('#tournament-graph-framebox');

  };

  var initExample4 = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [{name: "Player 1 with a long name", country: null, number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: null, profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
      ],
      "results": [
        // Results from the 1/2 finals
        [
          [1, 2, undefined, undefined, { date: null, club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: null }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
        ],
        // Results from the finals
        [
          [2, 1, '6/5, 5/6, 7/6', '6/4, 3/6, 6/0', { date: "4 Юни 2015 - 16:00", club: "O.K. Sport - Club", info: "Корт 1" }],
        ]
      ],
      // Winner details here
      "winner": {
        text: "Победител",
        result: "7/6, 6/4",
      },
      // Names of the rounds
      "roundsNames": [
        'Полуфинал',
        'Финал',
      ]
    };

    initWithData(singleElimination);

  };

  var initExample8 = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [{name: "Player 1 with a long name", country: null, number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: null, profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
      ],
      "results": [
        // Results from the 1/4 finals
        [
          [1, 2, undefined, undefined, { date: null, club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: null }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
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
        text: "Победител",
        result: "7/6, 6/4",
      },
      // Names of the rounds
      "roundsNames": [
        'Четвъртфинал',
        'Полуфинал',
        'Финал',
      ]
    };

    initWithData(singleElimination);

  };

  var initExample8TeamsWith2Players = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [
          {name: ["Player 1", "Player 2"], country: null, number: 1, type: '', profile_url: ['http://mtr-design.com', 'http://google.com'] },
          {name: ["Player 3", "Player 4"], country: 'FRA', number: 2, type: null, profile_url: ['http://google.com', 'http://mtr-design.com'] }
        ],
        [
          {name: ["Player 5", "Player 6"], country: 'BRA', number: 3, type: '', profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] },
          {name: ["Player 7", "Player 8"], country: 'AUS', number: 4, type: null, profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] }
        ],
        [
          {name: ["Player 9", "Player 10"], country: 'GBR', number: 5, type: '', profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] },
          {name: ["Player 11", "Player 12"], country: 'BUL', number: 6, type: null, profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] }
        ],
        [
          {name: ["Player 13", "Player 14"], country: 'USA', number: 7, type: '', profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] },
          {name: ["Player 15", "Player 16"], country: 'GBR', number: 8, type: null, profile_url: ['http://mtr-design.com', 'http://mtr-design.com'] }
        ],
      ],
      "results": [
        // Results from the 1/4 finals
        [
          [1, 2, undefined, undefined, { date: null, club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: null }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
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
        text: "Победител",
        result: "7/6, 6/4",
      },
      // Names of the rounds
      "roundsNames": [
        'Четвъртфинал',
        'Полуфинал',
        'Финал',
      ],
      "settings": {
        matchBoxHeight: 100
      }
    };

    initWithData(singleElimination);

  };

  var initExample16 = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [{name: ["Player 1 with a long name"], country: null, number: 1, type: '', profile_url: 'http://google.com' }, {name: "Player 2", country: 'FRA', number: 2, type: null, profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],
      ],
      "results": [
        // Results from the 1/8 finals
        [
          [1, 2, undefined, undefined, { date: null, club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: null }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
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
        text: "Победител",
        result: "7/6, 6/4",
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

  var initExample128 = function() {

    var singleElimination = {
      "teams": [
        // All of the players in the first round
        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],

        [{name: "Player 1 with a long name", country: 'BUL', number: 1, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 2", country: 'FRA', number: 2, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 3", country: 'GBR', number: 3, type: '', profile_url: 'http://mtr-design.com'}, {name: "Player 4 with a long name here", country: 'USA', number: 4, type: 'WC', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 5", country: 'GBR', number: 5, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 6 with a long nam", country: 'USA', number: 6, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 7", country: 'GBR', number: 7, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 8", country: 'USA', number: 8, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 9", country: 'BUL', number: 9, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 10", country: 'FRA', number: 10, type: 'Q', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 11", country: 'GBR', number: 11, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 12", country: 'USA', number: 12, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 13", country: 'GBR', number: 13, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 14", country: 'USA', number: 14, type: 'W', profile_url: 'http://mtr-design.com' }],
        [{name: "Player 15", country: 'GBR', number: 15, type: '', profile_url: 'http://mtr-design.com' }, {name: "Player 16", country: 'USA', number: 16, type: 'W', profile_url: 'http://mtr-design.com' }],
      ],
      "results": [

        // Results from the 1/64 finals
        [
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
        ],

        // Results from the 1/32 finals
        [
          [1, 2, "", "6-3", { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
        ],

        // Results from the 1/16 finals
        [
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
        ],

        // Results from the 1/8 finals
        [
          [1, 2, undefined, undefined, { date: "21 Май 2015 - 21:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "22 Май 2015 - 18:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "23 Май 2015 - 20:00", club: "O.K. Sport - Club", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "24 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 4" }],
          [1, 2, undefined, undefined, { date: "25 Май 2015 - 17:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 1" }],
          [1, 2, undefined, undefined, { date: "26 Май 2015 - 21:00", club: "Club", club_url: 'http://mtr-design.com', info: "Корт 2" }],
          [1, 2, undefined, undefined, { date: "27 Май 2015 - 19:00", club: "MTR Design", club_url: 'http://mtr-design.com', info: "Корт 3" }],
          [1, 2, undefined, undefined, { date: "28 Май 2015 - 16:00", club: "ELSYS", club_url: 'http://mtr-design.com', info: "Корт 4" }],
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
        text: "Победител",
        result: "7/6, 6/4",
      },
      // Names of the rounds
      "roundsNames": [
        'Първи кръг (1/64)',
        'Втори кръг (1/32)',
        'Трети кръг (1/16)',
        'Осминафинал',
        'Четвъртфинал',
        'Полуфинал',
        'Финал',
      ]
    };

    initWithData(singleElimination);

  };

  var initWithData = function(data) {

    graphContainer.bracket({
      init: data,
      skipConsolationRound: true,
    });

  };

  var print = function() {
    graphContainer.find('.jQBracket').addClass('print');
  };

  var clear = function() {
    graphContainer.html('');
  };

  return {
    init: init,
    print: print,
    clear: clear,
    initExample4: initExample4,
    initExample8: initExample8,
    initExample8TeamsWith2Players: initExample8TeamsWith2Players,
    initExample16: initExample16,
    initExample128: initExample128,
  };

})();
