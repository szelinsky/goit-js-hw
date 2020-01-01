import "./css/styles.css";
import "../node_modules/pnotify/dist/PNotifyBrightTheme.css";
var debounce = require("lodash.debounce");
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import fetchCountries from "./js/fetchCountries";
import searchCountryTemplate from "./templates/search-country.hbs";
import searchResultsTemplate from "./templates/search-results.hbs";

const elements = {
  input: document.getElementById("country-input"),
  resultsPage: document.getElementById("results"),
  countryPage: document.getElementById("country-page")
};

const clearOutput = () => {
  elements.countryPage.innerHTML = "";
	elements.resultsPage.innerHTML = "";
	PNotify.removeAll();
};

const delay = debounce(function() {
	if (elements.input.value === "") {
		clearOutput();
		return; //выходим из ф-ции
	}
  fetchCountries(elements.input.value).then(result => {
    if (result.length === 1) {
			clearOutput();
			result[0].population = result[0].population.toLocaleString();
			//console.log(result[0].languages)
			elements.countryPage.insertAdjacentHTML("beforeend", buildPage(result));
		} else if (result.length >= 10)  {
			PNotify.error({
				title: 'Too many matches found.',
				text: 'Please enter a more specific query!'
			});

		} else if (result.status == '404') {
			clearOutput();
			PNotify.error({
				title: 'Country found.',
				text: 'Please enter another country!'
			});			
		} else {
			//console.log(result);
      clearOutput();
      elements.resultsPage.insertAdjacentHTML("beforeend",buildResults(result)
      );
    }
  });
  const buildResults = items => {
    const markup = items.map(item => searchResultsTemplate(item)).join("");
    return markup;
  };
  const buildPage = items => {
    const markup = items.map(item => searchCountryTemplate(item)).join("");
    return markup;
  };
}, 500);

elements.input.addEventListener("input", delay);
