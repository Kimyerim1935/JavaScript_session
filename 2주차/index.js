import App from './App.js';
import {getItem} from "./localStorage.js";
import {STORAGE_KEY} from "./constants.js";

const initialState = getItem(STORAGE_KEY, [])

const $target = document.querySelector('main');

new App({
  $target, initialState
});