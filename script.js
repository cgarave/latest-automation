const ENtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                    <div id="content-en-gb" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Full Promotion Specific Terms and Conditions</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const ENSCtemplate =   `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                        <div id="content-en-gb" class="tnc-content-wrap non-editable">
                            <div class="contentwrap tnc-content-format non-editable">
                                <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                                <div class="mceEditable">
                                    <p>Write/Paste Significant Contents here</p>
                                </div>
                            </div>
                            <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                        </div>`

const ENFPtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                      <div id="content-en-gb" class="tnc-content-wrap non-editable">
                          <div class="contentwrap tnc-content-format non-editable">
                              <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                  <template #header>
                                      <h2 class="m-4 font-semibold text-body-1 mceEditable">Full Promotion Specific Terms and Conditions</h2>
                                  </template>
                                  <template #content>
                                      <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Full Promotion contents here</p>
                                      </div>
                                  </template>
                              </SExpansionPanel>
                          </div>
                          <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                      </div>`

const CNtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">主要规则</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">完整优惠标准规则</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const CNSCtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">主要规则</h2>
                            <div class="mceEditable">
                                 <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const CNFPtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">完整优惠标准规则</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const VNtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Điều Kiện Tóm Lược</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const VNSCtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Điều Kiện Tóm Lược</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const VNFPtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Điều Khoản và Điều Kiện Hoàn Chỉnh</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const THtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขฉบับย่อ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const THSCtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขฉบับย่อ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const THFPtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขแบบเฉพาะเจาะจง</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const KRtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">약관 주요내용</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">본 프로모션 이용약관</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const KRSCtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">약관 주요내용</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const KRFPtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">본 프로모션 이용약관</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const IDtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Penting</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Spesifik promosi Lengkap</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const IDSCtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Penting</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const IDFPtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Spesifik promosi Lengkap</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const KHtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌសំខាន់ៗ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const KHSCtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌសំខាន់ៗ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`
const KHFPtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងជាក់លាក់នៃការផ្តល់រង្វាន់ទាំងអស</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const JPtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">キャンペーン概要</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">全てのプロモーション－特定の利用規約</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const JPSCtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">キャンペーン概要</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const JPFPtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">全てのプロモーション－特定の利用規約</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const INtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">टमहत्वपूर्ण स्थितियां</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const INSCtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">टमहत्वपूर्ण स्थितियां</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const INFPtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">पूर्ण प्रमोशन-विशिष्ट नियम और शर्तें</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Localized Full Promotion contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

