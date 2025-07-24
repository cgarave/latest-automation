const image_lib = {
    china: ['https://doc.188contents.com/star4-content/images/banners/promotion/2022-08-Aug/FTDP-0822/FTDP-0822-1.jpg',
            'https://doc.188contents.com/star4-content/images/banners/promotion/2022-08-Aug/FTDP-0822/FTDP-0822-2.jpg',
            'https://doc.188contents.com/star4-content/images/banners/promotion/2022-08-Aug/FTDP-0822/FTDP-0822-1-cn.jpg',
            'https://doc.188contents.com/star4-content/images/banners/promotion/2022-08-Aug/FTDP-0822/FTDP-0822-2-cn.jpg',
            'https://doc.188contents.com/star4-content/images/banners/promotion/2024-06-Jun/REDP-0624/en-gb_tnc_image.png',
            'https://doc.188contents.com/star4-content/images/banners/promotion/2024-06-Jun/REDP-0624/zh-cn_tnc_image.png',
            'https://doc.188contents.com/star4-content/templates/promotions/images/en-USDT.png',
            'https://doc.188contents.com/star4-content/templates/promotions/images/cn-USDT.png',
            ],
    indonesia: ['https://doc.188contents.com/star4-content/images/banners/promotion/2025-03-Mar/BDAYPROMO-0225/BDAYPROMO-0225.png?v=7',
                'https://doc.188contents.com/star4-content/images/banners/promotion/2024-06-Jun/EUROREDEPOLEJ-0624/EUROREDEPOLEJ-0624-image01.webp'
            ]
}
document.getElementById('zh-image-array-container').innerHTML = `${image_lib.china.map(chinaAssets => `<img src="${chinaAssets}" class="zh-image rounded-md hover:border-2 border-[#ff9200] cursor-pointer">`).join('')}`
document.getElementById('id-image-array-container').innerHTML = `${image_lib.indonesia.map(indonesiaAssets => `<img src="${indonesiaAssets}" class="id-image rounded-md hover:border-2 border-[#ff9200] cursor-pointer">`).join('')}`

//This is for game components
//table
let gameCodes = document.getElementById('input-game-codes'); //variable that stores inputed game codes from the 'Component' buttons
let gameTitle = document.getElementById('input-game-title');
let gameProduct = document.getElementById('input-game-product');
let numberOfGames = document.getElementById('input-numberOf-games');
let editedNumberInput = document.getElementById('input-number');

// Creating a custom plugin: use PluginManager.add then connect sa plugins and contextmenu
tinymce.PluginManager.add('customcontextmenu', function(editor) {
    editor.addMenuItem('editNumbering', {
      text: 'Edit Numbering',
      context: 'contextmenu',
      onclick: function() {
        const editNumberBtn = document.getElementById('editNumberBtn');
        const cancelEditNumberBtn = document.getElementById('cancelEditNumberBtn');
        const editedNumberContainer = document.getElementById('edit-numbering-container');
        const selectedNode = editor.selection.getNode(); //returning selected Nodes gaya ng <p>, <li>, etc.
        editedNumberContainer.classList.remove('hidden');
        editedNumberInput.focus();
        editNumberBtn.onclick = () => { //I used onclick instead of addEventListener kasi nasa loob na ito ng function. The button fires twice once clicked when addEventListener were used thus making weird errors
            if (selectedNode.parentElement.nodeName === 'OL') {
                // You can add additional logic here for when the parent node is an <ol>
                editor.dom.setAttrib(selectedNode.parentElement, 'start', editedNumberInput.value);
                editedNumberContainer.classList.add('hidden');
                editedNumberInput.value = ''
                console.log('The selected node is an ordered list (OL)');
            } else if (selectedNode.parentElement.parentElement.nodeName === 'OL') {
                // You can add additional logic here for when the parent node is an <ol>
                editor.dom.setAttrib(selectedNode.parentElement.parentElement, 'start', editedNumberInput.value);
                editedNumberContainer.classList.add('hidden');
                editedNumberInput.value = ''
            } else {
                console.log(selectedNode.parentElement);
                editedNumberInput.value = ''
                editedNumberContainer.classList.add('hidden');
            }
        }
        cancelEditNumberBtn.onclick = () => {
            editedNumberInput.value = ''
            editedNumberContainer.classList.add('hidden');
        }
      }
    });
  });

