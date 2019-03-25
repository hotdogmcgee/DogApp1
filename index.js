'use strict';


//submit handler
let inputBreed = ""


function getDogImage() {
  let fetchAddress = `https://dog.ceo/api/breed/${inputBreed}/images/random`
  fetch(fetchAddress)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.code != 404) {
      console.log(responseJson);   
      displayResults(responseJson)
    } else {
      alert('Not a valid breed, please try again, woof!')
    }
  })
    
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
      $('.results-img').append(
        `<img src="${responseJson.message}" class="results-img">`
      )

    //display the results section
    $('.results').removeClass('hidden');
    console.log('done??!?!')
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    inputBreed = document.getElementById("thing").value;
    console.log(inputBreed);
    //$('.results').empty();
    $('.results-img').empty();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();

});

