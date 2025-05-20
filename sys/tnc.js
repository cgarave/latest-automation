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
    indonesia: ['https://doc-cdn.stcb18x1.com/star4-content/images/banners/promotion/2025-03-Mar/BDAYPROMO-0225/BDAYPROMO-0225.png?v=7',
                'https://doc-cdn.stcb18x1.com/star4-content/images/banners/promotion/2024-06-Jun/EUROREDEPOLEJ-0624/EUROREDEPOLEJ-0624-image01.webp'
            ]
}
document.getElementById('zh-image-array-container').innerHTML = `${image_lib.china.map(chinaAssets => `<img src="${chinaAssets}" class="zh-image rounded-md hover:outline-2 outline-[#ff9200] cursor-pointer">`).join('')}`
document.getElementById('id-image-array-container').innerHTML = `${image_lib.indonesia.map(indonesiaAssets => `<img src="${indonesiaAssets}" class="id-image rounded-md hover:outline-2 outline-[#ff9200] cursor-pointer">`).join('')}`

//These are templates that will be set to the two editors
const ENtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
                    <div id="content-en-gb" class="tnc-content-wrap non-editable">
                        <div class="contentwrap tnc-content-format non-editable">
                            <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                            <div class="mceEditable">
                                <p>Write/Paste Significant Contents here</p>
                                <ol>
                                    <li>text</li>
                                </ol>
                            </div>
                            <SExpansionPanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">
                                <template #header>
                                    <h2 class="m-4 font-semibold text-body-1 mceEditable">Full Promotion Specific Terms and Conditions</h2>
                                </template>
                                <template #content>
                                    <div class="full-promotion-content mceEditable">
                                        <p>Write/Paste Significant Contents here</p>
                                <ol>
                                    <li>text</li>
                                </ol>
                                    </div>
                                </template>
                            </SExpansionPanel>
                        </div>
                        <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                    </div>`

const ENSCtemplate =   `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
                        <div id="content-en-gb" class="tnc-content-wrap non-editable">
                            <div class="contentwrap tnc-content-format non-editable">
                                <h2 class="mb-4 font-semibold text-body-1 mceEditable">Significant Conditions</h2>
                                <div class="mceEditable">
                                    <p>Write/Paste Significant Contents here</p>
                                </div>
                            </div>
                            <IncludeContent :url="promoDetail.termsTpl"></IncludeContent>
                        </div>`

const ENFPtemplate = `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><script>$(function () { $("#webteam-ss").attr("href", "https://doc.188contents.com/contents/Components/webteam/webteam.css?" + $.now()); });</script>
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