//tinymce init (this is where you customize the editor)
tinymce.init({
    selector: '#mytextarea, #mytextarea2', //selecting two editor
    plugins: 'advlist lists code table image link paste noneditable textcolor contextmenu customcontextmenu',
    toolbar: 'code table | numlist bullist | image link | indent outdent | alignleft aligncenter alignright alignjustify | forecolor bold italic underline strikethrough superscript | insertWidget | insertImage | insertRecommendedTable | insertRecommendedList',
    contextmenu: 'editNumbering link image',
    menubar: false,  // Disable the menubar entirely
    //editable_class: 'mceEditable',  //editable class tinymce 7
    //noneditable_class: 'non-editable', //non-editable class tinymce 7
    noneditable_editable_class: 'mceEditable', //editable class tinymce 4 & 5
    noneditable_noneditable_class: 'non-editable', //non-editable class tinymce 4 & 5
    fix_list_elements: true,
    advlist_bullet_styles: 'disc', //limit the bullet option to disc only
    advlist_number_styles: 'default,lower-alpha,lower-roman', //limit the list option to three options only
    paste_merge_formats: true,
    paste_data_images: false, //disable paste of local image
    image_description: false, //disable image description input
    image_dimensions: false, //disable image dimension input
    table_resize_bars: false, //disable resize bars
    object_resizing: 'img', //disable table resizing
    link_title: false, //disable link title
    target_list: false, //disable link target
    encoding: 'xml',
    element_format: 'html',
    entity_encoding: 'raw',
    height: 700,
    width: 1000,
    statusbar: false, //disabling status bar
    protect: [ 
        //protects the codes from deletion when inserting content to the editors. Tinymce doesn't accept these type of codes and will delete upon importing unless declared to protect plugin.
        //init codes
        /<script src="https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/3.6.0\/jquery.min.js"><\/script>/g,
        /<script>\$\(function \(\) { \$\("#webteam-ss"\).attr\("href", "https:\/\/doc.188contents.com\/contents\/Components\/webteam\/webteam.css\?" \+ \$.now\(\)\); }\);<\/script>/g,
        /<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g,
        /<template #header>/g,
        /<\/template>/g,
        /<template #content>/g,
        /<\/SExpansionPanel>/g,
        /<IncludeContent :url="promoDetail.termsTpl"><\/IncludeContent>/g,

        //where to find sportsbook free bet component
        /<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/><\/IncludeContent>/g,
        /<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/><\/IncludeContent>/g,
        /<IncludeContent(.*?)>\s*<\/IncludeContent>/g,

        //custom games
        /<CustomGames product="casino" title="(.*?)" games="(.*?)" type="table" class="tnc-multiple-games" :limit="(.*?)"><\/CustomGames>/g,
        /<CustomGames product="live"  title="(.*?)" games="(.*?)" show-game-subtitle type="table"><\/CustomGames>/g,

        //init codes - import
        /<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g,
        /<template #header="">/g,
        /<template #content="">/g,
        /<\/sexpansionpanel>/g,
        /<includecontent :url="promoDetail.termsTpl"><\/includecontent>/g,

        //where to find sportsbook free bet component - import
        /<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, //without space
        /<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, //without space
        /<includecontent(.*?)>\s*<\/includecontent>/g,

        //custom games - import
        /<customgames(.*?)>\s*<\/customgames>/g,

        //vue href
        /<a :href="(.*?)">/g,
    ], 
    link_list: [
        { title: 'Promotion General Terms and Conditions', value: 'https://www.taptap.asia/en-gb/promotions#promo_gen_terms' },
        { title: 'Standard Terms and Conditions', value: 'https://www.taptap.asia/en-gb/corporate-affairs/terms-and-conditions' },
    ],
    content_style: `
                  body {
                    padding: 20px;
                    font-size: 12px;
                  }
                  h2 {
                    font-size: 14px;
                  }
                  table {
                    width: 100%;
                    text-align: center;
                    table-layout: fixed;
                  }
                  img {
                    max-width: 800px;
                    height: auto;
                    margin: 10px auto;
                    display: block;
                  }`,

    setup: function (editor) {
        //BeforeSetContent controls all the set contents before it appears on the editor
        //This is useful when you want to change something upon importing of the file
        editor.on('BeforeSetContent', function (event) {
            event.content = event.content
            .replaceAll('</ol><ul>', '')
            .replaceAll('</ul><ol>', '')
            .replace(/<p(.*?)> <\/p>/g, '<br>')

            //this section is for removing unnecessary html elements exported from my old automation
            .replace(/<div id="(.*?)" class="hidden" style="visibility: hidden; display: none;">1<\/div>/g, '')
            .replace(/<div id="(.*?)" class="hidden" style="visibility: hidden;">1<\/div>/g, '')


            //this removes the span shits that occurs when a user copy/paste text from sharepoint link
            .replace(/<span data-contrast="(.*?)">/g, '')
            .replace(/<span data-fontsize="(.*?)">/g, '')
            .replace(/<span data-ccp-props="(.*?)">/g, '')
            .replace(/<span data-ccp-charstyle="(.*?)">/g, '')
            .replace(/<span data-ccp-parastyle="(.*?)">/g, '')
            .replace(/<span class="(.*?)" lang="(.*?)" xml:lang="(.*?)" data-contrast="(.*?)">/g, '')
            // .replace(/<span class="(.*?)">/g, '')
            .replace(/<span class="(.*?)" data-ccp-props="(.*?)"> /g, '')
            .replace(/<tr(.*?)>/g, '<tr>')
            .replace(/data-celllook="(.*?)"/g, '')
            .replaceAll('<em>', '')
            .replaceAll('</em>', '')
            
            //imported IncludeContent
            //indonesia
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202505\/en-gb_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202505\/en-gb_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202505\/id-id_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202505\/id-id_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202507\/en-id_188DAYBLUE-0824_where-to-find-your-lotto-free-bet.html'">\s*<\/includecontent>/g, '<h5 id="en-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Lotto Free Bet?</h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202507\/id-id_188DAYBLUE-0824_where-to-find-your-lotto-free-bet.html'">\s*<\/includecontent>/g, '<h5 id="id-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet Lotto?</h5><br>')
            //japan
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツ専用フリーベットはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">How to use Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツブックのフリーベットの使い方<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">フリースピンはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" \/><\/IncludeContent></h5><br>')

            //finding imported game icon components then replace it with the editor component style
            //BACKUP.replace(/<div class="md:w-1\/2 w-full m-auto">\s*<customgames product="(.*?)" title="(.*?)" games="(.*?)" type="(.*?)" class="(.*?)" :limit="(.*?)">\s*<\/customgames>\s*<\/div>/g, '<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">$1</td></tr><tr><td>$2</td></tr><tr><td>$3</td></tr><tr><td style="display: none;">$4</td></tr></tbody></table><br>')
            .replace(/<div class="(.*?)">\s*<customgames product="(.*?)" title="(.*?)" games="(.*?)" type="(.*?)" class="(.*?)" :limit="(.*?)">\s*<\/customgames>\s*<\/div>/g, '<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">$1</td></tr><tr><td style="display: none;">$2</td></tr><tr><td>$3</td></tr><tr><td>$4</td></tr></tbody></table><br>')

            //imported game list convert to table again
            //live casino list
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-1" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">live</td></tr><tr><td>$2</td><td>$3</td><td>$5</td><td>$6</td><td>$7</td></tr></tbody></table><br>')
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-2" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">live</td></tr><tr><td>$2</td><td>$3</td><td>$5</td><td>$6</td><td>$7</td></tr><tr><td>$8</td><td>$9</td><td>$11</td><td>$12</td><td>$13</td></tr></tbody></table><br>')
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-3" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">live</td></tr><tr><td>$2</td><td>$3</td><td>$5</td><td>$6</td><td>$7</td></tr><tr><td>$8</td><td>$9</td><td>$11</td><td>$12</td><td>$13</td></tr><tr><td>$14</td><td>$15</td><td>$17</td><td>$18</td><td>$19</td></tr></tbody></table><br>')
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-4" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">live</td></tr><tr><td>$2</td><td>$3</td><td>$5</td><td>$6</td><td>$7</td></tr><tr><td>$8</td><td>$9</td><td>$11</td><td>$12</td><td>$13</td></tr><tr><td>$14</td><td>$15</td><td>$17</td><td>$18</td><td>$19</td></tr><tr><td>$20</td><td>$21</td><td>$23</td><td>$24</td><td>$25</td></tr></tbody></table><br>')
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/live\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="live" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-5" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">live</td></tr><tr><td>$2</td><td>$3</td><td>$5</td><td>$6</td><td>$7</td></tr><tr><td>$8</td><td>$9</td><td>$11</td><td>$12</td><td>$13</td></tr><tr><td>$14</td><td>$15</td><td>$17</td><td>$18</td><td>$19</td></tr><tr><td>$20</td><td>$21</td><td>$23</td><td>$24</td><td>$25</td></tr><tr><td>$26</td><td>$27</td><td>$29</td><td>$30</td><td>$31</td></tr></tbody></table><br>')
            //casino list
            .replace(/<scard class="my-4 bg-secondary">\s*<ssectionheading dark="" divider="" contained="" title-tag="h4">\s*<span class="text-subtitle-1">\s*(.*?)\s*<\/span>\s*<\/ssectionheading>\s*<slist>\s*<slistitem dark="" class="md:hover:bg-secondary--darken-4">\s*<template #prependavatar="">\s*<savatar src="https:\/\/doc.188contents.com\/star4-content\/images\/casino\/(.*?)\/(.*?)\/(.*?)-4x3-sm.webp" alt="(.*?)" size="40" class="!rounded-lg ml-6">\s*<\/savatar>\s*<\/template>\s*(.*?)\s*<template #appendaction="">\s*<gamelauncher v-slot="\{openGame\}" product="casino" game="(.*?)">\s*<sbutton @click="openGame\(\)" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">\s*(.*?)\s*<\/sbutton>\s*<sbutton @click="openGame\(\)" v-else="" dark="" icon-only="" flat="" rounded="" class="mr-6">\s*<sicon>\s*icon-arrow-right\s*<\/sicon>\s*<\/sbutton>\s*<\/gamelauncher>\s*<\/template>\s*<\/slistitem>\s*<\/slist>\s*<\/scard>/g, '<table id="game-list-1" class="non-editable"><tbody><tr><td colspan="5">$1</td></tr><tr><td colspan="5">casino</td></tr><tr><td>$2</td><td>$3</td><td>$6</td><td>$7</td><td>$8</td></tr></tbody></table><br>')

            //imported file links
            .replace(/<a :href="`(.*?)`">/g, '<a href="`$1`">')
            
            //imported tables
            .replaceAll('<div class="md:w-1/2 w-full m-auto">', '')
            .replaceAll('<div class="md:w-1/3 w-full m-auto">', '')
            .replace(/<div class="border rounded mb-4 table-responsive">\s*<table class="w-full border-collapse border-spacing-0 text-center">/g, '<table class="w-full border-collapse border-spacing-0 text-center">')
            .replace(/<\/table>\s*<\/div>/g, '</table>')

            //removing p tag inside td when copying texts from MS word
            .replace(/<td(.*?)>\s*<p(.*?)>/g, '<td $1>')
            .replace(/<\/p>\s*<\/td>/g, '</td>')

            //This section is to add the editable class to the imported file
            .replace(/<div id="(.*?)" class="tnc-content-wrap\s*">/g, '<div id="$1" class="tnc-content-wrap non-editable">')
            .replace(/<div class="contentwrap tnc-content-format\s*">/g, '<div class="contentwrap tnc-content-format non-editable">')

            // .replace(/<h2 class="mb-4 font-semibold text-body-1\s*">/g, '<h2 class="mb-4 font-semibold text-body-1 mceEditable">') //significant conditions title backup
            // .replaceAll('<div class="">', '<div class="mceEditable">')

            //this supports the importing of old automations
            //adding editable class for significant contents
            .replaceAll('<div class="">', '')
            .replace(/<h2 class="mb-4 font-semibold text-body-1\s*">(.*?)<\/h2>/g, '<h2 class="mb-4 font-semibold text-body-1 mceEditable">$1</h2><div class="mceEditable">')

            .replace(/<h2 class="m-4 font-semibold text-body-1\s*">/g, '<h2 class="m-4 font-semibold text-body-1 mceEditable">') //full promotion title
            .replace(/<div class="full-promotion-content\s*">/g, '<div class="full-promotion-content mceEditable">') //full promotion content
            
            if(event.content.match(/<div class="mceEditable">/g)){ 
                //fixes the issues when importing full promotion only template. It will add </div> at the start of SExpansionPanel when the imported content has Significant Conditions
                event.content = event.content
                .replace(/<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')
                .replace(/<\/div>\s*<\/div>\s*<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')
            }
            //console.log(event.content);
        });

        //This function is for tinymce 4 only. version 5 and above have a different function for adding custom toolbar buttons lol
        editor.addButton('insertImage', {
            text: 'Image Library',  // Text on the button
            icon: 'image',  // Set an icon (optional)
            onclick: function() {
                // Action to perform when the button is clicked
                document.getElementById('insert-image-container').classList.remove('hidden');
                document.getElementById('close-insert-image-container').onclick = () => document.getElementById('insert-image-container').classList.add('hidden');

                //China click listener
                document.querySelectorAll('.zh-image').forEach(zh => {
                    zh.onclick = () => editor.insertContent(`<img src="${zh.src}"><br>`)
                })
                //Indonesia click listener
                document.querySelectorAll('.id-image').forEach(id => {
                    id.onclick = () => editor.insertContent(`<img src="${id.src}"><br>`)
                })
            }
        });

        editor.addButton('insertRecommendedTable', {
            text: 'Insert Recommended Games Table',  // Text on the button
            onclick: function() {
                const gameCodesInsertBtn = document.getElementById('gameCodesInsertBtn');
                const gameCodesInput = document.getElementById('input-game-codes-container');
                const cancelGameCodesBtn = document.getElementById('cancelGameCodesBtn');
                gameCodesInput.classList.remove('hidden');
                
                gameCodesInsertBtn.onclick = () => { //onclick resolves the issue of duplicating click event when insert button is clicked using addEventListener
                    document.getElementById('input-game-codes-container').classList.add('hidden');
                    editor.insertContent(`<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">${numberOfGames.value}</td></tr><tr><td style="display: none;">${gameProduct.value}</td></tr><tr><td>${gameTitle.value}</td></tr><tr><td>${gameCodes.value}</td></tr></tbody></table><br>`)
                }
                cancelGameCodesBtn.onclick = () => {
                    gameCodesInput.classList.add('hidden');
                }
            }
        });

        editor.addButton('insertRecommendedList', {
            text: 'Insert Recommended Games List',  // Text on the button
            onclick: function() {

                //variables for card, dropdown, insert/cancel button
                const gameListInput = document.getElementById('input-game-list-container');
                const numberOfListGames = document.getElementById('input-list-numberOf-games');
                const gameListInsertBtn = document.getElementById('gameListInsertBtn');
                const cancelGameListBtn = document.getElementById('cancelGameListBtn');
                gameListInput.classList.remove('hidden');
                

                numberOfListGames.addEventListener('change', () => {
                    let selectedList = numberOfListGames.value;

                    switch(selectedList) {
                        case '1':
                            document.getElementById('div-list-container').innerHTML = gameListTemplates.list1;
                            gameListInsertBtn.onclick = () => {
                                let gameListTitle = document.getElementById('gameListTitle');
                                let gameProduct = document.getElementById('game-product');

                                let gameProvider = document.getElementById('game-provider-1');
                                let gameName = document.getElementById('game-name-1');
                                let gameImage = document.getElementById('game-image-1');
                                gameImage = gameImage.value.toLowerCase().replace(/\s+/g, '-').trim();
                                //let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode = document.getElementById('game-code-1');
                                let gameCTA = document.getElementById('cta-1');

                                tinymce.activeEditor.insertContent(`<table id="game-list-1" class="non-editable"><tbody><tr><td colspan="5">${gameListTitle.value}</td></tr><tr><td colspan="5">${gameProduct.value}</td></tr><tr><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr></tbody></table><br>`)
                            }
                            break;
                        case '2':
                            document.getElementById('div-list-container').innerHTML = gameListTemplates.list2;
                            gameListInsertBtn.onclick = () => {
                                let gameListTitle = document.getElementById('gameListTitle');
                                let gameProduct = document.getElementById('game-product');

                                let gameProvider = document.getElementById('game-provider-1');
                                let gameName = document.getElementById('game-name-1');
                                let gameImage = document.getElementById('game-image-1');
                                gameImage = gameImage.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode = document.getElementById('game-code-1');
                                let gameCTA = document.getElementById('cta-1');

                                let gameProvider2 = document.getElementById('game-provider-2');
                                let gameName2 = document.getElementById('game-name-2');
                                let gameImage2 = document.getElementById('game-image-2');
                                gameImage2 = gameImage2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode2 = document.getElementById('game-code-2');
                                let gameCTA2 = document.getElementById('cta-2');

                                tinymce.activeEditor.insertContent(`<table id="game-list-2" class="non-editable"><tbody><tr><td colspan="5">${gameListTitle.value}</td></tr><tr><td colspan="5">${gameProduct.value}</td></tr><tr><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr></tbody></table><br>`)
                            }
                            break;
                        case '3':
                            document.getElementById('div-list-container').innerHTML = gameListTemplates.list3;
                            gameListInsertBtn.onclick = () => {
                                let gameListTitle = document.getElementById('gameListTitle');
                                let gameProduct = document.getElementById('game-product');

                                let gameProvider = document.getElementById('game-provider-1');
                                let gameName = document.getElementById('game-name-1');
                                let gameImage = document.getElementById('game-image-1');
                                gameImage = gameImage.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode = document.getElementById('game-code-1');
                                let gameCTA = document.getElementById('cta-1');

                                let gameProvider2 = document.getElementById('game-provider-2');
                                let gameName2 = document.getElementById('game-name-2');
                                let gameImage2 = document.getElementById('game-image-2');
                                gameImage2 = gameImage2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode2 = document.getElementById('game-code-2');
                                let gameCTA2 = document.getElementById('cta-2');

                                let gameProvider3 = document.getElementById('game-provider-3');
                                let gameName3 = document.getElementById('game-name-3');
                                let gameImage3 = document.getElementById('game-image-3');
                                gameImage3 = gameImage3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode3 = document.getElementById('game-code-3');
                                let gameCTA3 = document.getElementById('cta-3');
                                
                                tinymce.activeEditor.insertContent(`<table id="game-list-3" class="non-editable"><tbody><tr><td colspan="5">${gameListTitle.value}</td></tr><tr><td colspan="5">${gameProduct.value}</td></tr><tr><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr></tbody></table><br>`)
                            }
                            break;
                        case '4':
                            document.getElementById('div-list-container').innerHTML = gameListTemplates.list4;
                            gameListInsertBtn.onclick = () => {
                                let gameListTitle = document.getElementById('gameListTitle');
                                let gameProduct = document.getElementById('game-product');

                                let gameProvider = document.getElementById('game-provider-1');
                                let gameName = document.getElementById('game-name-1');
                                let gameImage = document.getElementById('game-image-1');
                                gameImage = gameImage.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode = document.getElementById('game-code-1');
                                let gameCTA = document.getElementById('cta-1');

                                let gameProvider2 = document.getElementById('game-provider-2');
                                let gameName2 = document.getElementById('game-name-2');
                                let gameImage2 = document.getElementById('game-image-2');
                                gameImage2 = gameImage2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode2 = document.getElementById('game-code-2');
                                let gameCTA2 = document.getElementById('cta-2');

                                let gameProvider3 = document.getElementById('game-provider-3');
                                let gameName3 = document.getElementById('game-name-3');
                                let gameImage3 = document.getElementById('game-image-3');
                                gameImage3 = gameImage3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode3 = document.getElementById('game-code-3');
                                let gameCTA3 = document.getElementById('cta-3');

                                let gameProvider4 = document.getElementById('game-provider-4');
                                let gameName4 = document.getElementById('game-name-4');
                                let gameImage4 = document.getElementById('game-image-4');
                                gameImage4 = gameImage4.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode4 = document.getElementById('game-code-4');
                                let gameCTA4 = document.getElementById('cta-4');

                                tinymce.activeEditor.insertContent(`<table id="game-list-4" class="non-editable"><tbody><tr><td colspan="5">${gameListTitle.value}</td></tr><tr><td colspan="5">${gameProduct.value}</td></tr><tr><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr><tr><td>${gameProvider4.value}</td><td>${gameImage4}</td><td>${gameName4.value}</td><td>${gameCode4.value}</td><td>${gameCTA4.value}</td></tr></tbody></table><br>`)
                            }
                            break;
                        case '5':
                            document.getElementById('div-list-container').innerHTML = gameListTemplates.list5;
                            gameListInsertBtn.onclick = () => {
                                let gameListTitle = document.getElementById('gameListTitle');
                                let gameProduct = document.getElementById('game-product');

                                let gameProvider = document.getElementById('game-provider-1');
                                let gameName = document.getElementById('game-name-1');
                                let gameImage = document.getElementById('game-image-1');
                                gameImage = gameImage.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode = document.getElementById('game-code-1');
                                let gameCTA = document.getElementById('cta-1');

                                let gameProvider2 = document.getElementById('game-provider-2');
                                let gameName2 = document.getElementById('game-name-2');
                                let gameImage2 = document.getElementById('game-image-2');
                                gameImage2 = gameImage2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode2 = document.getElementById('game-code-2');
                                let gameCTA2 = document.getElementById('cta-2');

                                let gameProvider3 = document.getElementById('game-provider-3');
                                let gameName3 = document.getElementById('game-name-3');
                                let gameImage3 = document.getElementById('game-image-3');
                                gameImage3 = gameImage3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode3 = document.getElementById('game-code-3');
                                let gameCTA3 = document.getElementById('cta-3');

                                let gameProvider4 = document.getElementById('game-provider-4');
                                let gameName4 = document.getElementById('game-name-4');
                                let gameImage4 = document.getElementById('game-image-4');
                                gameImage4 = gameImage4.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode4 = document.getElementById('game-code-4');
                                let gameCTA4 = document.getElementById('cta-4');

                                let gameProvider5 = document.getElementById('game-provider-5');
                                let gameName5 = document.getElementById('game-name-5');
                                let gameImage5 = document.getElementById('game-image-5');
                                gameImage5 = gameImage5.value.toLowerCase().replace(/\s+/g, '-').trim();
                                let gameCode5 = document.getElementById('game-code-5');
                                let gameCTA5 = document.getElementById('cta-5');

                                tinymce.activeEditor.insertContent(`<table id="game-list-5" class="non-editable"><tbody><tr><td colspan="5">${gameListTitle.value}</td></tr><tr><td colspan="5">${gameProduct.value}</td></tr><tr><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr><tr><td>${gameProvider4.value}</td><td>${gameImage4}</td><td>${gameName4.value}</td><td>${gameCode4.value}</td><td>${gameCTA4.value}</td></tr><tr><td>${gameProvider5.value}</td><td>${gameImage5}</td><td>${gameName5.value}</td><td>${gameCode5.value}</td><td>${gameCTA5.value}</td></tr></tbody></table><br>`)
                            }
                            break;
                    }
                    
                })

                cancelGameListBtn.onclick = () => {
                    gameListInput.classList.add('hidden');
                }
            }
        });

        editor.addButton('insertWidget', {
            type: 'menubutton',  // Define the button as a dropdown menu
            text: 'Insert Widget',
            icon: false,
            menu: [
              {
                text: 'Indonesia',
                menu: [
                    {
                        text: '[EN-GB] Where to find your Sportbook Free Bet',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[ID-ID] Dimana Anda dapat menemukan Free bet olahraga',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[EN-GB] Where to find your Free Spins',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202505\/en-gb_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[ID-ID] Where to find your Free Spins',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202505\/id-id_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[EN-GB] Where to find your Lotto Free Bet?',
                        onclick: function() {
                          editor.insertContent('<h5 id="en-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Lotto Free Bet?</h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[ID-ID] Dimana Anda dapat menemukan Free bet Lotto?',
                        onclick: function() {
                          editor.insertContent('<h5 id="id-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet Lotto?</h5><br>');  // Insert content on selection
                        }
                    },
                ]
              },
              {
                text: 'Japan',
                menu: [
                    {
                        text: '[EN-GB] Where to find your Sportbook Free Bet',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[JA-JP] スポーツ専用フリーベットはここで確認',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツ専用フリーベットはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[EN-GB] How to use Sportbook Free Bet',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">How to use Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[JA-JP] スポーツブックのフリーベットの使い方',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツブックのフリーベットの使い方<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[EN-GB] Where to find you Free Spins',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                    {
                        text: '[JA-JP] フリースピンはここで確認',
                        onclick: function() {
                          editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">フリースピンはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                        }
                    },
                ]
              },
            ]
        });

        editor.on('keydown', function(event) { //this stop the user from using ctrl+A or cmd+A
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 65) {
                event.preventDefault();
                editor.selection.collapse();
            }
        });
        editor.on('keyup', function(event) {
            if (event.keyCode === 8) {
                const selectedNode = editor.selection.getNode();
              
                // Case: parent is mceEditable
                const parent = selectedNode.parentElement;
                if (parent.className.match('mceEditable')) {
                  const text = parent.textContent.trim();
                  if (text.length === 0) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
        })

        // editor.on('NodeChange', function(event) {
        //     console.log('Node changed:', event);

        //     //Nodechange prevents the users to accidentally break the HTML when highlighting the input box using ctrl+A and add numbered/bullet list 
        //     if(event.element.nodeName == 'DIV'){
        //         if(event.element.className.match('mceEditable')){
        //             if(event.element.children.length < 2){
        //                 event.element.innerHTML = '<p><br></p>'
        //                 console.log('editable input box content is maybe deleted or empty, automatically add <p>');
        //             } else {
        //                 console.log('contents are preserved');
        //                 console.log(event.element.children.length);
        //             }

        //         }
        //     }
        // });


        // editor.on('focus', function () {
        //     console.log('Focused:', editor.id);
        //     if (editor.id === 'mytextarea2') {
        //         document.getElementById("game-image-1").readOnly = true;
        //         document.getElementById("game-image-2").readOnly = true;
        //         document.getElementById("game-image-3").readOnly = true;
        //         document.getElementById("game-image-4").readOnly = true;
        //         document.getElementById("game-image-5").readOnly = true;
        //     }
        //     if (editor.id === 'mytextarea') {
        //         document.getElementById("game-image-1").readOnly = false;
        //         document.getElementById("game-image-2").readOnly = false;
        //         document.getElementById("game-image-3").readOnly = false;
        //         document.getElementById("game-image-4").readOnly = false;
        //         document.getElementById("game-image-5").readOnly = false;
        //     }
        // });

        editor.on('init', function () {
            // Mark .mceEditable areas as editable
            var editables = editor.getBody().querySelectorAll('.mceEditable');
            for (var i = 0; i < editables.length; i++) {
              editables[i].setAttribute('contenteditable', 'true');
            }
          });
    
          // Optional: prevent keyboard input outside .mceEditable
          editor.on('keydown', function (e) {
            var node = editor.selection.getNode();
            if (!node.closest('.mceEditable')) {
              e.preventDefault();
            }
          }); 
    },
});

//close MCE popup v5-7
// setTimeout(() => {
//     document.querySelector('.tox-notification__dismiss').click(); //clicking x button for the first editor
//     document.querySelector('.tox-notification__dismiss').click(); //clicking x button for the second editor
// }, 1000)
//close MCE popup v4
setTimeout(() => {
    document.querySelector('.mce-close').click();
    document.querySelector('.mce-close').click();
}, 800)

//generate APS to HTML filename
let fileNameAPS = document.getElementById('filename');
const stringMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const generateFilenameBtn = document.getElementById('generateFilename')
generateFilenameBtn.addEventListener('click', () => {
    let input = document.getElementById('filename').value
    let indexOf_ = input.indexOf('_')
    let country = input.substr(0, indexOf_ + 1)
    let promoType = input.substr(indexOf_ + 1, 4)
    let year = input.substr(indexOf_ + 5, 4)
    let day = input.substr(indexOf_ + 9, 2)
    let month = input.substr(indexOf_ + 11, 2)
    let promoNumber = input.substr(indexOf_ + 13, 3)

    fileNameAPS.value = country + promoType + '_' + day + '_' + stringMonth[month - 1] + '_' + year + '_' + promoNumber
})

//reset content button
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('import-tnc').value = ''
    tinymce.get('mytextarea').setContent('')
    tinymce.get('mytextarea2').setContent('')
    tncRegionDropdown.value = '#'
    tncTemplateDropdown.value = '#'
    tncRegionDropdown.parentElement.classList.remove('hidden');
    document.getElementById('template-container').classList.add('hidden')
    document.getElementById('filename').value = '';
})


//dropdown region option
let tncRegionDropdown = document.getElementById('tnc-regions-dropdown');
let tncTemplateDropdown = document.getElementById('template-dropdown');
tncRegionDropdown.addEventListener('change', () => {
    const selectedRegion = tncRegionDropdown.value;
    switch (selectedRegion) {
        case 'zh-cn':
            document.getElementById('filename').value = 'china_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of CN on image library

            tncTemplateDropdown.value = '#'; //resets the value of template dropdown when a user switches the region dropdown value. 
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(CNSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(CNFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(CNtemplate);
                        break;
                }
            })
            break;
        case 'vi-vn':
            document.getElementById('filename').value = 'Vietnam_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of VN on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(VNSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(VNFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(VNtemplate);
                        break;
                }
            })
            break;
        case 'th-th':
            document.getElementById('filename').value = 'Thailand_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of TH on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(THSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(THFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(THtemplate);
                        break;
                }
            })
            break;
        case 'ko-kr':
            document.getElementById('filename').value = 'Korea_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of KR on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(KRSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(KRFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(KRtemplate);
                        break;
                }
            })
            break;
        case 'id-id':
            document.getElementById('filename').value = 'Indonesia_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of ID on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(IDSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(IDFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(IDtemplate);
                        break;
                }
            })
            break;
        case 'km-kh':
            document.getElementById('filename').value = 'Cambodia_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of KH on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(KHSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(KHFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(KHtemplate);
                        break;
                }
            })
            break;
        case 'ja-jp':
            document.getElementById('filename').value = 'Japan_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of JP on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(JPSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(JPFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(JPtemplate);
                        break;
                }
            })
            break;
        case 'hi-in':
            document.getElementById('filename').value = 'India_'
            document.getElementById('template-container').classList.remove('hidden')
            showImageLibraryImages(selectedRegion) //shows images of IN on image library

            tncTemplateDropdown.value = '#';
            tinymce.get('mytextarea').setContent('');
            tinymce.get('mytextarea2').setContent('');

            tncTemplateDropdown.addEventListener('change', () => {
                const selectedTemplate = tncTemplateDropdown.value;
                switch(selectedTemplate) {
                    case 'SC':
                        tinymce.get('mytextarea').setContent(ENSCtemplate);
                        tinymce.get('mytextarea2').setContent(INSCtemplate);
                        break;
                    case 'FP':
                        tinymce.get('mytextarea').setContent(ENFPtemplate);
                        tinymce.get('mytextarea2').setContent(INFPtemplate);
                        break;
                    case 'SCFP':
                        tinymce.get('mytextarea').setContent(ENtemplate);
                        tinymce.get('mytextarea2').setContent(INtemplate);
                        break;
                }
            })
            break;
    }
})

