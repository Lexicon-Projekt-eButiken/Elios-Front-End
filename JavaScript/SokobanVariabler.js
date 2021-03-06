﻿
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/


/*   Enum of CSS Classes for the static elements   */

var Tiles =
{
    Wall: "tile tile-wall",
    Space: "tile tile-space",
    Goal: "tile tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities =
{
    Character: "entity entity-player",
    Block: "entity entity-block",
    BlockDone: "entity entity-block-goal"
};

/*  Legend (Teckenförklaring)
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
    Array width: 19,
    Array height: 16,
*/

var mapsArray1 = [
        ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['P'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['W'], ['W'], ['W'], ['W'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['W'], ['.'], ['.'], ['.'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['W'], ['B'], ['.'], ['.'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['W'], ['W'], ['W'], ['.'], ['.'], ['B'], ['W'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['W'], ['.'], ['.'], ['B'], ['.'], ['B'], ['.'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['W'], ['W'], ['W'], ['.'], ['W'], ['.'], ['W'], ['W'], ['.'], ['W'], ['.'], ['.'], ['.'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
        ['W'], ['.'], ['.'], ['.'], ['W'], ['.'], ['W'], ['W'], ['.'], ['W'], ['W'], ['W'], ['W'], ['W'], ['.'], ['.'], ['G'], ['G'], ['W'],
        ['W'], ['.'], ['B'], ['.'], ['.'], ['B'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['B'], ['.'], ['G'], ['G'], ['W'],
        ['W'], ['W'], ['W'], ['W'], ['W'], ['.'], ['W'], ['W'], ['W'], ['.'], ['W'], ['P'], ['W'], ['W'], ['.'], ['.'], ['G'], ['G'], ['W'],
        ['.'], ['.'], ['.'], ['.'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
        ['.'], ['.'], ['.'], ['.'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
        ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'], ['.'],
];

var mapsArray2 = [
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    ['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
    ['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W'],
    ['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W'],
    ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W'],
    [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
    [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']
];

var mapsArray3 = [
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    ['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
    ['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W'],
    ['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], ['B'], [' '], [' '], ['B'], [' '], ['G'], ['G'], ['W'],
    ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W'],
    [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'],
    [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '],
    [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']
    ];

//var tileMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];


// Uppdelning av plankartan och Presentation av spelplanen mot skärmen //

var TabellRad1 = [];
var TabellRad2 = [];
var TabellRad3 = [];
var TabellRad4 = [];
var TabellRad5 = [];
var TabellRad6 = [];
var TabellRad7 = [];
var TabellRad8 = [];
var TabellRad9 = [];
var TabellRad10 = [];
var TabellRad11 = [];
var TabellRad12 = [];
var TabellRad13 = [];
var TabellRad14 = [];
var TabellRad15 = [];
var TabellRad16 = [];

TabellRad1 = mapsArray1.slice(0, 19);
TabellRad2 = mapsArray1.slice(19, 38);
TabellRad3 = mapsArray1.slice(38, 57);
TabellRad4 = mapsArray1.slice(57, 76);
TabellRad5 = mapsArray1.slice(76, 95);
TabellRad6 = mapsArray1.slice(95, 114);
TabellRad7 = mapsArray1.slice(114, 133);
TabellRad8 = mapsArray1.slice(133, 152);
TabellRad9 = mapsArray1.slice(152, 171);
TabellRad10 = mapsArray1.slice(171, 190);
TabellRad11 = mapsArray1.slice(190, 209);
TabellRad12 = mapsArray1.slice(209, 228);
TabellRad13 = mapsArray1.slice(228, 247);
TabellRad14 = mapsArray1.slice(247, 266);
TabellRad15 = mapsArray1.slice(266, 285);
TabellRad16 = mapsArray1.slice(285, 305);


document.getElementById("PlanRad1").innerHTML = TabellRad1.join(" ");
document.getElementById("PlanRad2").innerHTML = TabellRad2.join(" ");
document.getElementById("PlanRad3").innerHTML = TabellRad3.join(" ");
document.getElementById("PlanRad4").innerHTML = TabellRad4.join(" ");
document.getElementById("PlanRad5").innerHTML = TabellRad5.join(" ");
document.getElementById("PlanRad6").innerHTML = TabellRad6.join(" ");
document.getElementById("PlanRad7").innerHTML = TabellRad7.join(" ");
document.getElementById("PlanRad8").innerHTML = TabellRad8.join(" ");
document.getElementById("PlanRad9").innerHTML = TabellRad9.join(" ");
document.getElementById("PlanRad10").innerHTML = TabellRad10.join(" ");
document.getElementById("PlanRad11").innerHTML = TabellRad11.join(" ");
document.getElementById("PlanRad12").innerHTML = TabellRad12.join(" ");
document.getElementById("PlanRad13").innerHTML = TabellRad13.join(" ");
document.getElementById("PlanRad14").innerHTML = TabellRad14.join(" ");
document.getElementById("PlanRad15").innerHTML = TabellRad15.join(" ");
document.getElementById("PlanRad16").innerHTML = TabellRad16.join(" ");

document.getElementById("VisaSpelplan").innerHTML = "Sista positionens innehåll:  " + "'" + mapsArray1[303] + "'";
document.getElementById("Spelplan").innerHTML = "Totala tabellängden:  " + mapsArray1.length;