//tinymce init (this is where you customize the editor)
tinymce.init({
    selector: '#mytextarea, #mytextarea2', //selecting two editor
    plugins: 'advlist lists code table image link paste noneditable textcolor',
    toolbar: 'code table | numlist bullist | image link | indent outdent | alignleft aligncenter alignright alignjustify | forecolor bold italic underline strikethrough',
    menubar: false,  // Disable the menubar entirely
    //editable_class: 'mceEditable',  //editable class tinymce 7
    //noneditable_class: 'non-editable', //non-editable class tinymce 7
    noneditable_editable_class: 'mceEditable', //editable class tinymce 4 & 5
    noneditable_noneditable_class: 'non-editable', //non-editable class tinymce 4 & 5
    fix_list_elements: true,
    paste_merge_formats: true,
    paste_data_images: false, //disable paste of local image
    table_resize_bars: false, //disable resize bars
    object_resizing: 'img', //disable table resizing
    encoding: 'xml',
    element_format: 'html',
    entity_encoding: 'raw',
    height: 650,
    width: 1000,
    statusbar: false, //disabling status bar
    protect: [
        //init codes
        /<script src="https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/3.6.0\/jquery.min.js"><\/script>/g,
        /<SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g,
        /<template #header>/g,
        /<\/template>/g,
        /<template #content>/g,
        /<\/SExpansionPanel>/g,
        /<IncludeContent :url="promoDetail.termsTpl"><\/IncludeContent>/g,

        //where to find sportsbook free bet component
        /<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/><\/IncludeContent>/g,

        //init codes - import
        /<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g,
        /<template #header="">/g,
        /<template #content="">/g,
        /<\/sexpansionpanel>/g,
        /<includecontent :url="promoDetail.termsTpl"><\/includecontent>/g,

        //where to find sportsbook free bet component - import
        /<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'"><\/includecontent>/g,
    ], 
    // valid_styles: {
    //     'ol': 'list-style-type',
    //     'p': 'text-align',
    //     'div': 'text-align',
    //     'span': 'color',
    //     'img': 'margin, margin-left, margin-right'
    // },
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
                  }
                  img {
                    max-width: 700px;
                    height: auto;
                  }`,

    setup: function (editor) {
        //BeforeSetContent controls all the set contents before it appears on the editor
        //This is useful when you want to change something upon importing of the file
        editor.on('BeforeSetContent', function (event) {
            event.content = event.content.trim()
            .replaceAll('</ol><ul>', '')
            .replaceAll('</ul><ol>', '')

            console.log(event.content);
            
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
const tncTemplateDropdown = document.getElementById('template-dropdown');
tncRegionDropdown.addEventListener('change', () => {
    const selectedRegion = tncRegionDropdown.value;
    switch (selectedRegion) {
        case 'zh-cn':
            document.getElementById('filename').value = 'china_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'vi-vn':
            document.getElementById('filename').value = 'Vietnam_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'th-th':
            document.getElementById('filename').value = 'Thailand_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'ko-kr':
            document.getElementById('filename').value = 'Korea_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'id-id':
            document.getElementById('filename').value = 'Indonesia_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'km-kh':
            document.getElementById('filename').value = 'Cambodia_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'ja-jp':
            document.getElementById('filename').value = 'Japan_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
        case 'hi-in':
            document.getElementById('filename').value = 'India_'
            document.getElementById('template-container').classList.remove('hidden')

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
            document.getElementById('import-check').checked = false;
            break;
    }
})

//preview button
document.getElementById('previewBtn').addEventListener('click', () => {
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
        .replaceAll(/<h2 class="m-4 font-semibold text-body-1 mceEditable">/g, '<h2 class="mt-4 mb-4 font-semibold text-body-1 mceEditable">')
        .replaceAll(/<h2 class="m-4 font-semibold text-body-1">/g, '<h2 class="mt-4 mb-4 font-semibold text-body-1">')

        //replacing list styles
        .replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
        .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
        .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;">')
        .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
        .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;">')
        .replaceAll(/<ol start="(.*?)">/g, '<ol class="list-decimal pl-8 mb-4" start="$1">')

        //replacing tables
        .replace(/<table(.*?)>/g, '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0 text-center">')
        .replaceAll('<tbody>', '<tbody class="divide-y">')
        .replaceAll('</table>', '</table></div>')
        //.replace(/<td nowrap="nowrap" width="(.*?)">/g, '<td width="$1">')

        //replacing paragraph
        .replaceAll('<p style="text-align: center;">', '<p class="text-center" style="text-align: center;">')
        .replaceAll('<p style="text-align: left;">', '<p class="text-left" style="text-align: left;">')
        .replaceAll('<p style="text-align: right;">', '<p class="text-right" style="text-align: right;">')
        .replaceAll('<p style="text-align: justify;">', '<p class="text-justify" style="text-align: justify;">')

        //replacing list discs
        .replace(/<ul(.*?)>/g, '<ul class="list-disc pl-8 mb-4"$1>')

        //images
        .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto rounded-lg" $1/>')
    

    document.getElementById('tnc-container').innerHTML = editorContent;
}

//import TNC
document.getElementById('import-tnc').addEventListener('change', async (e) => {

    const tncfile = e.target.files[0]

    if (tncfile) {
        //document.getElementById('import-check').checked = true;
        const content = await readFile(tncfile);
        //let y = content.replaceAll('<template #header>', '').replaceAll('<template #content>', '').replaceAll('</template>', '');

        const parser = new DOMParser(); //allows to convert the HTML string into a DOM object. Once converted, you can interact with it just like you would with any DOM node.
        const doc = parser.parseFromString(content, 'text/html');
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
            tinymce.get('mytextarea').setContent(contentEN.outerHTML);
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
        
        console.log(doc);

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
            tinymce.get('mytextarea').setContent(result.value);
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

        //storing en and local full promotion
        // let findFullProm = mergedContent.match(/<h2 class="m-4 font-semibold text-body-1">(.*?)<\/h2>/g)
        // let fullpromEN = findFullProm[0];
        // let fullpromLOCAL = findFullProm[1];

        //shorten the code to replace full promotion when a user replaced the text of EN and/or Local full promotion
        // mergedContent = mergedContent
        //     .replace(fullpromEN, SExpansion.replace('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', fullpromEN))
        //     .replace(fullpromLOCAL, SExpansion.replace('<h2 class="m-4 font-semibold text-body-1">Full Promotion Specific Terms and Conditions</h2>', fullpromLOCAL))

        // mergedContent = mergedContent
        //     .replaceAll(/<\/div>\s*<div id="closeSExpansion" class="hidden" style="visibility: hidden;">1<\/div>\s*<\/div>/g, closeSExpansion)

        //replacing links
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
            .replace('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>', '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function(){$("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?"+$.now());});</script>')
        
        //replacing list styles
            .replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
            .replaceAll('<ol style="list-style-type: lower-roman;">', '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
            .replaceAll('<ol style="list-style-type: upper-roman;">', '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;">')
            .replaceAll('<ol style="list-style-type: lower-alpha;">', '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
            .replaceAll('<ol style="list-style-type: upper-alpha;">', '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;">')
            .replaceAll(/<ol start="(.*?)">/g, '<ol class="list-decimal pl-8 mb-4" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="i">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="I">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="a">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="A">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')
        
        //replacing tables
            .replace(/<table(.*?)>/g, '<div class="border rounded mb-4 table-responsive"><table class="w-full border-collapse border-spacing-0 text-center">')
            .replaceAll('<tbody>', '<tbody class="divide-y">')
            .replaceAll('</table>', '</table></div>')
            //.replace(/<td nowrap="nowrap" width="(.*?)">/g, '<td width="$1">')
        
        //replacing paragraph
            //.replace(/<p class="MsoNormal">/g, '<p>')
            .replaceAll('<p style="text-align: center;">', '<p class="text-center" style="text-align: center;">')
            .replaceAll('<p style="text-align: left;">', '<p class="text-left" style="text-align: left;">')
            .replaceAll('<p style="text-align: right;">', '<p class="text-right" style="text-align: right;">')
            .replaceAll('<p style="text-align: justify;">', '<p class="text-justify" style="text-align: justify;">')

        //replacing list discs
            .replace(/<ul(.*?)>/g, '<ul class="list-disc pl-8 mb-4"$1>')

         //images
            .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto rounded-lg" $1/>')
        
        //removing spans language
            //.replace(/<span lang="EN-US">/g, '')
            //.replace(/<span lang="EN-GB">/g, '')
            //.replace(/<span lang="ZH-CN">/g, '')
            //.replace(/<span lang="JA">/g, '')
            //.replace(/<span lang="KHM">/g, '')
            //.replace(/<span lang="TH">/g, '')
            //.replace(/<span lang="KO">/g, '')
            //.replace(/<span lang="AR-SA">/g, '')
            //.replace(/<span data-contrast="auto">/g, '')
            //.replace(/<span lang="EN-US" style="color: windowtext;">/g, '')
            //.replace(/<span lang="EN-US" style="color: black;">/g, '')
            //.replace(/<span lang="EN-GB" style="color: black;">/g, '')
            //.replace(/<span lang="TH" style="color: black;">/g, '')
            //.replace(/<span lang="AR-SA" style="color: black;">/g, '')
            //.replace(/<span style="color: black;">/g, '')
            //.replace(/<\/span>/g, '')

        //cleaning up some mess
            //.replaceAll('<br />', '')
            //.replaceAll('<br/>', '')
            //.replaceAll(' class="MsoNormal"', '')
            //.replaceAll(' class="MsoNoSpacing"', '')
            //.replaceAll('<p class="MsoListParagraphCxSpMiddle">', '<p>')

        let finalContent = mergedContent;

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