//preview button
document.getElementById('previewBtn').addEventListener('click', () => {
    document.getElementById('preview-overlay').classList.toggle('hidden');
    document.getElementById('preview-section').classList.toggle('hidden');
    if(document.getElementById('preview-dropdown').value == '#'){
        document.getElementById('tnc-container').innerHTML = '';
    } else if (document.getElementById('preview-dropdown').value == 'prev-en-gb'){
        previewContent('mytextarea');
    } else if (document.getElementById('preview-dropdown').value == 'prev-localized'){
        previewContent('mytextarea2');
    }
})

//preview TNC
function previewContent(lang) {
    let editorContent = tinymce.get(lang).getContent();
    
    editorContent = editorContent
        .replaceAll('<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">', '')
        .replaceAll('<template #header>', '')
        .replaceAll('</template>', '')
        .replaceAll('<template #content>', '')
        .replaceAll('</SExpansionPanel>', '')
        .replaceAll('<IncludeContent :url="promoDetail.termsTpl"></IncludeContent>', '')

        //replacing Full Promotion
        .replaceAll(/<h2 class="m-4 font-semibold text-body-1 mceEditable">(.*?)<\/h2>/g, '<div class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6"><h2 class="font-semibold text-body-1 mceEditable">$1</h2><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg></div>')
        .replaceAll(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g, '<div class="p-2 border-b border-b-gray-300 flex flex-row justify-between items-center font-semibold my-6"><h2 class="font-semibold text-body-1">$1</h2><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="#8C8F93"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg></div>')

        //replacing list styles
        .replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
        .replaceAll(/<ol style="list-style-type: lower-roman;">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
        .replaceAll(/<ol style="list-style-type: lower-alpha;">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
        .replaceAll(/<ol style="list-style-type: lower-roman;" start="(.*?)">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
        .replaceAll(/<ol style="list-style-type: upper-roman;" start="(.*?)">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
        .replaceAll(/<ol style="list-style-type: lower-alpha;" start="(.*?)">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
        .replaceAll(/<ol style="list-style-type: upper-alpha;" start="(.*?)">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')
        .replaceAll(/<ol start="(.*?)">/g, '<ol class="list-decimal pl-8 mb-4" start="$1">')
        .replaceAll('<li>', '<li class="mb-4">')

        //replacing customGames
        //.replace(/<table id="casino-icons">\s*<tbody>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<div class="flex flex-col w-full text-center bg-neutral-100"><div>$1</div><div>$2</div></div>')

        //replacing tables
        .replace(/<table(.*?)>/g, '<table class="border w-full border-collapse border-spacing-0 text-center">')
        .replace(/<td(.*?)>/g, '<td class="p-4" $1>')
        .replaceAll('<tbody>', '<tbody class="divide-y">')
        .replaceAll('</table>', '</table><br>')
        //.replace(/<td nowrap="nowrap" width="(.*?)">/g, '<td width="$1">')

        //replacing paragraph
        .replaceAll('<p style="text-align: center;">', '<p class="text-center mb-4" style="text-align: center;">')
        .replaceAll('<p style="text-align: left;">', '<p class="text-left mb-4" style="text-align: left;">')
        .replaceAll('<p style="text-align: right;">', '<p class="text-right mb-4" style="text-align: right;">')
        .replaceAll('<p style="text-align: justify;">', '<p class="text-justify mb-4" style="text-align: justify;">')
        //.replaceAll('<p>', '<p class="mb-4">')

        //replacing list discs
        .replace(/<ul(.*?)>/g, '<ul class="list-disc pl-8 mb-4"$1>')

        //images
        .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto" $1/>')
        .replace(/<img(.*?)>/g, '<img class="my-2 mx-auto h-auto" $1/>')

        //preview import
        .replaceAll('<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">', '')
        .replaceAll('<template #header="">', '')
        .replaceAll('<template #content="">', '')
        .replaceAll('<template #content="">', '')
        .replaceAll('</sexpansionpanel>', '')
        .replaceAll('<includecontent :url="promoDetail.termsTpl"></includecontent>', '')

    document.getElementById('tnc-container').innerHTML = editorContent;
}

//import TNC
document.getElementById('import-tnc').addEventListener('change', async (e) => {

    const tncfile = e.target.files[0]
    document.getElementById('filename').value = tncfile.name.replace('.html', '');

    if (tncfile) {
        //document.getElementById('import-check').checked = true;
        const content = await readFile(tncfile);
        tncRegionDropdown.parentElement.classList.add('hidden'); //hide dropdowns to prevent users from selecting regions, mas madali na to kesa ilagay pa region ng naimport na tnc sa dropdown haha
        tncTemplateDropdown.parentElement.classList.add('hidden');

        const parser = new DOMParser(); //allows to convert the HTML string into a DOM object. Once converted, you can interact with it just like you would with any DOM node.
        const doc = parser.parseFromString(content, 'text/html');
        //const contentScripts = doc.getElementsByTagName('head')[0].innerHTML; //pulling scripts at the header
        const contentEN = doc.querySelector('#content-en-gb');
        const contentCN = doc.querySelector('#content-zh-cn');
        const contentVN = doc.querySelector('#content-vi-vn');
        const contentTH = doc.querySelector('#content-th-th');
        const contentKR = doc.querySelector('#content-ko-kr');
        const contentID = doc.querySelector('#content-id-id');
        const contentKH = doc.querySelector('#content-km-kh');
        const contentJP = doc.querySelector('#content-ja-jp');
        const contentIN = doc.querySelector('#content-hi-in');

        if (contentEN) {
            tinymce.get('mytextarea').setContent('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>' + contentEN.outerHTML); //this resolves the missing scripts when importing old tncs
        }
        if (contentCN) {
            tinymce.get('mytextarea2').setContent(contentCN.outerHTML);
        }
        if (contentVN) {
            tinymce.get('mytextarea2').setContent(contentVN.outerHTML);
        }
        if (contentTH) {
            tinymce.get('mytextarea2').setContent(contentTH.outerHTML);
        }
        if (contentKR) {
            tinymce.get('mytextarea2').setContent(contentKR.outerHTML);
        }
        if (contentID) {
            tinymce.get('mytextarea2').setContent(contentID.outerHTML);
        }
        if (contentKH) {
            tinymce.get('mytextarea2').setContent(contentKH.outerHTML);
        }
        if (contentJP) {
            tinymce.get('mytextarea2').setContent(contentJP.outerHTML);
        }
        if (contentIN) {
            tinymce.get('mytextarea2').setContent(contentIN.outerHTML);
        }
    }
})
const readFile = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsText(file);
    });
};

//Import DOCX file
document.getElementById('import-docx').addEventListener('change', (e) => {
    const fileInput = document.getElementById('import-docx');
    const file = fileInput.files[0];
    
    if (file && file.name.endsWith('.docx')) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const arrayBuffer = reader.result;
        
        // Use mammoth.js to convert the DOCX file to HTML
        mammoth.convertToHtml({arrayBuffer: arrayBuffer})
          .then(function(result) {
            // Insert the converted content into the TinyMCE editor
            const docparser = new DOMParser();
            const convertedDocs = docparser.parseFromString(result.value, 'text/html');
            console.log(convertedDocs.getElementsByTagName('body')[0]);
            
            tinymce.get('mytextarea').setContent(convertedDocs.getElementsByTagName('body')[0].innerHTML);
            
          })
          .catch(function(err) {
            console.error('Error reading DOCX file:', err);
          });
      };
      
      reader.readAsArrayBuffer(file);
    }
  })

//download TNC
document.getElementById('download').addEventListener('click', () => {
    if (document.getElementById('import-check').checked === false) {

        let ENcontent = tinymce.get('mytextarea').getContent();
        let LOCALcontent = tinymce.get('mytextarea2').getContent();
        let mergedContent = ENcontent + LOCALcontent;

        //clean up
        mergedContent = mergedContent.replaceAll(' mceEditable', '').replaceAll(' non-editable', '').replaceAll('mceEditable', '')

        //replacing 188 links
        mergedContent = mergedContent
            .replace(/:href="https:\/\/www.188asia.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.188bet.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/:href="`https:\/\/www.188bet.com\/[^/]*\/([^>]*)`">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.my188promo.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.188family.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.188sukses.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.188asia.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.188bet.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.my188promo.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.188family.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.188sukses.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')

        //replacing taptap link
            .replace(/:href="https:\/\/www.taptap.asia\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.taptap.asia\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.taptap.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.taptap.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.taptap.mobi\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.taptap.mobi\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.dian2188.com\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.dian2188.com\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
            .replace(/:href="https:\/\/www.cubcub.asia\/[^/]*\/([^>]*)">/g, ':href="`/${gv.lan}/$1`">')
            .replace(/<a href="https:\/\/www.cubcub.asia\/[^/]*\/([^>]*)">/g, '<a :href="`/${gv.lan}/$1`">')
        
        //replacing list styles
            .replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
            .replaceAll(/<ol style="list-style-type: lower-roman;">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
            .replaceAll(/<ol style="list-style-type: lower-alpha;">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
            .replaceAll(/<ol style="list-style-type: lower-roman;" start="(.*?)">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
            .replaceAll(/<ol style="list-style-type: upper-roman;" start="(.*?)">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
            .replaceAll(/<ol style="list-style-type: lower-alpha;" start="(.*?)">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
            .replaceAll(/<ol style="list-style-type: upper-alpha;" start="(.*?)">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')
            .replaceAll(/<ol start="(.*?)">/g, '<ol class="list-decimal pl-8 mb-4" start="$1">')

        //replacing recommended game icons
            .replace(/<table id="game-icons-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td style="display: none;">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td style="display: none;">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<div class="$1"><CustomGames product="$2" title="$3" games="$4" type="table" class="tnc-multiple-games" :limit="200"></CustomGames></div>')

        //replacing recommended game list
            //product selection: live casino
            .replace(/<table id="game-list-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">live<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$2/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-2" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">live<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$2/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$7/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-3" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">live<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$2/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$7/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$12/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-4" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">live<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$2/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$7/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$12/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$17/$18-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$19<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$20"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$21</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-5" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">live<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$2/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$7/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$12/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$17/$18-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$19<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$20"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$21</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$22/$23-4x3-sm.webp" alt="$23" size="40" class="!rounded-lg ml-6" /></template>$24<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$25"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$26</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')

            //product selection: casino
            .replace(/<table id="game-list-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">casino<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$2/$3/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-2" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">casino<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$2/$3/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$7/$8/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList><SCard></SCard>')
            .replace(/<table id="game-list-3" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">casino<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$2/$3/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$7/$8/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$12/$13/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-4" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">casino<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$2/$3/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$7/$8/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$12/$13/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$17/$18/$18-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$19<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$20"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$21</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-5" class="non-editable">\s*<tbody>\s*<tr>\s*<td colspan="5">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td colspan="5">casino<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">$1</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$2/$3/$3-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$4<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$5"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$6</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$7/$8/$8-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$9<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$10"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$11</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$12/$13/$13-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$14<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$15"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$16</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$17/$18/$18-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$19<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$20"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$21</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$22/$23/$23-4x3-sm.webp" alt="$23" size="40" class="!rounded-lg ml-6" /></template>$24<template #appendAction><GameLauncher v-slot="{openGame}" product="casino" game="$25"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$26</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')

        //replacing tables
            .replace(/<table(.*?)>/g, '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0 text-center">')
            .replaceAll('<tbody>', '<tbody class="divide-y">')
            .replaceAll('</table>', '</table></div>')
            //.replace(/<td nowrap="nowrap" width="(.*?)">/g, '<td width="$1">')
        
        //replacing paragraph
            //.replace(/<p class="MsoNormal">/g, '<p>')
            .replaceAll('<p style="text-align: center;">', '<p class="text-center mb-4" style="text-align: center;">')
            .replaceAll('<p style="text-align: left;">', '<p class="text-left mb-4" style="text-align: left;">')
            .replaceAll('<p style="text-align: right;">', '<p class="text-right mb-4" style="text-align: right;">')
            .replaceAll('<p style="text-align: justify;">', '<p class="text-justify mb-4" style="text-align: justify;">')
            //.replaceAll('<p>', '<p class="mb-4">')

        //replacing list discs
            .replace(/<ul(.*?)>/g, '<ul class="list-disc pl-8 mb-4"$1>')

         //images
            .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto" $1/>')
            .replace(/<img(.*?)>/g, '<img class="my-2 mx-auto h-auto" $1/>')

        //Sportsbook Free Bet Component
            //indonesia
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202408/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202408/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202505\/en-gb_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202505/en-gb_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202505\/id-id_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202505/id-id_IDFSNOLIMITC-0525_where-to-find-your-free-spins.html\'" /></IncludeContent>')
            .replaceAll('<h5 id="en-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Lotto Free Bet?</h5>', '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202507/en-id_188DAYBLUE-0824_where-to-find-your-lotto-free-bet.html\'"></IncludeContent>')
            .replaceAll('<h5 id="id-id" class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet Lotto?</h5>', '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202507/id-id_188DAYBLUE-0824_where-to-find-your-lotto-free-bet.html\'"></IncludeContent>')
            //japan
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツ専用フリーベットはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">How to use Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">スポーツブックのフリーベットの使い方<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Free Spins<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">フリースピンはここで確認<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Japan\/202505\/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'" \/>\s*<\/IncludeContent>\s*<\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html\'" /></IncludeContent>')
        
        //cleaning up some mess
            .replaceAll('<br />', '<br>')
            .replaceAll('<br/>', '<br>')
            .replaceAll('<br><br>', '<br>')
            .replace(/<p(.*?)> <\/p>/g, '<br>')

        //imports
            .replaceAll('sexpansionpanel', 'SExpansionPanel')
            .replaceAll('#header=""', '#header')
            .replaceAll('#content=""', '#content')
            .replaceAll('includecontent', 'IncludeContent')
            .replaceAll('customgames', 'CustomGames')
            .replaceAll('show-game-subtitle=""', 'show-game-subtitle')

            .replace(/<a href="&#96;(.*?)&#96;">/g, '<a :href="`$1`">')

        let finalContent = mergedContent;

        finalContent = finalContent.replace(/></g, '>\n<');

        let fileName = document.getElementById('filename').value;
        let blob = new Blob([finalContent], { type: 'text/html' });
        let htmlFile = document.createElement('a');
        htmlFile.download = `${fileName}.html`;
        htmlFile.href = window.URL.createObjectURL(blob);
        htmlFile.click();
    }
})

//preview dropdown
document.getElementById('preview-dropdown').addEventListener('change', () => {
    let previewHTML = document.getElementById('preview-dropdown').value;

    switch(previewHTML) {
        case 'prev-en-gb':
            previewContent('mytextarea');
            break;
        case 'prev-localized':
            previewContent('mytextarea2');
            break;
    }
})

//close preview
document.getElementById('hidePreview').addEventListener('click', () => {
    document.getElementById('preview-section').classList.toggle('hidden');
    document.getElementById('preview-overlay').classList.toggle('hidden');
})

//show guide
const showGuide = document.getElementById('guideBtn').onclick = () => {document.getElementById('guide-container').classList.remove('hidden')}
const hideGuide = document.getElementById('hideGuide').onclick = () => {document.getElementById('guide-container').classList.add('hidden')}
document.getElementById('definitionBtn').addEventListener('click', () => {
    document.getElementById('video').classList.add('hidden');
    document.getElementById('videoBtn').classList.replace('bg-[#ff8906]', 'bg-neutral-200');
    document.getElementById('definition').classList.remove('hidden');
    document.getElementById('definitionBtn').classList.replace('bg-neutral-200','bg-[#ff8906]');
})
document.getElementById('videoBtn').addEventListener('click', () => {
    document.getElementById('definition').classList.add('hidden');
    document.getElementById('definitionBtn').classList.replace('bg-[#ff8906]', 'bg-neutral-200');
    document.getElementById('video').classList.remove('hidden');
    document.getElementById('videoBtn').classList.replace('bg-neutral-200', 'bg-[#ff8906]');
})

//show image library
function showImageLibraryImages(region) {

    document.getElementById('zh-images').classList.add('hidden');
    document.getElementById('vn-images').classList.add('hidden');
    document.getElementById('th-images').classList.add('hidden');
    document.getElementById('kr-images').classList.add('hidden');
    document.getElementById('id-images').classList.add('hidden');
    document.getElementById('kh-images').classList.add('hidden');
    document.getElementById('jp-images').classList.add('hidden');
    document.getElementById('in-images').classList.add('hidden');

    if(region == 'zh-cn'){
        document.getElementById('zh-images').classList.remove('hidden');
    } else if(region == 'vi-vn'){
        document.getElementById('vn-images').classList.remove('hidden');
    } else if(region == 'th-th'){
        document.getElementById('th-images').classList.remove('hidden');
    } else if(region == 'ko-kr'){
        document.getElementById('kr-images').classList.remove('hidden');
    } else if(region == 'id-id'){
        document.getElementById('id-images').classList.remove('hidden');
    } else if(region == 'km-kh'){
        document.getElementById('kh-images').classList.remove('hidden');
    } else if(region == 'ja-jp'){
        document.getElementById('jp-images').classList.remove('hidden');
    } else if(region == 'hi-in'){
        document.getElementById('in-images').classList.remove('hidden');
    }
}