import '../styles/styles.css';
// var btn = document.getElementById("btn");
console.log('Hello world!');
// const onDivClick = () => {
//     console.log('div clicked');
//     }
// btn.addEventListener("click", onDivClick);

const footerData = {
    details:`<span
                >ReflectCE is a copyrighted activity & learning technology
                developed by
              </span>
              <b>SCAD Group Inc.</b>`,
    copyRight: `©2023 SCAD Group Inc. All right reserved.`,
    contact: `    For questions, please contact
              <span class="[text-decoration:underline]">info@reflectce.com</span>`,
    activityDetails: `     For Activity Details, please
              <span class="[text-decoration:underline]">visit this link</span>`
}
const footerDetails = document.getElementById("footerDetails");
const footerCopyRight = document.getElementById("footerCopyRight");
const footerContact = document.getElementById("footerContact");
const footerActivity = document.getElementById("footerActivity");
footerDetails.innerHTML=footerData.details;
footerCopyRight.innerHTML=footerData.copyRight;
footerContact.innerHTML=footerData.contact;
footerActivity.innerHTML=footerData.activityDetails;


      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");
      var learnMoreButton = document.getElementById("learnMoreButton");
      var expandDiv = document.getElementById("expand_learnMoreFirst");
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    //   var learnMoreButton = document.getElementById("learnMoreButton");
    //   var expandDiv = document.getElementById("expand_learnMoreFirst");
      var whatisReflectCEDetails = document.getElementById("whatisReflectCEDetails");
      var whatisReflectCETitle = document.getElementById("whatisReflectCETitle");
      var whatsisReflectCEsubCards = document.getElementById("whatsisReflectCEsubCards");
   const whatisReflectCEData= {
    title: "What is ReflectCE?",
    details: `ReflectCE is an accredited activity that brings learners
                right-place, right-time and self-directed reflective learning.
                Powered by human-centric AI and a growing array of 5000+
                connectors to real-life (and work) learning contexts, ReflectCE
                helps busy learners ubiquitously capture self-evaluations that
                described their understanding of an idea, assess its clinical
                relevance or professional impact to performance and draw meaning
                into clinical outcomes within their practice. In return,
                reflections result in continuing education credit.`,
    subCards:[
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
{title:"250+",details:'Reflection capture points across 5000+ learning contexts'},
    ]
   }  
                whatisReflectCEDetails.innerHTML=whatisReflectCEData.details;
                whatisReflectCETitle.textContent=whatisReflectCEData.title;



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
      const cardDataHowDoesItWork = [
          {
            id: 1,
            title: "Discover 1",
            description: "ReflectCE is designed on the principles of learner autonomy, contextual discovery, and supercharged meaning-making...",
          },
          {
            id: 2,
            title: "Discover 2",
            description: "ReflectCE is designed on the principles of learner autonomy, contextual discovery, and supercharged meaning-making...",
          },
        // Add more card objects as needed
      ];
      const cardContainer = document.getElementById("cardContainer");
  
    const imageArrowRightPath = require('../../public/arrowright.svg');
    window.showPopuOnHowDoesItWorkLearnMore = function(id) {
  // Code to show the popup
  // Replace the following line with your own popup logic
  alert('Popup is shown! ' + id);
};
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


      const faqContainer = document.getElementById('faqContainer');

// JSON data for FAQ
const faqData = [
  {
    question: '1I have claimed ReflectCE credits, now how do I generate my certificate?',
    details: ` <p>
                When you reflect, you’ll receive a link to your Learner Hub, where you can:
              </p>
              <ul class="pl-6">
                <li>See the total credits you’ve earned</li>
                <li>
                  A timeline of all your contextualized reflections (and some exciting superpowers coming to help you analyze, share, boost & plan your learning impact for work + life)
                </li>
                <li>Generate certificates & transcripts based on your reflections</li>
              </ul>`
  },
  {
    question: '2I have claimed ReflectCE credits, now how do I generate my certificate?',
    details: '2When you reflect, you’ll receive a link to your Learner Hub, where you can:\n\n- See the total credits you’ve earned\n- A timeline of all your contextualized reflections (and some exciting superpowers coming to help you analyze, share, boost & plan your learning impact for work + life)\n- Generate certificates & transcripts based on your reflections'
  },
  {
    question: '3I have claimed ReflectCE credits, now how do I generate my certificate?',
    details: '2When you reflect, you’ll receive a link to your Learner Hub, where you can:\n\n- See the total credits you’ve earned\n- A timeline of all your contextualized reflections (and some exciting superpowers coming to help you analyze, share, boost & plan your learning impact for work + life)\n- Generate certificates & transcripts based on your reflections'
  },
  // Add more FAQ items as needed
];
// Function to create FAQ sections

// <div class="flex flex-col items-center justify-center text-lg text-neutral-400">
//           <div class="flex items-center justify-between w-full py-4">
//             <div class="flex-1 text-white" id="faqQuetion">
//                ${faq.question}
//             </div>
//            <div id="toggleButton">
//             <img class="w-6 h-6" alt="" src="../../public/minus.svg" />
            
//             <img class="w-6 h-6" alt="" src="../../public/plus.svg" /></div> 
//           </div>
//           <div class="w-full border-b border-solid border-neutral-600" id="faqDetails">
//             <div class="p-4">
//               ${faq.details}
//             </div>
//           </div>
//         </div>



const imageMinusPath = require('../../public/minus.svg');
const imagePlusPath = require('../../public/plus.svg');
function createFAQSections() {
  faqContainer.innerHTML = ''; // Clear existing content
  
  faqData.forEach((faq, index) => {
    const faqSection = document.createElement('div');
    faqSection.classList.add('faq-section','flex','flex-col','items-center','justify-center','text-lg','text-neutral-400');

 
    
    const questionElement = document.createElement('div');
    questionElement.classList.add('faq-question','flex-1', 'text-white');
    questionElement.textContent = faq.question;

    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle-button','p-2');

    const minusIcon = document.createElement('img');
    minusIcon.classList.add('toggle-icon','w-6','h-6');
    minusIcon.src = imageMinusPath;

    const plusIcon = document.createElement('img');
    plusIcon.classList.add('toggle-icon','w-6','h-6', 'hidden');
    plusIcon.src = imagePlusPath;

    toggleButton.appendChild(minusIcon);
    toggleButton.appendChild(plusIcon);

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('flex', 'items-center', 'justify-between', 'w-full', 'py-4','text-[1rem]','sm:text-[1.5rem]');
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(toggleButton);

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('faq-details','w-full','border-b','border-solid','border-neutral-600','p-4');
    detailsElement.innerHTML = faq.details;

    faqSection.appendChild(questionContainer);
    faqSection.appendChild(detailsElement);

    // Add event listener to toggle the FAQ details
    toggleButton.addEventListener('click', () => {
      detailsElement.classList.toggle('hidden');
      minusIcon.classList.toggle('hidden');
      plusIcon.classList.toggle('hidden');
    });

    faqContainer.appendChild(faqSection);
  });
}

// Create FAQ sections
createFAQSections();
