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

            console.log('BeforeSetContent:', event.content);
        });
    },

});

//import TNC
document.getElementById('import-tnc').addEventListener('click', async (e) => {
    const tncfile = e.target.files[0]
    if (tncfile) {
        const content = await readFile(tncfile);
        let y = content.replaceAll('<template #header>', '').replaceAll('<template #content>', '').replaceAll('</template>', '')
        
        tinymce.get('mytextarea').setContent(y);
    } else {
        //document.getElementById('output').innerHTML = 'No file selected';
        console.log('error');
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