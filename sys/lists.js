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
        <input type="text" id="game-name-5" placeholder="Enter Game Name" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
        <input type="text" id="game-code-5" placeholder="Enter Game Code" class="outline-none text-xs w-full border border-[#ff8906] p-2 placeholder:text-gray-500" autocomplete="off">
    </div>
</div>`
}


var gameTable1 = `<table id="game-list-1" class="non-editable">
    <tbody>
        <tr>
            <td>${gameListTitle.value}</td>
        </tr>
        <tr>
            <td>${gameProduct.value}</td>
            <td>${gameProvider.value}</td>
            <td>${gameImage}</td>
            <td>${gameName.value}</td>
            <td>${gameCode.value}</td>
            <td>${gameCTA.value}</td>
        </tr>
    </tbody>
</table><br>`