const gameListTemplates = {
    list1: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>`,

    list2: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>`,

    list3: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>`,

list4: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-4" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-4" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>`,

list5: `<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-1" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-1" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-1" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-2" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-2" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-2" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-3" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-3" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-3" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-4" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-4" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-4" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>

<div class="flex flex-col gap-y-2 bg-neutral-900 rounded-md p-2">
  <div class="flex flex-row gap-x-2">
      <select id="game-product-5" class="bg-neutral-900 text-white font-semibold text-xs rounded-[4px] p-2 border border-transparent w-full outline-none">
          <option value="">Select product</option>
          <option value="casino">Casino</option>
          <option value="live">Live Casino</option>
      </select>
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
          <option value="Play Now">Play Now</option>
          <option value="More Info">More Info</option>
      </select>
  </div>
  <div class="flex flex-row gap-x-2 ">
      <input type="text" id="game-name-5" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
      <input type="text" id="game-code-5" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
  </div>
</div>`
}

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
    toolbar: 'code table | numlist bullist | image link | indent outdent | alignleft aligncenter alignright alignjustify | forecolor bold italic underline strikethrough | insertComponent insertImage',
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
    protect: [ //protects the codes from deletion when inserting content to the editors. Tinymce doesn't accept these type of codes and will delete upon importing unless declared to protect plugin.
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
        { title: '[EN-GB]Promotion General Terms and Conditions', value: 'https://www.188bet.com/en-gb/promotions#promo_gen_terms' },
        { title: '[EN-GB]Standard Terms and Conditions', value: 'https://www.188bet.com/en-gb/corporate-affairs/terms-and-conditions' },
        { title: '[ZH-CN]Promotion General Terms and Conditions', value: 'https://www.188bet.com/zh-cn/promotions#promo_gen_terms' },
        { title: '[ZH-CN]Standard Terms and Conditions', value: 'https://www.188bet.com/zh-cn/corporate-affairs/terms-and-conditions' },
        { title: '[VI-VN]Promotion General Terms and Conditions', value: 'https://www.188bet.com/vi-vn/promotions#promo_gen_terms' },
        { title: '[VI-VN]Standard Terms and Conditions', value: 'https://www.188bet.com/vi-vn/corporate-affairs/terms-and-conditions' },
        { title: '[TH-TH]Promotion General Terms and Conditions', value: 'https://www.188bet.com/th-th/promotions#promo_gen_terms' },
        { title: '[TH-TH]Standard Terms and Conditions', value: 'https://www.188bet.com/th-th/corporate-affairs/terms-and-conditions' },
        { title: '[KO-KR]Promotion General Terms and Conditions', value: 'https://www.188bet.com/ko-kr/promotions#promo_gen_terms' },
        { title: '[KO-KR]Standard Terms and Conditions', value: 'https://www.188bet.com/ko-kr/corporate-affairs/terms-and-conditions' },
        { title: '[ID-ID]Promotion General Terms and Conditions', value: 'https://www.188bet.com/id-id/promotions#promo_gen_terms' },
        { title: '[ID-ID]Standard Terms and Conditions', value: 'https://www.188bet.com/id-id/corporate-affairs/terms-and-conditions' },
        { title: '[KM-KH]Promotion General Terms and Conditions', value: 'https://www.188bet.com/km-kh/promotions#promo_gen_terms' },
        { title: '[KM-KH]Standard Terms and Conditions', value: 'https://www.188bet.com/km-kh/corporate-affairs/terms-and-conditions' },
        { title: '[JA-JP]Promotion General Terms and Conditions', value: 'https://www.188bet.com/ja-jp/promotions#promo_gen_terms' },
        { title: '[JA-JP]Standard Terms and Conditions', value: 'https://www.188bet.com/ja-jp/corporate-affairs/terms-and-conditions' },
        { title: '[HI-IN]Promotion General Terms and Conditions', value: 'https://www.188bet.com/hi-in/promotions#promo_gen_terms' },
        { title: '[HI-IN]Standard Terms and Conditions', value: 'https://www.188bet.com/hi-in/corporate-affairs/terms-and-conditions' },
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
            .replaceAll('<p> </p>', '')

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
            .replace(/<span class="(.*?)">/g, '')
            .replace(/<span class="(.*?)" data-ccp-props="(.*?)"> /g, '')
            .replace(/<tr(.*?)>/g, '<tr>')
            .replace(/data-celllook="(.*?)"/g, '')
            .replaceAll('<em>', '')
            .replaceAll('</em>', '')
            //.replace(/<td(.*?)>/g, '<td>')
            
            //finding imported game icon components then replace it with the editor component style
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            .replace(/<includecontent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'">\s*<\/includecontent>/g, '<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga?<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>')
            //BACKUP.replace(/<div class="md:w-1\/2 w-full m-auto">\s*<customgames product="(.*?)" title="(.*?)" games="(.*?)" type="(.*?)" class="(.*?)" :limit="(.*?)">\s*<\/customgames>\s*<\/div>/g, '<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">$1</td></tr><tr><td>$2</td></tr><tr><td>$3</td></tr><tr><td style="display: none;">$4</td></tr></tbody></table><br>')
            .replace(/<div class="(.*?)">\s*<customgames product="(.*?)" title="(.*?)" games="(.*?)" type="(.*?)" class="(.*?)" :limit="(.*?)">\s*<\/customgames>\s*<\/div>/g, '<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">$1</td></tr><tr><td style="display: none;">$2</td></tr><tr><td>$3</td></tr><tr><td>$4</td></tr></tbody></table><br>')
            
            //imported file links
            .replace(/<a :href="`(.*?)`">/g, '<a href="`$1`">')
            
            //imported tables
            .replaceAll('<div class="md:w-1/2 w-full m-auto">', '')
            .replaceAll('<div class="md:w-1/3 w-full m-auto">', '')
            .replace(/<div class="border rounded mb-4 table-responsive">\s*<table class="w-full border-collapse border-spacing-0 text-center">/g, '<table class="w-full border-collapse border-spacing-0 text-center">')
            .replace(/<\/table>\s*<\/div>/g, '</table>')

            //This section is to add the editable class to the imported file

            .replace(/<div id="(.*?)" class="tnc-content-wrap\s*">/g, '<div id="$1" class="tnc-content-wrap non-editable">')
            .replace(/<div class="contentwrap tnc-content-format\s*">/g, '<div class="contentwrap tnc-content-format non-editable">')

            // .replace(/<h2 class="mb-4 font-semibold text-body-1\s*">/g, '<h2 class="mb-4 font-semibold text-body-1 mceEditable">') //significant conditions title backup
            // .replaceAll('<div class="">', '<div class="mceEditable">')

            //this supports the importing of old automations
            //adding editable class for significant contents
            .replaceAll('<div class="">', '')
            .replace(/<h2 class="mb-4 font-semibold text-body-1\s*">(.*?)<\/h2>/g, '<h2 class="mb-4 font-semibold text-body-1 mceEditable">$1</h2><div class="mceEditable">')

            //backup -- this causes the IMPORT of full promotion only template to break
            // .replace(/<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')
            // .replace(/<\/div>\s*<\/div>\s*<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')

            .replace(/<h2 class="m-4 font-semibold text-body-1\s*">/g, '<h2 class="m-4 font-semibold text-body-1 mceEditable">') //full promotion title
            .replace(/<div class="full-promotion-content\s*">/g, '<div class="full-promotion-content mceEditable">') //full promotion content
            // console.log(event.content);

            if(event.content.match(/<div class="mceEditable">/g)){ //fixes the issues when importing full promotion only template. It will add </div> at the start of SExpansionPanel when the imported content has Significant Conditions
                event.content = event.content
                .replace(/<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')
                .replace(/<\/div>\s*<\/div>\s*<sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">/g, '</div><sexpansionpanel class="last:rounded-b-lg border-0" header-class="bg-transparent" content-class="last:rounded-b-lg">')
            }
        });

        //This function is for tinymce 4 only. version 5 and above have a different function for adding custom toolbar buttons lol
        editor.addButton('insertImage', {
            text: 'Image Library',  // Text on the button
            icon: 'image',  // Set an icon (optional)
            onclick: function() {
                // Action to perform when the button is clicked
                //Dear Programmer,
                //When I wrote this code, only god and I knew how it worked.
                //Now, only god knows it!
                //Therefore, if you are trying to optimize this routine and it fails,
                //Please increase this counter as a warning for the next person:
                //total_hours_wasted: 53
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

        editor.addButton('insertComponent', {
            type: 'menubutton',  // Define the button as a dropdown menu
            text: 'Insert Component',
            icon: false,
            menu: [
              {
                text: 'Sportsbook Free Bet ENG',
                tooltip: 'Insert sportsbook free bet component',
                onclick: function() {
                  editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                }
              },
              {
                text: 'Sportsbook Free Bet ID',
                tooltip: 'Insert sportsbook free bet component',
                onclick: function() {
                  editor.insertContent('<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga?<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ \'\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" \/><\/IncludeContent></h5><br>');  // Insert content on selection
                }
              },
              {
                text: 'Recommended Games Table',
                tooltip: 'Insert recommended games component',
                onclick: function() {
                    const gameCodesInsertBtn = document.getElementById('gameCodesInsertBtn');
                    const gameCodesInput = document.getElementById('input-game-codes-container');
                    const cancelGameCodesBtn = document.getElementById('cancelGameCodesBtn');
                    gameCodesInput.classList.remove('hidden');
                    gameCodesInsertBtn.onclick = () => { //onclick resolves the issue of duplicating click event when insert button is clicked using addEventListener
                        document.getElementById('input-game-codes-container').classList.add('hidden');
                        console.log(numberOfGames.dataset);
                        editor.insertContent(`<table id="game-icons-1" class="non-editable"><tbody><tr><td style="display: none;">${numberOfGames.value}</td></tr><tr><td style="display: none;">${gameProduct.value}</td></tr><tr><td>${gameTitle.value}</td></tr><tr><td>${gameCodes.value}</td></tr></tbody></table><br>`)
                    }
                    cancelGameCodesBtn.onclick = () => {
                        gameCodesInput.classList.add('hidden');
                    }
                }
              },
              {
                text: 'Recommended Games List',
                tooltip: 'Insert recommended games component',
                onclick: function() {
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
                                    let gameProduct = document.getElementById('game-product-1');
                                    let gameProvider = document.getElementById('game-provider-1');
                                    let gameName = document.getElementById('game-name-1');
                                    let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode = document.getElementById('game-code-1');
                                    let gameCTA = document.getElementById('cta-1');
                                    editor.insertContent(`<table id="game-list-1" class="non-editable"><tbody><tr><td>${gameProduct.value}</td><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr></tbody></table><br>`)
                                }
                                break;
                            case '2':
                                document.getElementById('div-list-container').innerHTML = gameListTemplates.list2;
                                gameListInsertBtn.onclick = () => {
                                    let gameProduct = document.getElementById('game-product-1');
                                    let gameProvider = document.getElementById('game-provider-1');
                                    let gameCTA = document.getElementById('cta-1');
                                    let gameName = document.getElementById('game-name-1');
                                    let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode = document.getElementById('game-code-1');

                                    let gameProduct2 = document.getElementById('game-product-2');
                                    let gameProvider2 = document.getElementById('game-provider-2');
                                    let gameCTA2 = document.getElementById('cta-2');
                                    let gameName2 = document.getElementById('game-name-2');
                                    let gameImage2 = gameName2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode2 = document.getElementById('game-code-2');

                                    editor.insertContent(`<table id="game-list-2" class="non-editable"><tbody><tr><td>${gameProduct.value}</td><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProduct2.value}</td><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr></tbody></table><br>`)
                                }
                                break;
                            case '3':
                                document.getElementById('div-list-container').innerHTML = gameListTemplates.list3;
                                gameListInsertBtn.onclick = () => {
                                    let gameProduct = document.getElementById('game-product-1');
                                    let gameProvider = document.getElementById('game-provider-1');
                                    let gameCTA = document.getElementById('cta-1');
                                    let gameName = document.getElementById('game-name-1');
                                    let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode = document.getElementById('game-code-1');

                                    let gameProduct2 = document.getElementById('game-product-2');
                                    let gameProvider2 = document.getElementById('game-provider-2');
                                    let gameCTA2 = document.getElementById('cta-2');
                                    let gameName2 = document.getElementById('game-name-2');
                                    let gameImage2 = gameName2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode2 = document.getElementById('game-code-2');

                                    let gameProduct3 = document.getElementById('game-product-3');
                                    let gameProvider3 = document.getElementById('game-provider-3');
                                    let gameCTA3 = document.getElementById('cta-3');
                                    let gameName3 = document.getElementById('game-name-3');
                                    let gameImage3 = gameName3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode3 = document.getElementById('game-code-3');
                                    editor.insertContent(`<table id="game-list-3" class="non-editable"><tbody><tr><td>${gameProduct.value}</td><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProduct2.value}</td><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProduct3.value}</td><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr></tbody></table><br>`)
                                }
                                break;
                            case '4':
                                document.getElementById('div-list-container').innerHTML = gameListTemplates.list4;
                                gameListInsertBtn.onclick = () => {
                                    let gameProduct = document.getElementById('game-product-1');
                                    let gameProvider = document.getElementById('game-provider-1');
                                    let gameCTA = document.getElementById('cta-1');
                                    let gameName = document.getElementById('game-name-1');
                                    let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode = document.getElementById('game-code-1');

                                    let gameProduct2 = document.getElementById('game-product-2');
                                    let gameProvider2 = document.getElementById('game-provider-2');
                                    let gameCTA2 = document.getElementById('cta-2');
                                    let gameName2 = document.getElementById('game-name-2');
                                    let gameImage2 = gameName2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode2 = document.getElementById('game-code-2');

                                    let gameProduct3 = document.getElementById('game-product-3');
                                    let gameProvider3 = document.getElementById('game-provider-3');
                                    let gameCTA3 = document.getElementById('cta-3');
                                    let gameName3 = document.getElementById('game-name-3');
                                    let gameImage3 = gameName3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode3 = document.getElementById('game-code-3');

                                    let gameProduct4 = document.getElementById('game-product-4');
                                    let gameProvider4 = document.getElementById('game-provider-4');
                                    let gameCTA4 = document.getElementById('cta-4');
                                    let gameName4 = document.getElementById('game-name-4');
                                    let gameImage4 = gameName4.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode4 = document.getElementById('game-code-4');

                                    editor.insertContent(`<table id="game-list-4" class="non-editable"><tbody><tr><td>${gameProduct.value}</td><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProduct2.value}</td><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProduct3.value}</td><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr><tr><td>${gameProduct4.value}</td><td>${gameProvider4.value}</td><td>${gameImage4}</td><td>${gameName4.value}</td><td>${gameCode4.value}</td><td>${gameCTA4.value}</td></tr></tbody></table><br>`)
                                }
                                break;
                            case '5':
                                document.getElementById('div-list-container').innerHTML = gameListTemplates.list5;
                                gameListInsertBtn.onclick = () => {
                                    let gameProduct = document.getElementById('game-product-1');
                                    let gameProvider = document.getElementById('game-provider-1');
                                    let gameCTA = document.getElementById('cta-1');
                                    let gameName = document.getElementById('game-name-1');
                                    let gameImage = gameName.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode = document.getElementById('game-code-1');

                                    let gameProduct2 = document.getElementById('game-product-2');
                                    let gameProvider2 = document.getElementById('game-provider-2');
                                    let gameCTA2 = document.getElementById('cta-2');
                                    let gameName2 = document.getElementById('game-name-2');
                                    let gameImage2 = gameName2.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode2 = document.getElementById('game-code-2');

                                    let gameProduct3 = document.getElementById('game-product-3');
                                    let gameProvider3 = document.getElementById('game-provider-3');
                                    let gameCTA3 = document.getElementById('cta-3');
                                    let gameName3 = document.getElementById('game-name-3');
                                    let gameImage3 = gameName3.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode3 = document.getElementById('game-code-3');

                                    let gameProduct4 = document.getElementById('game-product-4');
                                    let gameProvider4 = document.getElementById('game-provider-4');
                                    let gameCTA4 = document.getElementById('cta-4');
                                    let gameName4 = document.getElementById('game-name-4');
                                    let gameImage4 = gameName4.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode4 = document.getElementById('game-code-4');

                                    let gameProduct5 = document.getElementById('game-product-5');
                                    let gameProvider5 = document.getElementById('game-provider-5');
                                    let gameCTA5 = document.getElementById('cta-5');
                                    let gameName5 = document.getElementById('game-name-5');
                                    let gameImage5 = gameName5.value.toLowerCase().replace(/\s+/g, '-').trim();
                                    let gameCode5 = document.getElementById('game-code-5');

                                    editor.insertContent(`<table id="game-list-5" class="non-editable"><tbody><tr><td>${gameProduct.value}</td><td>${gameProvider.value}</td><td>${gameImage}</td><td>${gameName.value}</td><td>${gameCode.value}</td><td>${gameCTA.value}</td></tr><tr><td>${gameProduct2.value}</td><td>${gameProvider2.value}</td><td>${gameImage2}</td><td>${gameName2.value}</td><td>${gameCode2.value}</td><td>${gameCTA2.value}</td></tr><tr><td>${gameProduct3.value}</td><td>${gameProvider3.value}</td><td>${gameImage3}</td><td>${gameName3.value}</td><td>${gameCode3.value}</td><td>${gameCTA3.value}</td></tr><tr><td>${gameProduct4.value}</td><td>${gameProvider4.value}</td><td>${gameImage4}</td><td>${gameName4.value}</td><td>${gameCode4.value}</td><td>${gameCTA4.value}</td></tr><tr><td>${gameProduct5.value}</td><td>${gameProvider5.value}</td><td>${gameImage5}</td><td>${gameName5.value}</td><td>${gameCode5.value}</td><td>${gameCTA5.value}</td></tr></tbody></table><br>`)
                                }
                                break;
                        }
                        
                    })

                    cancelGameListBtn.onclick = () => {
                        gameListInput.classList.add('hidden');
                    }
                }
              },
            ]
        });

        editor.on('keydown', function(event) { //this stop the user from using ctrl+A or cmd+A
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 65) {

                const selectedNode = editor.selection.getNode();    
                // event.preventDefault();
                // editor.selection.collapse();
                
                if(selectedNode.childNodes.length == 0){
                    editor.insertContent('<p></p>')
                }
                
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
    //let promoType = input.slice(indexOf_ + 1, indexOf_ + 5) + '_'
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
    //document.getElementById('import-check').checked = false;
    document.getElementById('filename').value = '';
})

//guide button
document.getElementById('importBtn').addEventListener('click', () => {
})

//dropdown region option
var tncRegionDropdown = document.getElementById('tnc-regions-dropdown');
var tncTemplateDropdown = document.getElementById('template-dropdown');
tncRegionDropdown.addEventListener('change', () => {
    const selectedRegion = tncRegionDropdown.value;
    switch (selectedRegion) {
        case 'zh-cn':
            document.getElementById('filename').value = 'china_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'vi-vn':
            document.getElementById('filename').value = 'Vietnam_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'th-th':
            document.getElementById('filename').value = 'Thailand_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'ko-kr':
            document.getElementById('filename').value = 'Korea_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'id-id':
            document.getElementById('filename').value = 'Indonesia_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'km-kh':
            document.getElementById('filename').value = 'Cambodia_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'ja-jp':
            document.getElementById('filename').value = 'Japan_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
            break;
        case 'hi-in':
            document.getElementById('filename').value = 'India_'
            document.getElementById('template-container').classList.remove('hidden')

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
            //document.getElementById('import-check').checked = false;
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
        .replaceAll('<tbody>', '<tbody class="divide-y">')
        .replaceAll('</table>', '</table><br>')
        //.replace(/<td nowrap="nowrap" width="(.*?)">/g, '<td width="$1">')

        //replacing paragraph
        .replaceAll('<p style="text-align: center;">', '<p class="text-center" style="text-align: center;">')
        .replaceAll('<p style="text-align: left;">', '<p class="text-left" style="text-align: left;">')
        .replaceAll('<p style="text-align: right;">', '<p class="text-right" style="text-align: right;">')
        .replaceAll('<p style="text-align: justify;">', '<p class="text-justify" style="text-align: justify;">')
        .replaceAll('<p>', '<p class="mb-4">')

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
        //const contentScripts = doc.getElementsByTagName('head')[0].innerHTML;
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
            //tinymce.get('mytextarea').setContent(contentScripts.trim() + contentEN.outerHTML);
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
        
        //console.log(doc.getElementsByTagName('includecontent')[0]);
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
        
        //replacing list styles
            .replaceAll('<ol>', '<ol class="list-decimal pl-8 mb-4">')
            .replaceAll(/<ol style="list-style-type: lower-roman;">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;">')
            .replaceAll(/<ol style="list-style-type: lower-alpha;">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;">')
            .replaceAll(/<ol style="list-style-type: lower-roman;" start="(.*?)">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
            .replaceAll(/<ol style="list-style-type: upper-roman;" start="(.*?)">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
            .replaceAll(/<ol style="list-style-type: lower-alpha;" start="(.*?)">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
            .replaceAll(/<ol style="list-style-type: upper-alpha;" start="(.*?)">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')
            .replaceAll(/<ol start="(.*?)">/g, '<ol class="list-decimal pl-8 mb-4" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="i">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="I">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="a">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
            //.replaceAll(/<ol start="(.*?)" type="A">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')

        //replacing recommended game icons
            .replace(/<table id="game-icons-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td style="display: none;">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td style="display: none;">(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<div class="$1"><CustomGames product="$2" title="$3" games="$4" type="table" class="tnc-multiple-games" :limit="200"></CustomGames></div>')
            //.replace(/<table id="live-casino-icons" class="non-editable">\s*<tbody>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<div class="md:w-1/2 w-full m-auto"><CustomGames product="live" title="$1" games="$2" type="$3" class="tnc-multiple-games" :limit="200"></CustomGames></div>')
            //.replace(/<table id="casino-icons" class="non-editable">\s*<tbody>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<CustomGames product="casino" title="$1" games="$2" type="$3" class="tnc-multiple-games" :limit="200"></CustomGames>')
            //.replace(/<table id="live-casino-icons" class="non-editable">\s*<tbody>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<CustomGames product="live" title="$1" games="$2" type="$3" class="tnc-multiple-games" :limit="200"></CustomGames>')

        //replacing recommended game list
            //product selection: live casino
            .replace(/<table id="game-list-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$1/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-2" class="non-editable">\s*<tbody>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$1/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$6/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-3" class="non-editable">\s*<tbody>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$1/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$6/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$11/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-4" class="non-editable">\s*<tbody>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$1/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$6/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$11/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$16/$17-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$18<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$19"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$20</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-5" class="non-editable">\s*<tbody>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>live<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$1/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$6/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$11/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$16/$17-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$18<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$19"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$20</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/live/$21/$22-4x3-sm.webp" alt="$23" size="40" class="!rounded-lg ml-6" /></template>$23<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$24"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$25</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')

            //product selection: casino
            .replace(/<table id="game-list-1" class="non-editable">\s*<tbody>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$1/$2/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-2" class="non-editable">\s*<tbody>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$1/$2/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$6/$7/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></GameLauncher></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-3" class="non-editable">\s*<tbody>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$1/$2/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$6/$7/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$11/$12/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-4" class="non-editable">\s*<tbody>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$1/$2/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$6/$7/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$11/$12/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$16/$17/$17-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$18<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$19"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$20</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')
            .replace(/<table id="game-list-5" class="non-editable">\s*<tbody>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<tr>\s*<td>casino<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<td>(.*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/g, '<SCard class="my-4 bg-secondary"><SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span></SSectionHeading><SList><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$1/$2/$2-4x3-sm.webp" alt="$3" size="40" class="!rounded-lg ml-6" /></template>$3<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$4"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$5</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$6/$7/$7-4x3-sm.webp" alt="$8" size="40" class="!rounded-lg ml-6" /></template>$8<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$9"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$10</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$11/$12/$12-4x3-sm.webp" alt="$13" size="40" class="!rounded-lg ml-6" /></template>$13<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$14"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$15</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$16/$17/$17-4x3-sm.webp" alt="$18" size="40" class="!rounded-lg ml-6" /></template>$18<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$19"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$20</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem><SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar><SAvatar src="https://doc.188contents.com/star4-content/images/casino/$21/$22/$22-4x3-sm.webp" alt="$23" size="40" class="!rounded-lg ml-6" /></template>$23<template #appendAction><GameLauncher v-slot="{openGame}" product="live" game="$24"><SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high" class="bg-primary--darken-5 hover:text-light--high mr-6">$25</SButton><SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6"><SIcon>icon-arrow-right</SIcon></SButton></template></SListItem></SList></SCard>')


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
            .replace(/<img(.*?)\/>/g, '<img class="my-2 mx-auto h-auto" $1/>')
            .replace(/<img(.*?)>/g, '<img class="my-2 mx-auto h-auto" $1/>')

        //Sportsbook Free Bet Component
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Where to find your Sportbook Free Bet<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/><\/IncludeContent><\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202408/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
            .replace(/<h5 class="non-editable" style="width: full; text-align: left; padding: 12px; background-color: #f5f5f5; border-left: 5px solid #5ba7ff;">Dimana Anda dapat menemukan Free bet olahraga\?<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content \+ '\/templates\/promotions\/Indonesia\/202408\/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" \/><\/IncludeContent><\/h5>/g, '<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + \'/templates/promotions/Indonesia/202408/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html\'" /></IncludeContent>')
        
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
            .replaceAll('<br />', '')
            .replaceAll('<br/>', '')
            .replaceAll('<br><br>', '<br>')
            .replaceAll('<p> </p>', '')
            //.replaceAll(' class="MsoNormal"', '')
            //.replaceAll(' class="MsoNoSpacing"', '')
            //.replaceAll('<p class="MsoListParagraphCxSpMiddle">', '<p>')

        //imports
            .replaceAll('sexpansionpanel', 'SExpansionPanel')
            .replaceAll('#header=""', '#header')
            .replaceAll('#content=""', '#content')
            .replaceAll('includecontent', 'IncludeContent')
            .replaceAll('customgames', 'CustomGames')
            .replaceAll('show-game-subtitle=""', 'show-game-subtitle')

            .replace(/<a href="&#96;(.*?)&#96;">/g, '<a :href="`$1`">')

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

//close preview
document.getElementById('hidePreview').addEventListener('click', () => {
    document.getElementById('preview-section').classList.toggle('hidden');
    document.getElementById('preview-overlay').classList.toggle('hidden');
})