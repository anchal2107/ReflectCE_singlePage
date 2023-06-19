import "../styles/styles.css";
import {
  footerData,
  whatisReflectCEData,
  cardDataHowDoesItWork,
  faqData,
  mainCenterData,
} from "../data/landingPage.js";
// var btn = document.getElementById("btn");
console.log("Hello world!");
// const onDivClick = () => {
//     console.log('div clicked');
//     }
// btn.addEventListener("click", onDivClick);
const mainTitle = document.getElementById("mainTitle");
const mainDetails = document.getElementById("mainDetails");
mainTitle.innerHTML = mainCenterData.title;
mainDetails.innerHTML = mainCenterData.details;
const footerDetails = document.getElementById("footerDetails");
const footerCopyRight = document.getElementById("footerCopyRight");
const footerContact = document.getElementById("footerContact");
const footerActivity = document.getElementById("footerActivity");
footerDetails.innerHTML = footerData.details;
footerCopyRight.innerHTML = footerData.copyRight;
footerContact.innerHTML = footerData.contact;
footerActivity.innerHTML = footerData.activityDetails;

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
var learnMoreButton = document.getElementById("learnMoreButton");
var expandDiv = document.getElementById("expand_learnMoreFirst");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

var whatisReflectCEDetails = document.getElementById("whatisReflectCEDetails");
var whatisReflectCETitle = document.getElementById("whatisReflectCETitle");
var whatsisReflectCEsubCards = document.getElementById(
  "whatsisReflectCEsubCards"
);
whatisReflectCEDetails.innerHTML = whatisReflectCEData.details;
whatisReflectCETitle.textContent = whatisReflectCEData.title;

whatisReflectCEData.subCards.forEach((card) => {
  const cardHTML = `
        <div class=" sm:w-[20.13rem] sm:h-[10.44rem]">
                <div
                  class="text-[1.5rem] sm:text-[2rem]"
                >
               ${card.title}
                </div>
                <div
                  class="text-[1rem] leading-[180%] text-neutral-800 inline-block sm:w-[16.63rem]"
                >
                ${card.details}
                </div>
              </div>`;

  // Append the card HTML to the card container
  whatsisReflectCEsubCards.innerHTML += cardHTML;
});

// Add a click event listener to the button
learnMoreButton.addEventListener("click", function () {
  console.log("click");
  // Toggle the visibility of the target div
  if (expandDiv.style.display === "none") {
    expandDiv.style.display = "block";
  } else {
    expandDiv.style.display = "none";
  }
});

const cardContainer = document.getElementById("cardContainer");

const imageArrowRightPath = require("../../public/arrowright.svg");
window.showPopuOnHowDoesItWorkLearnMore = showPopupCardShow;
function showPopupCardShow(id) {
  // alert("Popup is shown! " + id);
  const popupWindow = document.getElementById('popupWindow');
  const closeBtn = document.getElementById('popupCloseButton');
  const bodyContainer = document.getElementById('bodyContainer');
  const popWindowTitle = document.getElementById('popWindowTitle');
  const popWindowDetails = document.getElementById('popWindowDetails');
  const filteredCards = cardDataHowDoesItWork.filter(card => card.id === id);
if(filteredCards.length > 0 && filteredCards[0] !== undefined && filteredCards[0].cardPop !== null){
  popWindowTitle.innerHTML = filteredCards[0].cardPop.title;
  popWindowDetails.innerHTML = filteredCards[0].cardPop.detail;
}
  // Show the popup window
  popupWindow.style.display = 'block';

  // Add blur effect to the background
  bodyContainer.classList.add('blur-background');

  // Close the popup window when the close button is clicked
  closeBtn.addEventListener('click', () => {
    popupWindow.style.display = 'none';
    bodyContainer.classList.remove('blur-background');
  });
}

// Loop through the card data and create HTML for each card
cardDataHowDoesItWork.forEach((card) => {
  const cardHTML = `
        <div
            class="p-3 sm:w-[26.5rem] flex flex-col items-start justify-start gap-[1.5rem] border-[1px] border-solid border-neutral-300"
          >
            <!-- Box 1 content here -->
            <div class="text-[1.5rem] sm:text-[ 2 rem]">${card.title}</div>
            <div
              class="self-stretch relative text-[1rem] leading-[180%] text-neutral-700 line-clamp-2"
            >
             ${card.description}
            </div>
            <button
              class="cursor-pointer py-[1rem] px-[2rem] bg-[transparent] rounded-81xl flex flex-row items-center justify-start gap-[1rem] border-[1px] border-solid border-neutral-600"
              onclick="showPopuOnHowDoesItWorkLearnMore(${card.id})"  >
              <b
                class="relative text-[1rem] leading-[150%] font-h3 text-neutral-100 text-center"
                >Learn more</b
              >
              <img
                class="relative w-[1rem] h-[1rem]"
                alt=""
                src="${imageArrowRightPath}"
              />
            </button>
          </div>`;

  // Append the card HTML to the card container
  cardContainer.innerHTML += cardHTML;
});

const faqContainer = document.getElementById("faqContainer");

const imageMinusPath = require("../../public/minus.svg");
const imagePlusPath = require("../../public/plus.svg");
function createFAQSections() {
  faqContainer.innerHTML = ""; // Clear existing content

  faqData.forEach((faq, index) => {
    const faqSection = document.createElement("div");
    faqSection.classList.add(
      "faq-section",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "text-lg",
      "text-neutral-400"
    );

    const questionElement = document.createElement("div");
    questionElement.classList.add("faq-question", "flex-1", "text-white");
    questionElement.textContent = faq.question;

    const toggleButton = document.createElement("div");
    toggleButton.classList.add("toggle-button", "p-2");

    const minusIcon = document.createElement("img");
    minusIcon.classList.add("toggle-icon", "w-6", "h-6");
    minusIcon.src = imageMinusPath;

    const plusIcon = document.createElement("img");
    plusIcon.classList.add("toggle-icon", "w-6", "h-6", "hidden");
    plusIcon.src = imagePlusPath;

    toggleButton.appendChild(minusIcon);
    toggleButton.appendChild(plusIcon);

    const questionContainer = document.createElement("div");
    questionContainer.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "py-4",
      "text-[1rem]",
      "sm:text-[1.5rem]"
    );
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(toggleButton);

    const detailsElement = document.createElement("div");
    detailsElement.classList.add(
      "faq-details",
      "w-full",
      "border-b",
      "border-solid",
      "border-neutral-600",
      "p-4"
    );
    detailsElement.innerHTML = faq.details;

    faqSection.appendChild(questionContainer);
    faqSection.appendChild(detailsElement);

    // Add event listener to toggle the FAQ details
    toggleButton.addEventListener("click", () => {
      detailsElement.classList.toggle("hidden");
      minusIcon.classList.toggle("hidden");
      plusIcon.classList.toggle("hidden");
    });

    faqContainer.appendChild(faqSection);
  });
}

// Create FAQ sections
createFAQSections();
