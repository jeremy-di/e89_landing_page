/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import 'tw-elements'

import {
    Collapse,
    initTE,
  } from "tw-elements";
  
  initTE({ Collapse });

  import {
    Chart,
  } from "tw-elements";
  
  initTE({ Chart });

let basculer = document.querySelector(".basculer");

let body = document.querySelector("body");

basculer.addEventListener('click', function open() {
    body.classList.toggle('open');
});

console.log("bonjour")
