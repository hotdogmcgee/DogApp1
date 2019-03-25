'use strict';

//submit handler
let requestedImages = ""


function getDogImage() {
  let fetchAddress = `https://dog.ceo/api/breeds/image/random/${requestedImages}`
  fetch(fetchAddress)
    .then(response => response.json())
    .then(responseJson =>     
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    for (let i = 0; i < responseJson.message.length; i++) {
      $('.results-img').append(
        `<img src="${responseJson.message[i]}" class="results-img">`
      )
     }
    
    for (let i = 0; i < responseJson.message.length; i++) {
      console.log(responseJson.message[i])
    }

    //display the results section
    $('.results').removeClass('hidden');
    console.log('done??!?!')
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    requestedImages = document.getElementById("thing").value;
    console.log(requestedImages);
    //$('.results').empty();
    $('.results-img').empty();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();

});

