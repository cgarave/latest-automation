tinymce.init({
    selector: '#mytextarea, #mytextarea2',
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
    height: 800,
    width: 1000,
    statusbar: false,
    

    setup: function (editor) {
        editor.on('BeforeSetContent', function (event) {
            //console.log('BeforeSetContent:', event.content);
        });
    },

});

//close MCE popup
setTimeout(() => {
    document.querySelector('.tox-notification__dismiss').click();
    document.querySelector('.tox-notification__dismiss').click();
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

//import TNC
document.getElementById('import-tnc').addEventListener('click', async (e) => {
    const tncfile = e.target.files[0]
    if (tncfile) {
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
    } else {
        console.error('error');
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