//Game List

// live
// <SCard class="my-4 bg-secondary">
//   <SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span>
//   </SSectionHeading>
//   <SList>
//     <SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar>
//         <SAvatar src="https://doc.188contents.com/star4-content/images/live/game-provider/game-image-4x3-sm.webp" alt="game-image" size="40"
//           class="!rounded-lg ml-6" />
//       </template>game-name<template #appendAction>
//         <GameLauncher v-slot="{openGame}" product="live" game="game-code">
//           <SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high"
//             class="bg-primary--darken-5 hover:text-light--high mr-6">game-cta</SButton>
//           <SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6">
//             <SIcon>icon-arrow-right</SIcon>
//           </SButton>
//         </GameLauncher>
//       </template></SListItem>
//   </SList>
// </SCard>


// casino
// <SCard class="my-4 bg-secondary">
//   <SSectionHeading dark divider contained title-tag="h4"><span class="text-subtitle-1">Recommended Games</span>
//   </SSectionHeading>
//   <SList>
//     <SListItem dark class="md:hover:bg-secondary--darken-4"><template #prependAvatar>
//         <SAvatar src="https://doc.188contents.com/star4-content/images/live/game-provider/game-image/game-image-4x3-sm.webp" alt="game-image" size="40"
//           class="!rounded-lg ml-6" />
//       </template>game-name<template #appendAction>
//         <GameLauncher v-slot="{openGame}" product="casino" game="game-code">
//           <SButton @click="openGame()" v-if="breakpoints.smAndUp" color="text-light--high"
//             class="bg-primary--darken-5 hover:text-light--high mr-6">game-cta</SButton>
//           <SButton @click="openGame()" v-else dark icon-only flat rounded class="mr-6">
//             <SIcon>icon-arrow-right</SIcon>
//           </SButton>
//         </GameLauncher>
//       </template></SListItem>
//   </SList>
// </SCard>




//Sportsbook Free Bet
//Indonesia EN & Local
//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" /></IncludeContent>
//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/id-id_188DAYBLUE-0824_where-to-find-your-sportsbook-free-bet.html'" /></IncludeContent>

//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/en-gb_THD-0725-2_where-to-find-your-free-spins.html'" /></IncludeContent>
//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/id-id_THD-0725-2_where-to-find-your-free-spins.html'" /></IncludeContent>

//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/en-gb_THD-0725_how-to-participate-in-this-promotion.html'" /></IncludeContent>
//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202507/id-id_THD-0725_how-to-participate-in-this-promotion.html'" /></IncludeContent>

//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202408/188DAYBLUE-0824_where-to-find-your-evolution-free-bet.html'" /></IncludeContent>
//<IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Indonesia/202408/id-id_188DAYBLUE-0824_where-to-find-your-evolution-free-bet.html'" /></IncludeContent>

//Japan EN & Local
//Where to find your sportsbook free bet <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'" /></IncludeContent>
//How to use sportsbook free bet  <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_how-use-bet.html'" /></IncludeContent>
//Where to find your free spins <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/en-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'" /></IncludeContent>

//Where to find your sportsbook free bet LOCAL <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_where-to-find-your-sportsbook-free-bet.html'" /></IncludeContent>
//How to use sportsbook free bet LOCAL <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_how-use-bet.html'" /></IncludeContent>
//Where to find your free spins LOCAL <IncludeContent :init-collapse="isClaimed" :url="gv.domains.content + '/templates/promotions/Japan/202505/ja-jp_JPAFFSNSPROMO_0525_whre-to-find-your-free-spin.html'" /></IncludeContent>


//Replacing elements for Tinymce version 6 higher>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //.replaceAll(/<ol start="(.*?)" type="i">/g, '<ol class="list-lower-roman pl-8 mb-4" style="list-style-type: lower-roman;" start="$1">')
    //.replaceAll(/<ol start="(.*?)" type="I">/g, '<ol class="list-upper-roman pl-8 mb-4" style="list-style-type: upper-roman;" start="$1">')
    //.replaceAll(/<ol start="(.*?)" type="a">/g, '<ol class="list-lower-alpha pl-8 mb-4" style="list-style-type: lower-alpha;" start="$1">')
    //.replaceAll(/<ol start="(.*?)" type="A">/g, '<ol class="list-upper-alpha pl-8 mb-4" style="list-style-type: upper-alpha;" start="$1">')

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

    //clean up
        //.replaceAll(' class="MsoNormal"', '')
        //.replaceAll(' class="MsoNoSpacing"', '')
        //.replaceAll('<p class="MsoListParagraphCxSpMiddle">', '<p>')
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2 table games
// <div class="md:w-1/2 w-full m-auto" style="width: 30%;”>