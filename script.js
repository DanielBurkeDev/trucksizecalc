// import truckSizes from "./objects.js";
import truckSizes from "./data.js";

const theButtonEl = document.getElementById("theButton");

const getSize = function () {
  const deckSizeEl = document.getElementById("deckSize").value;
  const truckBrandEl = document.getElementById("truckBrand").value;
  const truckSizeResult = document.getElementById("trucksize-res");
  let truckSize;
  let truckSizeResultText;

  // MATCH SELECTED VALUE WITH PROPERTY WITHIN OBJECT

  truckSize = truckSizes[truckBrandEl][deckSizeEl] || "Unknown";

  if (truckSize === "Unknown") {
    truckSizeResultText = `There is no match with that Deck Size and Truck Brand.`;
    truckSizeResult.innerText = truckSizeResultText;
    truckSizeResult.classList.add(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
  } else {
    truckSizeResultText = `The size suitable for ${deckSizeEl}" deck is ${truckBrandEl} ${truckSize}.`;

    truckSizeResult.innerText = truckSizeResultText;
    truckSizeResult.classList.add(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
  }

  // if (truckBrandObj.hasOwnProperty(deckSizeElVal)) {
  //   console.log(truckBrandObj[deckSizeElVal], "and", deckSizeElVal);
  //   let truckSizeResultText = `The size suitable for ${deckSizeElVal}" deck is ${truckBrandElVal} ${truckBrandObj[deckSizeElVal]}.`;
  //   truckSizeResult.innerText = truckSizeResultText;
  //   truckSizeResult.classList.add(
  //     "d-block",
  //     "animate__animated",
  //     "animate__fadeIn"
  //   );
  // } else {
  //   console.log(truckBrandObj[deckSizeElVal], "and", deckSizeElVal);
  //   let truckSizeResultText = `There is no match for those sizes.`;
  //   truckSizeResult.innerText = truckSizeResultText;
  //   truckSizeResult.classList.add(
  //     "d-block",
  //     "animate__animated",
  //     "animate__fadeIn"
  //   );
  // }
};

// theButtonEl.addEventListener("click", checkSizes);
theButtonEl.addEventListener("click", getSize);
