// import truckSizes from "./objects.js";
import truckSizes from "./data.js";

const theButtonEl = document.getElementById("theButton");

const getSize = function () {
  const deckSizeEl = document.getElementById("deckSize").value;
  const truckBrandEl = document.getElementById("truckBrand").value;
  const truckSizeResult = document.getElementById("trucksize-res");

  const truckData = truckSizes[truckBrandEl]?.[deckSizeEl];

  if (!truckData) {
    truckSizeResult.innerText = `There is no match with that Deck Size and Truck Brand.`;
    truckSizeResult.classList.remove(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
    void truckSizeResult.offsetWidth;
    truckSizeResult.classList.add(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
  } else {
    const { model, link } = truckData;
    console.log(truckData);
    truckSizeResult.innerHTML = `
      The size suitable for ${deckSizeEl}" deck is <strong>${truckBrandEl} ${model}</strong>.<br>
      Amazon Link: <a href="${link}" target="_blank" rel="noopener noreferrer">Click here to view/purchase ${truckBrandEl} trucks</a>
    `;
    truckSizeResult.classList.remove(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
    void truckSizeResult.offsetWidth;
    truckSizeResult.classList.add(
      "d-block",
      "animate__animated",
      "animate__bounceIn"
    );
  }
};

// const getSize = function () {
//   const deckSizeEl = document.getElementById("deckSize").value;
//   const truckBrandEl = document.getElementById("truckBrand").value;
//   const truckSizeResult = document.getElementById("trucksize-res");
//   let truckSize;
//   let truckSizeResultText;

//   // MATCH SELECTED VALUE WITH PROPERTY WITHIN OBJECT

//   truckSize = truckSizes[truckBrandEl][deckSizeEl] || "Unknown";

//   if (truckSize === "Unknown") {
//     truckSizeResultText = `There is no match with that Deck Size and Truck Brand.`;

//     truckSizeResult.innerText = truckSizeResultText;
//     truckSizeResult.classList.remove(
//       "d-block",
//       "animate__animated",
//       "animate__bounceIn"
//     );
//     void truckSizeResult.offsetWidth;
//     truckSizeResult.classList.add(
//       "d-block",
//       "animate__animated",
//       "animate__bounceIn"
//     );
//   } else {
//     truckSizeResultText = `The size suitable for ${deckSizeEl}" deck is ${truckBrandEl} ${truckSize}.`;

//     truckSizeResult.innerText = truckSizeResultText;
//     truckSizeResult.classList.remove(
//       "d-block",
//       "animate__animated",
//       "animate__bounceIn"
//     );
//     void truckSizeResult.offsetWidth;
//     truckSizeResult.classList.add(
//       "d-block",
//       "animate__animated",
//       "animate__bounceIn"
//     );
//   }

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
// };

// theButtonEl.addEventListener("click", checkSizes);
theButtonEl.addEventListener("click", getSize);
