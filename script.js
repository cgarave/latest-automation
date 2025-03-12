const ENtemplate = `<div id="content-en-gb" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                            <div class="mceEditable">Write/Paste Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">Full Promotion Specific Terms and Conditions</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const CNtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">主要规则</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">完整优惠标准规则</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const VNtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Điều Kiện Tóm Lược</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const THtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขฉบับย่อ</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const KRtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">약관 주요내용</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">본 프로모션 이용약관</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const IDtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Penting</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Spesifik promosi Lengkap</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const KHtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌសំខាន់ៗ</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`
            
const JPtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">キャンペーン概要</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">全てのプロモーション－特定の利用規約</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const INtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">टमहत्वपूर्ण स्थितियां</h2>
                            <div class="mceEditable">Write/Paste Localized Significant Contents here</div>
                            <h2 class="m-4 font-semibold text-body-1 mceEditable">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>
                            <div class="full-promotion-content mceEditable">
                                Write/Paste Localized Full Promotion contents here
                            </div>
                        </div>
                        <div id="closeSExpansion" class="hidden non-editable" style="visibility: hidden;">1</div>
                    </div>`

const headerScript = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script> $(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>`

const SExpansion = `<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
<template #header>
  <h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>
</template>
<template #content>`

const closeSExpansion = ` </template>
                          </SExpansionPanel>
                          </div>
                          <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                          </div>
                          <div id="closeSExpansion" class="hidden" style="visibility: hidden;">1</div>`;

//tinymce init (this is where you customize the editor)
tinymce.init({
    selector: '#mytextarea, #mytextarea2', //selecting two editor
    plugins: 'advlist lists code table image link',
    toolbar: 'code table numlist bullist image link indent outdent alignleft aligncenter alignright forecolor bold italic underline strikethrough',
    menubar: false,  // Disable the menubar entirely
    editable_class: 'mceEditable',  //editable class
    noneditable_class: 'non-editable', //non-editable class
    //valid_elements: '*[*]',
    table_resize_bars: false, //disable resize bars
    object_resizing: 'img', //disable table resizing
    encoding: 'xml',
    element_format: 'xhtml',
    entity_encoding: 'raw',
    //content_style: 'li { margin: 10px; border: 5px solid red; padding: 3px; }',
    height: 650,
    width: 1000,
    statusbar: false, //disabling status bar
    

    setup: function (editor) {
        //BeforeSetContent controls all the set contents before it appears on the editor
        //This is useful when you want to change something upon importing of the file
        editor.on('BeforeSetContent', function (event) {
            //console.log('BeforeSetContent:', event.content);
        });
    },

});

//close MCE popup
setTimeout(() => {
    document.querySelector('.tox-notification__dismiss').click(); //clicking x button for the first editor
    document.querySelector('.tox-notification__dismiss').click(); //clicking x button for the second editor
}, 1000)

//generate APS to HTML filename
let fileNameAPS = document.getElementById('filename');
const stringMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const generateFilenameBtn = document.getElementById('generateFilename')
generateFilenameBtn.addEventListener('click', () => {
  let input = document.getElementById('filename').value
  let indexOf_ = input.indexOf('_')
  //let promoType = input.slice(indexOf_ + 1, indexOf_ + 5) + '_'
  let country = input.substr(0, indexOf_ + 1)
  let promoType = input.substr(indexOf_ + 1, 4)
  let year = input.substr(indexOf_ + 5, 4)
  let day = input.substr(indexOf_ + 9, 2)
  let month = input.substr(indexOf_ + 11, 2)
  let promoNumber = input.substr(indexOf_ + 13, 3)
  
  fileNameAPS.value = country + promoType + '_' + day + '_' + stringMonth[month - 1] + '_' + year + '_' + promoNumber
})

//guide button
document.getElementById('importBtn').addEventListener('click', () => {
})

