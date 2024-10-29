// js/dashboard_main.js

import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import the CSS file

$(document).ready(function () {
    // Create elements
    $('<div id="logo"></div>').prependTo('body'); // Logo element
    $('<p>Holberton Dashboard</p>').appendTo('body');
    $('<p>Dashboard data for the students</p>').appendTo('body');
    $('<button id="click-me">Click here to get started</button>').appendTo('body');
    $('<p id="count"></p>').appendTo('body');
    $('<p>Copyright - Holberton School</p>').appendTo('body');

    let count = 0; // Initialize count

    const updateCounter = () => {
        count += 1; // Increment count
        $('#count').text(`${count} clicks on the button`); // Update count text
    };

    // Bind debounce function from Lodash to the click event
    $('#click-me').on('click', _.debounce(updateCounter, 300));
});
