//Declare all variables here
const templateSelection = document.getElementById('template-selection');
const langSelection = document.getElementById('lang');
const downloadBtn = document.getElementById('download');
const inputContainer = document.getElementById('input-objects-container');
const NLContainer = document.getElementById('nl-container');

//lang
let currentCantSeeEmail = '';
let currentClickHere = '';

//Pretext and Alt Links
let currentPreText = '';
let currentAltLink = '';

//Products variables
let cardCount = 0; 
let compCount = 0;

//Products Input
const productsCard = `<div id="products-input" class="flex flex-col gap-y-2 h-full overflow-scroll">
                        <div class="bg-neutral-800 p-4 rounded-md grid grid-cols-2 gap-4">
                          <input id="pre-text-input" type="text" class="rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500" placeholder="Preview Text" autocomplete="off">
                          <input id="alt-link-input" type="text" class="rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500" placeholder="Alternative Link" autocomplete="off">
                        </div>
                        <div id="cards-container"></div>
                        <button id="addBtn" class="bg-[#ff8906] rounded-[4px] p-2 font-medium text-xs text-white h-fit w-full hover:bg-[#ec7f10] cursor-pointer absolute bottom-0">ADD NEW GAME</button>
                      </div>`

//Functions
langSelection.addEventListener('change', () => {
  switch(langSelection.value) {
    case 'en-gb':
      currentCantSeeEmail = 'Can\'t see email?';
      currentClickHere = 'Click here';
      break;
    case 'zh-cn':
      currentCantSeeEmail = '若无法查看内容';
      currentClickHere = '请点击这里';
      break;
    case 'vi-vn':
      currentCantSeeEmail = 'Nếu Quý Khách không thể xem email dưới đây,';
      currentClickHere = '&#40;xin nhấn vào đây&#41;';
      break;
    case 'th-th':
      currentCantSeeEmail = 'คุณกำลังมีปัญหารูปไม่แสดงใช่ไหม ? คลิกเพื่อรับชม';
      currentClickHere = '(ที่นี่)';
      break;
    case 'ko-kr':
      currentCantSeeEmail = '이메일 내용을 확인할 수 없나요?';
      currentClickHere = '클릭해서 확인하세요.';
      break;
    case 'id-id':
      currentCantSeeEmail = 'Tidak dapat melihat email ini,';
      currentClickHere = 'klik di sini';
      break;
    case 'km-kh':
      currentCantSeeEmail = 'មានបញ្ហាមើលអ៊ីម៉ែលរឺ?សូមចូលទៅកាន់ទំព័រវេបសាយ';
      currentClickHere = '(នៅទីនេះ)';
      break;
    case 'ja-jp':
      currentCantSeeEmail = 'メールが見られませんか？';
      currentClickHere = 'こちらをクリック';
      break;
    case 'hi-in':
      currentCantSeeEmail = 'Can\'t see email?';
      currentClickHere = 'Click here';
      break;

  }
})

templateSelection.addEventListener('change', () => {
  switch(templateSelection.value) {
      case 'products': 
          inputContainer.innerHTML = productsCard;

          let PreText = document.getElementById('pre-text-input');
          let AltLink = document.getElementById('alt-link-input');
          PreText.addEventListener('input', () => {
            currentPreText = PreText.value;
          })
          AltLink.addEventListener('input', () => {
            currentAltLink = AltLink.value;
          })
          
          //listener for Add button
          inputContainer.addEventListener('click', (e) => {
              if (e.target && e.target.id === 'addBtn') {

                cardCount += 1; // Increment once and store it
                let currentCardCount = cardCount; // Save this value

                compCount += 1; // Increment once and store it
                let currentCompCount = compCount; // Save this value
                
                const cardContainer = document.getElementById('cards-container');
                if (cardContainer) {
                  cardContainer.appendChild(createComponentInputCard(currentCardCount));
                }

                // Add another product component dynamically
                NLContainer.appendChild(createProductsComponent(currentCompCount));

                inputBox(currentCardCount)
              }

              if (e.target && e.target.id === 'deleteBtn') {
                  const cardContainer = document.getElementById('cards-container');
                  cardContainer.removeChild(e.target.parentElement);

                  // Optional: remove the last product component
                  // if (NLContainer.lastElementChild) {
                  //     NLContainer.removeChild(NLContainer.lastElementChild);
                  // }

                  Array.from(NLContainer.children).forEach(child => {
                    if(e.target.parentElement.dataset.id === child.id) {
                      NLContainer.removeChild(child)
                    };
                  });
                  
                  
              }
          });
          
          break;
  }
});

//Parse function
function DomParser(contentToParse, componentToParse, cantSeeEmailVal, clickHereVal, pretext, altlink) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(contentToParse, "text/html");

  //Update the cant-see-email
  const cantSeeEmail = doc.getElementById('cant-see-email');
  if(cantSeeEmail) {
    cantSeeEmail.textContent = cantSeeEmailVal;
  }

  // Update the preview-text
  const previewText = doc.getElementById('preview-text');
  if (previewText) {
    previewText.textContent = pretext;
  }

  // Update the alternative link
  const altLink = doc.getElementById('alt-link');
  if (altLink) {
    altLink.href = altlink;
    altLink.innerText = clickHereVal;
  }

  // Insert a new <div> somewhere — here, at the end of <body>
  //const newDiv = doc.createElement("div");
  //newDiv.innerHTML = componentToParse;
  //doc.body.appendChild(newDiv);  // or insertBefore(...) if needed elsewhere

  doc.body.innerHTML += componentToParse;

  // Serialize the modified DOM back to an HTML string
  const updatedHtmlWrapper = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;

  // Now you can use updatedHtmlWrapper again — even multiple times
  return updatedHtmlWrapper;
}

//Download function
downloadBtn.addEventListener('click', () => {

  let x = DomParser(htmlWrapper, NLContainer.innerHTML, currentCantSeeEmail, currentClickHere, currentPreText, currentAltLink)

  let fileName = document.getElementById('filename').value;
  let blob = new Blob([x], {type: 'text/html'});
  let htmlFile = document.createElement('a');
  htmlFile.download = `${fileName}.html`;
  htmlFile.href = window.URL.createObjectURL(blob);
  htmlFile.click();
})