//dropdown region option
const tncRegionDropdown = document.getElementById('tnc-regions-dropdown');
tncRegionDropdown.addEventListener('change', () => {
    const selectedRegion = tncRegionDropdown.value;
    switch(selectedRegion){
        case 'zh-cn':
            document.getElementById('filename').value = 'china_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(CNtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'vi-vn':
            document.getElementById('filename').value = 'Vietnam_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(VNtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'th-th':
            document.getElementById('filename').value = 'Thailand_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(THtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'ko-kr':
            document.getElementById('filename').value = 'Korea_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(KRtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'id-id':
            document.getElementById('filename').value = 'Indonesia_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(IDtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'km-kh':
            document.getElementById('filename').value = 'Cambodia_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(KHtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'ja-jp':
            document.getElementById('filename').value = 'Japan_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(JPtemplate);
            document.getElementById('import-check').checked = false;
            break;
        case 'hi-in':
            document.getElementById('filename').value = 'India_'
            tinymce.get('mytextarea').setContent(ENtemplate);
            tinymce.get('mytextarea2').setContent(INtemplate);
            document.getElementById('import-check').checked = false;
            break;
    }
})

//import TNC
document.getElementById('import-tnc').addEventListener('click', async(e) => {
    
    const tncfile = e.target.files[0]
    
    if (tncfile) {
        document.getElementById('import-check').checked = true;
        const content = await readFile(tncfile);
        let y = content.replaceAll('<template #header>', '').replaceAll('<template #content>', '').replaceAll('</template>', '');

        const parser = new DOMParser(); //allows to convert the HTML string into a DOM object. Once converted, you can interact with it just like you would with any DOM node.
        const doc = parser.parseFromString(y, 'text/html');
        const contentEN = doc.querySelector('#content-en-gb');
        const contentCN = doc.querySelector('#content-zh-cn');
        const contentVN = doc.querySelector('#content-vi-vn');
        const contentTH = doc.querySelector('#content-th-th');
        const contentKR = doc.querySelector('#content-ko-kr');
        const contentID = doc.querySelector('#content-id-id');
        const contentKH = doc.querySelector('#content-km-kh');
        const contentJP = doc.querySelector('#content-ja-jp');
        const contentIN = doc.querySelector('#content-hi-in');

        if(contentEN){
            tinymce.get('mytextarea').setContent(contentEN.outerHTML);
        }
        if(contentCN){
            tinymce.get('mytextarea2').setContent(contentCN.outerHTML);
        }
        if(contentVN){
            tinymce.get('mytextarea2').setContent(contentVN.outerHTML);
        }
        if(contentTH){
            tinymce.get('mytextarea2').setContent(contentTH.outerHTML);
        }
        if(contentKR){
            tinymce.get('mytextarea2').setContent(contentKR.outerHTML);
        }
        if(contentID){
            tinymce.get('mytextarea2').setContent(contentID.outerHTML);
        }
        if(contentKH){
            tinymce.get('mytextarea2').setContent(contentKH.outerHTML);
        }
        if(contentJP){
            tinymce.get('mytextarea2').setContent(contentJP.outerHTML);
        }
        if(contentIN){
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

//download TNC
document.getElementById('download').addEventListener('click', () => {
    if(document.getElementById('import-check').checked === false){

        let ENcontent = tinymce.get('mytextarea').getContent();
        let LOCALcontent = tinymce.get('mytextarea2').getContent();
        let mergedContent = ENcontent + LOCALcontent;
        
        mergedContent = mergedContent.replaceAll(' mceEditable', '').replaceAll(' non-editable', '') //clean up

        let findFullProm = mergedContent.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)
        let fullpromEN = findFullProm[0];
        let fullpromLOCAL = findFullProm[1];

        mergedContent = mergedContent
        .replace(fullpromEN, SExpansion.replace('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', fullpromEN))
        .replace(fullpromLOCAL, SExpansion.replace('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', fullpromLOCAL))

        //sa closeSExpansion na tayo bro

        let finalContent = headerScript + mergedContent;

        let fileName = document.getElementById('filename').value;
        let blob = new Blob([finalContent], {type: 'text/html'});
        let htmlFile = document.createElement('a');
        htmlFile.download = `${fileName}.html`;
        htmlFile.href = window.URL.createObjectURL(blob);
        htmlFile.click();
    }
})