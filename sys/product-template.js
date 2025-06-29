var htmlWrapper = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <title>Product Newsletter</title>
    <style>
        @media (max-width: 600px) {
            .responsive-tds {
              display: inline-block;
              width: 100%;
            }
        }
        table,tbody,td {
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <div style="margin: 0 auto; font-size: 12px; text-align: right; max-width: 600px;">
        <p id="preview-text" style="margin: 0; padding: 0; display: none;">June 2025 Recommendation Games Newsletter</p>
        <p id="cant-see-email" style="color: #808080; margin: 0; padding: 0;">Can't see email?</p>
        <a id="alt-link" href="http://188affiliates.com/newsletter/new-game-feature-2025/th-th/alternate/06_June/en-th_games-template.html" style="color: #FF8A00;">Click here</a>
    </div>

</body>
</html>`
  
  
  
//Input Card Builder
function createComponentInputCard(cardCount) {

    //create parent div
    const parentDiv = document.createElement('div');
    parentDiv.id = 'card-' + cardCount;
    parentDiv.className = 'flex flex-col bg-neutral-800 p-4 rounded-md mb-2';
    parentDiv.setAttribute('data-id', 'component-' + cardCount)

    //create container for input textbox
    const inputContainer = document.createElement('div');
    inputContainer.id = 'products-content';
    inputContainer.className = 'grid grid-cols-2 gap-4';
    parentDiv.appendChild(inputContainer);

    //create input textboxes
    const gameBannerInput = document.createElement('input');
    gameBannerInput.id = 'game-banner-input-' + cardCount;
    gameBannerInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameBannerInput.setAttribute('placeholder' ,'Banner Image Link');
    gameBannerInput.setAttribute('type', 'text');
    gameBannerInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameBannerInput);

    const gameIconInput = document.createElement('input');
    gameIconInput.id = 'game-icon-input-' + cardCount;
    gameIconInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameIconInput.setAttribute('placeholder' ,'Icon Image Link');
    gameIconInput.setAttribute('type', 'text');
    gameIconInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameIconInput);
    
    const gameProviderInput = document.createElement('input');
    gameProviderInput.id = 'game-provider-input-' + cardCount;
    gameProviderInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameProviderInput.setAttribute('placeholder' ,'Game Provider');
    gameProviderInput.setAttribute('type', 'text');
    gameProviderInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameProviderInput);
    
    const gameTitleInput = document.createElement('input');
    gameTitleInput.id = 'game-title-input-' + cardCount;
    gameTitleInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameTitleInput.setAttribute('placeholder' ,'Game Title');
    gameTitleInput.setAttribute('type', 'text');
    gameTitleInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameTitleInput);
    
    const gameDescriptionInput = document.createElement('input');
    gameDescriptionInput.id = 'game-description-input-' + cardCount;
    gameDescriptionInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameDescriptionInput.setAttribute('placeholder' ,'Game Description');
    gameDescriptionInput.setAttribute('type', 'text');
    gameDescriptionInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameDescriptionInput);
    
    const gameButtonTextInput = document.createElement('input');
    gameButtonTextInput.id = 'game-button-text-input-' + cardCount;
    gameButtonTextInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameButtonTextInput.setAttribute('placeholder' ,'Button Text');
    gameButtonTextInput.setAttribute('type', 'text');
    gameButtonTextInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameButtonTextInput);
    
    const gameButtonLinkInput = document.createElement('input');
    gameButtonLinkInput.id = 'game-button-link-input-' + cardCount;
    gameButtonLinkInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gameButtonLinkInput.setAttribute('placeholder' ,'Button Link');
    gameButtonLinkInput.setAttribute('type', 'text');
    gameButtonLinkInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gameButtonLinkInput);
    
    const gamePreviewInput = document.createElement('input');
    gamePreviewInput.id = 'game-preview-input-' + cardCount;
    gamePreviewInput.className = 'rounded-[4px] p-2 h-10 grow outline-none font-medium text-xs bg-white placeholder:text-gray-500';
    gamePreviewInput.setAttribute('placeholder' ,'Preview Image Link');
    gamePreviewInput.setAttribute('type', 'text');
    gamePreviewInput.setAttribute('autocomplete', 'off');
    inputContainer.appendChild(gamePreviewInput);

    //create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'deleteBtn';
    deleteBtn.className = 'bg-red-500 rounded-[4px] p-2 font-medium text-xs text-white h-fit hover:bg-red-700 cursor-pointer mt-4';
    deleteBtn.textContent = 'DELETE';
    parentDiv.appendChild(deleteBtn);

    return parentDiv;
}

//Input textbox listeners
//This function is connected to Input Card builder
function inputBox(currentCount) {
    //Banner
    let gameBannerInput = document.getElementById('game-banner-input-' + currentCount)
    gameBannerInput.addEventListener('input', () => {
      document.getElementById('game-banner-' + currentCount).src = gameBannerInput.value
    })
  
    //Icon
    let gameIconInput = document.getElementById('game-icon-input-' + currentCount)
    gameIconInput.addEventListener('input', () => {
      document.getElementById('game-icon-' + currentCount).src = gameIconInput.value
    })
  
    //Provider
    let gameProviderInput = document.getElementById('game-provider-input-' + currentCount)
    gameProviderInput.addEventListener('input', () => {
      document.getElementById('game-provider-' + currentCount).textContent = gameProviderInput.value
    })
  
    //Title
    let gameTitleInput = document.getElementById('game-title-input-' + currentCount)
    gameTitleInput.addEventListener('input', () => {
      document.getElementById('game-title-' + currentCount).textContent = gameTitleInput.value
    })
  
    //Description
    let gameDescriptionInput = document.getElementById('game-description-input-' + currentCount)
    gameDescriptionInput.addEventListener('input', () => {
      document.getElementById('game-description-' + currentCount).textContent = gameDescriptionInput.value
    })
  
    //Button Text
    let gameButtonTextInput = document.getElementById('game-button-text-input-' + currentCount)
    gameButtonTextInput.addEventListener('input', () => {
      document.getElementById('game-button-text-' + currentCount).textContent = gameButtonTextInput.value
    })
  
    //Button Link
    let gameButtonLinkInput = document.getElementById('game-button-link-input-' + currentCount)
    gameButtonLinkInput.addEventListener('input', () => {
      document.getElementById('game-button-link-' + currentCount).href = gameButtonLinkInput.value
    })
  
    //Preview
    let gamePreviewInput = document.getElementById('game-preview-input-' + currentCount)
    gamePreviewInput.addEventListener('input', () => {
      document.getElementById('game-preview-' + currentCount).src = gamePreviewInput.value
    })
}

//Component Builder (Table)
function createProductsComponent(compCount) {
    // Create outer <table>
    const table = document.createElement('table');
    table.id = 'component-' + compCount;
    table.style.margin = '20px auto';
    table.style.width = '100%';
    table.style.maxWidth = '600px';
    table.style.color = '#000000';
    table.style.borderRadius = '0 0 8px 8px';
    table.style.overflow = 'hidden';
    table.setAttribute('width', '600');

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // Top image row
    const row1 = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.setAttribute('colspan', '2');

    const topImg = document.createElement('img');
    topImg.id = 'game-banner-' + compCount;
    topImg.src = 'https://www.sbbanner.com/newsletter/newsletter-template-2025/chess/1136x528-lezi-niu-niu.png';
    topImg.style.width = '100%';
    topImg.style.minWidth = '240px';
    topImg.style.maxWidth = '600px';
    topImg.style.display = 'block';
    topImg.setAttribute('width', '600');

    cell1.appendChild(topImg);
    row1.appendChild(cell1);
    tbody.appendChild(row1);

    // Main content row
    const row2 = document.createElement('tr');

    // Left content (text + CTA)
    const leftTd = document.createElement('td');
    leftTd.className = 'responsive-tds';
    leftTd.style.backgroundColor = '#000000';
    leftTd.style.verticalAlign = 'top';

    const innerTable = document.createElement('table');
    const innerTbody = document.createElement('tbody');
    innerTable.appendChild(innerTbody);

    const innerRow = document.createElement('tr');
    const imgCell = document.createElement('td');
    imgCell.style.padding = '15px 0 0 15px';

    const gameImg = document.createElement('img');
    gameImg.id = 'game-icon-' + compCount;
    gameImg.src = 'https://www.sbbanner.com/newsletter/newsletter-template-2025/chess/320x320-lezi-niu-niu.jpg';
    gameImg.style.width = '80px';
    gameImg.style.height = '80px';
    gameImg.style.borderRadius = '8px';
    gameImg.style.marginRight = '15px';
    gameImg.style.minWidth = '80px';
    gameImg.setAttribute('width', '80');
    gameImg.setAttribute('height', '80');

    imgCell.appendChild(gameImg);

    const textCell = document.createElement('td');
    textCell.style.width = '100%';

    const textWrapper = document.createElement('div');
    textWrapper.style.verticalAlign = 'top';

    const provider = document.createElement('p');
    provider.id = 'game-provider-' + compCount;
    provider.style.margin = '0 0 5px 0';
    provider.style.padding = '0';
    provider.style.color = 'dimgray';
    provider.textContent = 'Pragmatic Play';

    const gameTitle = document.createElement('p');
    gameTitle.id = 'game-title-' + compCount;
    gameTitle.style.margin = '0 0 15px 0';
    gameTitle.style.padding = '0';
    gameTitle.style.color = '#FFFFFF';
    gameTitle.textContent = 'Xiao Xiao';

    const ctaLink = document.createElement('a');
    ctaLink.id = 'game-button-link-' + compCount;
    ctaLink.href = 'https://www.188bet.com/';
    ctaLink.style.textDecoration = 'none';

    const ctaButton = document.createElement('div');
    ctaButton.id = 'game-button-text-' + compCount;
    ctaButton.style.color = 'white';
    ctaButton.style.fontSize = '14px';
    ctaButton.style.fontWeight = '600';
    ctaButton.style.padding = '6px';
    ctaButton.style.backgroundColor = '#FF8A00';
    ctaButton.style.borderRadius = '4px';
    ctaButton.style.width = 'fit-content';
    ctaButton.style.backgroundImage = 'linear-gradient(to bottom, #FF9200, #FF710D, #FF6A00)';
    ctaButton.textContent = 'PLAY NOW';

    ctaLink.appendChild(ctaButton);

    textWrapper.appendChild(provider);
    textWrapper.appendChild(gameTitle);
    textWrapper.appendChild(ctaLink);

    textCell.appendChild(textWrapper);

    innerRow.appendChild(imgCell);
    innerRow.appendChild(textCell);
    innerTbody.appendChild(innerRow);

    // NEW: Bottom text row under left column
    const descriptionRow = document.createElement('tr');
    const descriptionTd = document.createElement('td');
    descriptionTd.setAttribute('colspan', '2');
    descriptionTd.style.minWidth = '250px';

    const descriptionText = document.createElement('p');
    descriptionText.id = 'game-description-' + compCount;
    descriptionText.style.textAlign = 'justify';
    descriptionText.style.color = '#FFFFFF';
    descriptionText.style.padding = '0 15px';
    descriptionText.textContent = 'Zeus is back for his biggest game yet in Gates of Olympus Super Scatter. Brand-new in this game are Super Scatters.'; // ← You can change this dynamically

    descriptionTd.appendChild(descriptionText);
    descriptionRow.appendChild(descriptionTd);
    innerTbody.appendChild(descriptionRow);

    leftTd.appendChild(innerTable);

    // Right content (preview image)
    const rightTd = document.createElement('td');
    rightTd.className = 'responsive-tds';
    rightTd.style.backgroundColor = '#000000';

    const rightDiv = document.createElement('div');
    rightDiv.style.padding = '15px';

    const previewImg = document.createElement('img');
    previewImg.id = 'game-preview-' + compCount;
    previewImg.src = 'https://www.sbbanner.com/newsletter/newsletter-template-2025/live-casino/1176x973-baccarat.png';
    previewImg.style.width = '100%';
    previewImg.style.minWidth = '250px';
    previewImg.style.maxWidth = '450px';
    previewImg.setAttribute('width', '300');

    rightDiv.appendChild(previewImg);
    rightTd.appendChild(rightDiv);

    row2.appendChild(leftTd);
    row2.appendChild(rightTd);
    tbody.appendChild(row2);

    return table;
}