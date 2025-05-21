//These are templates that will be set to the two editors
var ENtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
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
                                        <p>Write/Paste Significant Contents here</p>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var ENSCtemplate =   `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
                        <div id="content-en-gb" class="tnc-content-wrap non-editable">
                            <div class="contentwrap tnc-content-format non-editable">
                                <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                                <div class="mceEditable">
                                    <p>Write/Paste Significant Contents here</p>
                                </div>
                            </div>
                            <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                        </div>`

var ENFPtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
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

var CNtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
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

var CNSCtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">主要规则</h2>
                            <div class="mceEditable">
                                 <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var CNFPtemplate = `<div id="content-zh-cn" class="tnc-content-wrap non-editable">
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

var VNtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
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

var VNSCtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Điều Kiện Tóm Lược</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var VNFPtemplate = `<div id="content-vi-vn" class="tnc-content-wrap non-editable">
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

var THtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
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

var THSCtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">ข้อกำหนดและเงื่อนไขฉบับย่อ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var THFPtemplate = `<div id="content-th-th" class="tnc-content-wrap non-editable">
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

var KRtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
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

var KRSCtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">약관 주요내용</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var KRFPtemplate = `<div id="content-ko-kr" class="tnc-content-wrap non-editable">
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

var IDtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
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

var IDSCtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Syarat dan Kondisi Penting</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var IDFPtemplate = `<div id="content-id-id" class="tnc-content-wrap non-editable">
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

var KHtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
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

var KHSCtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">លក្ខខណ្ឌសំខាន់ៗ</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`
var KHFPtemplate = `<div id="content-km-kh" class="tnc-content-wrap non-editable">
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

var JPtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
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

var JPSCtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">キャンペーン概要</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var JPFPtemplate = `<div id="content-ja-jp" class="tnc-content-wrap non-editable">
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

var INtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
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

var INSCtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">टमहत्वपूर्ण स्थितियां</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Localized Significant Contents here</p>
                            </div>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

var INFPtemplate = `<div id="content-hi-in" class="tnc-content-wrap non-editable">
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

//for inserting game list 
var gameListTemplates = {
    list1: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-1" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`,

list2: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-1" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-2" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`,

list3: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-1" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-2" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-3" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`,

list4: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-1" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-2" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-3" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-4" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-4" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-4" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`,

list5: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-1" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-2" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-3" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-4" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-4" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-4" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
    <div class="flex flex-row gap-x-2">
        <select id="game-provider-5" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select Game Provider</option>
            <optgroup label="Casino Providers">
                <option value="advantplay">Advant Play</option>
                        <option value="betsoft">Betsoft</option>
                        <option value="bigtimegaming">Big Time Gaming</option>
                        <option value="evolution">Evolution</option>
                        <option value="galaxsys">Galaxsys</option>
                        <option value="genesis">Genesis</option>
                        <option value="habanero">Habanero</option>
                        <option value="isoftbet">Isoftbet</option>
                        <option value="jili">Jili</option>
                        <option value="leap">Leap</option>
                        <option value="microgaming">Microgaming</option>
                        <option value="netent">Netent</option>
                        <option value="nolimitcity">Nolimit City</option>
                        <option value="pocketgames">Pocket Games Soft</option>
                        <option value="playngo">Play N Go</option>
                        <option value="playtech">PlayTech</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="quickspin">Quick Spin</option>
                        <option value="redtiger">Red Tiger</option>
                        <option value="skywind">SkyWind</option>
                        <option value="spribe">Spribe</option>
            </optgroup>
            <optgroup label="Live Casino Providers">
                <option value="aesexy">Aesexy</option>
                        <option value="agiledeal">Agile Deal</option>
                        <option value="asiagaming">Asia Gaming</option>
                        <option value="db">DB</option>
                        <option value="dblive">DB Live</option>
                        <option value="evolution">Evolution</option>
                        <option value="ezugi">Ezugi</option>
                        <option value="n2live">N2 Live</option>
                        <option value="oncasino">ON Casino</option>
                        <option value="pragmatic">Pragmatic Play</option>
                        <option value="sexybaccarat">Sexy Baccarat</option>
                        <option value="wmcasino">WM Casino</option>
                        <option value="worldentertainment">World Entertainment</option>
                        <option value="zodiacracing">Zodiac Racing</option>
            </optgroup>
        </select>
        <select id="cta-5" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
            <option value="">Select button text</option>
            <optgroup label="Localized Play Now">
                <option value="Play Now">Play Now</option>
                <option value="立即游戏">立即游戏</option>
                <option value="CHƠI NGAY">CHƠI NGAY</option>
                <option value="เล่นเลย">เล่นเลย</option>
                <option value="지금 플레이">지금 플레이</option>
                <option value="MAIN SEKARANG">MAIN SEKARANG</option>
                <option value="លេងឥឡូវនេះ">លេងឥឡូវនេះ</option>
                <option value="今すぐプレー">今すぐプレー</option>
                <option value="अभी खेलें">अभी खेलें</option>
            </optgroup>
            <optgroup label="Localized More Info">
                <option value="More Info">More Info</option>
                <option value="优惠详情">优惠详情</option>
                <option value="CHI TIẾT">CHI TIẾT</option>
                <option value="อ่านเพิ่มเติม">อ่านเพิ่มเติม</option>
                <option value="더 보기">더 보기</option>
                <option value="INFO LENGKAP">INFO LENGKAP</option>
                <option value="ព័ត៌មានបន្ថែម">ព័ត៌មានបន្ថែម</option>
                <option value="詳細">詳細</option>
                <option value="अधिक जानकारी">अधिक जानकारी</option>
            </optgroup>
        </select>
    </div>
    <div class="flex flex-row gap-x-2 ">
        <input type="text" id="game-image-5" placeholder="Enter English Game Name for icon" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-name-5" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-5" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`
}


