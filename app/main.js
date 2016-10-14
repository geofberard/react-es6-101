import React from "react";
import ReactDom from "react-dom";
import $ from 'jquery';

import App from "./App";


google.load('visualization', '1.0', {'packages': ['controls', 'corechart', 'table']});

google.setOnLoadCallback(function () {
    ReactDom.render(<App driveKey="1R7SN8_XaWEKJ0Cjz60U16jPb7sX7Jx5SWJw7EpQxGVM"/>, document.getElementById('app'))
});

$(document.body).keydown(function handleKeyPress(event) {
    if (event.keyCode == 37 || event.keyCode == 38) {
        console.log("last question");
        var lastQuestion = $('.card.inactive:last');
        console.log(lastQuestion);
        lastQuestion.removeClass( "inactive" );
        lastQuestion.addClass( "active" );
        $('html, body').animate( { scrollTop: $('.card.active:first').offset().top - $( window ).height() / 4}, '500' );
    }
    if (event.keyCode == 39 || event.keyCode == 40) {
        console.log("next question");
        var currentQuestion = $('.card.active:first');
        currentQuestion.removeClass( "active" );
        currentQuestion.addClass( "inactive" );
        $('html, body').animate( { scrollTop: $('.card.active:first').offset().top - $( window ).height() / 4}, '500' );
    }
});