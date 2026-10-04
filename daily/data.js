// 每日一字 Word of the Day — 內容來源：efetl.com/playlist.html?id=daily（52 支影片）
// 單字句子取自影片說明欄；情境對話由影片字幕＋語音辨識整理。
const THEMES = {
  home:    {zh:"居家生活", en:"At Home",        icon:"🏠"},
  road:    {zh:"交通汽車", en:"On the Road",    icon:"🚗"},
  fun:     {zh:"節慶校園", en:"Festivals & School", icon:"🏮"},
  outdoor: {zh:"戶外天氣", en:"Outdoors & Weather", icon:"🌤️"}
};

// 每日一字：word, pos, zh, 兩個例句 [en, zh], 影片 ID, 主題
const WORDS = [
  {id:"balance",  w:"balance",  pos:"n.", zh:"平衡", v:"9DmG4xwGhcU", t:"outdoor", s:[
    ["The girl keeps her balance while she walks on the logs.","這個小女孩在圓木上行走時保持平衡。"],
    ["They lose their balance while walking on the balance beam.","他們在平衡木上行走時失去平衡。"]]},
  {id:"mop",      w:"mop",      pos:"v.", zh:"拖地", v:"8CJVaYf8R1Y", t:"home", s:[
    ["Kevin mops the floor.","Kevin 在拖地。"],
    ["Kevin uses a mop to mop the floor.","Kevin 用一支拖把在拖地。"]]},
  {id:"exercise", w:"exercise", pos:"v.", zh:"運動", v:"adsoGAUX7SM", t:"outdoor", s:[
    ["Kevin exercises at the local park.","Kevin 在當地的公園運動。"],
    ["He uses the equipment to exercise.","他使用運動器材做運動。"]]},
  {id:"hsr",      w:"High Speed Rail", pos:"n.", zh:"高鐵", v:"JJW7GqbO6dM", t:"road", s:[
    ["People wait on the platform to ride the High Speed Rail.","人們在月台等待搭乘高鐵。"],
    ["The High Speed Rail is a great way to travel in Taiwan.","在台灣搭高鐵旅行很便利。"]]},
  {id:"christmas",w:"Christmas",pos:"n.", zh:"聖誕節", v:"Ym__GAlMO8Y", t:"fun", s:[
    ["People are starting to get ready for Christmas in the city.","這個城市的人們開始為聖誕節做準備了。"],
    ["Christmas is a joyous time of the year.","聖誕節是一年當中歡樂的時光。"]]},
  {id:"signal",   w:"signal",   pos:"n.", zh:"信號；方向燈", v:"rOKw0xaHVV8", t:"road", s:[
    ["The turn signal shows that the car will turn left or right.","方向燈顯示車子接下來要左轉還是右轉。"],
    ["The driver needs to make sure to use the turn signal.","駕駛一定要記得打方向燈。"]]},
  {id:"microwave",w:"microwave",pos:"n.", zh:"微波爐", v:"APBiBipeAt8", t:"home", s:[
    ["A microwave is used to heat food.","微波爐用來加熱食物。"],
    ["A microwave is used as a convenient appliance to prepare food.","微波爐是準備食物很方便的家電。"]]},
  {id:"carwax",   w:"car wax",  pos:"n.", zh:"汽車蠟", v:"mKYpfiRCC34", t:"road", s:[
    ["Kevin uses car wax to wax his car.","Kevin 用汽車蠟幫他的車打蠟。"],
    ["Car wax is used to protect the paint of a car.","汽車蠟用來保護車子的漆面。"]]},
  {id:"rangehood",w:"range hood",pos:"n.",zh:"抽油煙機", v:"bA-3BJa76bM", t:"home", s:[
    ["There are lights and fans on the range hood.","抽油煙機上有燈和風扇。"],
    ["The range hood sucks up the smoke while cooking.","煮飯時抽油煙機會把油煙吸走。"]]},
  {id:"chess",    w:"chess",    pos:"n.", zh:"象棋；西洋棋", v:"7apB90SiM18", t:"fun", s:[
    ["The students play chess in class.","同學們在課堂上下棋。"],
    ["They think about each move while playing chess.","下棋時，他們每一步都要先想一想。"]]},
  {id:"reinstall",w:"reinstall",pos:"v.", zh:"重新安裝", v:"i5NE3lXX4xM", t:"home", s:[
    ["Kevin needs to reinstall the software on his computer.","Kevin 需要在電腦上重新安裝軟體。"],
    ["He has to go through many settings to reinstall the software.","他要經過許多設定才能重新安裝軟體。"]]},
  {id:"rainyday", w:"rainy day",pos:"n.", zh:"下雨天", v:"VuUo9WRNlkw", t:"outdoor", s:[
    ["On rainy days, people use umbrellas to shield themselves from the rain.","下雨天，人們用雨傘擋雨。"],
    ["When you leave your house on a rainy day, don't forget to bring your umbrella!","下雨天出門時，別忘了帶雨傘！"]]},
  {id:"umbrella", w:"umbrella", pos:"n.", zh:"雨傘", v:"czMZ9389nFc", t:"outdoor", s:[
    ["The student carries an umbrella to stay dry in the rain.","學生撐著雨傘，在雨中保持乾爽。"],
    ["The teachers need an umbrella because it's raining.","老師們需要一把雨傘，因為正在下雨。"]]},
  {id:"peel",     w:"peel",     pos:"v.", zh:"剝（皮）", v:"qUYH28pWoak", t:"home", s:[
    ["Kevin peels a tangerine for a snack.","Kevin 剝橘子當點心。"],
    ["After peeling, he separates the slices of the tangerine.","剝完皮後，他把橘子一瓣一瓣分開。"]]},
  {id:"gate",     w:"gate",     pos:"n.", zh:"大門", v:"Njoo0RXQCdY", t:"home", s:[
    ["You need to push the button to open and close the gate.","你要按按鈕來開關大門。"],
    ["The gate protects the house.","大門保護這間房子。"]]},
  {id:"drill",    w:"drill",    pos:"n.", zh:"電鑽", v:"0eIvWBEoNhI", t:"home", s:[
    ["Kevin uses a drill to install a new light.","Kevin 用電鑽來安裝一盞新燈。"],
    ["He changes the drill bit on the drill.","他更換電鑽上的鑽頭。"]]},
  {id:"sheep",    w:"sheep",    pos:"n.", zh:"羊", v:"0A3Q2BUfTtM", t:"outdoor", s:[
    ["The sheep are very hungry.","這些羊很餓。"],
    ["The girls feed the sheep.","小女孩們在餵羊。"]]},
  {id:"anniversary",w:"school anniversary",pos:"n.",zh:"校慶", v:"N14nc1JklAA", t:"fun", s:[
    ["Parents and students attend the school anniversary.","家長和學生參加校慶。"],
    ["Everyone is celebrating the school anniversary.","每個人都在慶祝校慶。"]]},
  {id:"road",     w:"road",     pos:"n.", zh:"道路", v:"bXDzjEy_N1Q", t:"road", s:[
    ["The cones indicate that the road is under construction.","三角錐表示道路正在施工。"],
    ["When roads are damaged, they need to be fixed for safety.","道路損壞時，為了安全必須修好。"]]},
  {id:"screendoor",w:"screen door",pos:"n.",zh:"紗門", v:"c77jFd8oTU4", t:"home", s:[
    ["The screen door has a big hole.","這扇紗門破了一個大洞。"],
    ["He prepares to fix the screen door.","他準備修理紗門。"]]},
  {id:"cart",     w:"shopping cart",pos:"n.",zh:"購物車", v:"uq9cO4Fs1mI", t:"home", s:[
    ["They use a shopping cart at the store.","他們在商店裡使用購物車。"],
    ["They put their items in the shopping cart.","他們把東西放進購物車。"]]},
  {id:"wheel",    w:"steering wheel",pos:"n.",zh:"方向盤", v:"mHE5CF1eFig", t:"road", s:[
    ["The steering wheel is used to control the direction of the car.","方向盤用來控制車子的方向。"],
    ["He uses both hands to hold the steering wheel.","他用雙手握著方向盤。"]]},
  {id:"escalator",w:"escalator",pos:"n.", zh:"手扶梯", v:"x6DngX2IsnQ", t:"road", s:[
    ["The girls ride an escalator.","小女孩們在搭手扶梯。"],
    ["You have to be careful when riding an escalator.","搭手扶梯時一定要小心。"]]},
  {id:"prune",    w:"prune",    pos:"v.", zh:"修剪", v:"4I7LaTvraaU", t:"home", s:[
    ["He prunes his plants to help them grow.","他修剪植物，幫助它們長得更好。"],
    ["He uses pruning shears to prune his plants.","他用修枝剪來修剪植物。"]]},
  {id:"lantern",  w:"lantern",  pos:"n.", zh:"燈籠", v:"ZUNuGuOPIik", t:"fun", s:[
    ["The girls paint on their lanterns.","小女孩們在燈籠上畫畫。"],
    ["They paint their lanterns different colors.","她們把燈籠塗上不同的顏色。"]]},
  {id:"aquarium", w:"aquarium", pos:"n.", zh:"水族館", v:"-wHh7wnrHAg", t:"outdoor", s:[
    ["The girls see sharks at the aquarium.","小女孩們在水族館看鯊魚。"],
    ["Many people enjoy the aquarium.","很多人喜歡逛水族館。"]]},
  {id:"sand",     w:"sand",     pos:"v.", zh:"磨光；打磨", v:"gM6IpmJ2IzM", t:"home", s:[
    ["The desk gets sanded to get repainted.","這張書桌先打磨，再重新上漆。"],
    ["He uses a machine to sand the desks.","他用機器打磨書桌。"]]},
  {id:"trafficlight",w:"traffic light",pos:"n.",zh:"紅綠燈", v:"WAcCdpvNWIM", t:"road", s:[
    ["Cars stop when the traffic light is red.","紅燈時車子要停下來。"],
    ["The cars can go when the traffic light is green.","綠燈時車子就可以走。"]]},
  {id:"dry",      w:"dry",      pos:"v.", zh:"晾乾；風乾", v:"7SJCj-SX7ZY", t:"home", s:[
    ["He hangs the clothes outside to dry.","他把衣服掛在外面晾乾。"],
    ["They use clothespins to hang their clothes to dry.","他們用曬衣夾把衣服夾起來晾乾。"]]},
  {id:"highway",  w:"highway",  pos:"n.", zh:"高速公路", v:"LA-GuMwg-tI", t:"road", s:[
    ["You need to speed up to get on the highway.","上高速公路時要加速。"],
    ["The highway has many exits.","高速公路有很多出口。"]]},
  {id:"newcar",   w:"new car",  pos:"n.", zh:"新車", v:"ulGzfF63qbs", t:"road", s:[
    ["There is a new car in the shop.","店裡有一輛新車。"],
    ["The new car is very shiny.","新車閃閃發亮。"]]},
  {id:"oilchange",w:"oil change",pos:"n.",zh:"換機油", v:"SwlsSpawrUE", t:"road", s:[
    ["The mechanic is working on an oil change.","技師正在換機油。"],
    ["The car needs to be lifted for an oil change.","換機油時車子要升起來。"]]},
  {id:"drivethrough",w:"drive-through",pos:"n.",zh:"得來速", v:"dxfeNK3A0d4", t:"road", s:[
    ["The family goes to the drive-through restaurant.","這家人去得來速餐廳。"],
    ["The girls enjoy their fries from the drive-through restaurant.","小女孩們開心地吃得來速買的薯條。"]]},
  {id:"install",  w:"install",  pos:"v.", zh:"安裝", v:"MgDQr0pNu4I", t:"home", s:[
    ["He takes off the old router to install the new router.","他拆下舊的路由器，裝上新的。"],
    ["He needs to install a new router on the wall.","他需要在牆上安裝一台新路由器。"]]},
  {id:"charm",    w:"charm",    pos:"n.", zh:"小飾品", v:"-2_TeEJCJpc", t:"home", s:[
    ["Different charms are used to decorate clogs.","用不同的小飾品來裝飾洞洞鞋。"],
    ["The charms make the clogs unique.","小飾品讓這雙鞋變得很獨特。"]]},
  {id:"pump",     w:"pump",     pos:"n.", zh:"打氣筒", v:"KDtEwPmCEmQ", t:"road", s:[
    ["The girl is using a pump to fill the bicycle tires with air.","小女孩用打氣筒幫腳踏車輪胎打氣。"],
    ["She uses the pump by stepping on the pedal, causing the tire to fill with air.","她踩打氣筒的踏板，讓輪胎充滿氣。"]]},
  {id:"recycling",w:"recycling",pos:"n.", zh:"資源回收", v:"QXqXbZkRR_Q", t:"home", s:[
    ["Recycling is a way to reuse materials like paper and plastic.","資源回收是把紙類、塑膠等材料再利用的方法。"],
    ["Recycling can help take care of the planet.","資源回收能幫忙照顧地球。"]]}
];

// 情境對話：每個主題有初階 basic／進階 adv（有些只有一種）
// 每行 [說話者 A/B/N(旁白), 英文, 中文]；keys = 重點字（用來出填空題）
const TALKS = [
  {id:"lantern", zh:"元宵燈籠", en:"Lantern Festival", t:"fun", lv:{
    basic:{v:"e3DuG1re4hE", keys:["lights","dragon","station","careful","glow"], lines:[
      ["A","Wow, look at these lights! What is it?","哇，你看這些燈！這是什麼？"],
      ["B","It's a Lantern Festival decoration! See the dragon?","這是元宵節的燈飾！你看到那條龍了嗎？"],
      ["A","Yes, it's huge! What's that building behind it?","看到了，好大！後面那棟建築是什麼？"],
      ["B","That's the train station. The sign says Hsinchu Station.","那是火車站，招牌寫著「新竹車站」。"],
      ["A","Can we go closer to the lanterns?","我們可以靠近一點看燈籠嗎？"],
      ["B","Sure, let's walk there. But be careful.","當然，我們走過去吧。不過要小心。"],
      ["A","Do the lights change color?","這些燈會變顏色嗎？"],
      ["B","Yes, they glow different colors at night. Do you like it?","會，晚上會發出不同顏色的光。你喜歡嗎？"],
      ["A","I love it! It's one of my favorite things about New Year!","我超喜歡！這是我最喜歡的過年活動之一！"]]},
    adv:{v:"-wAEOB4LDd4", keys:["occasion","symbolize","heritage","hospitality","riddles"], lines:[
      ["A","Wow, this display is amazing! What's the occasion?","哇，這個展覽好壯觀！是什麼節日？"],
      ["B","It's for the Lantern Festival, which celebrates the end of Chinese New Year.","是元宵節，慶祝農曆新年的結束。"],
      ["A","The details on the dragon are incredible. Does it have a meaning?","這條龍的細節太厲害了。它有什麼含意嗎？"],
      ["B","Yes, dragons symbolize strength and good fortune in our traditions.","有，在我們的傳統裡，龍象徵力量和好運。"],
      ["A","And what about that structure? It looks like a teapot.","那個裝置呢？看起來像一個茶壺。"],
      ["B","That's because tea is a significant part of our heritage. It's all about sharing and hospitality.","因為茶是我們文化傳承中很重要的一部分，代表分享與好客。"],
      ["A","I'd love to experience more of this cultural event.","我很想多體驗這個文化活動。"],
      ["B","You should! There are also riddles and games to enjoy.","你應該去！還有猜燈謎和遊戲可以玩。"]]}}},
  {id:"temple", zh:"廟宇", en:"Temple", t:"fun", lv:{
    basic:{v:"69W5uqBeQUw", keys:["temple","pray","colorful","welcome"], lines:[
      ["A","What is this place?","這是什麼地方？"],
      ["B","It's a temple. People come here to pray.","這是一間廟，人們來這裡拜拜。"],
      ["A","Why is it so colorful?","為什麼它這麼多顏色？"],
      ["B","Colors are special in our culture.","顏色在我們的文化裡很特別。"],
      ["A","Can kids come here?","小孩可以來這裡嗎？"],
      ["B","Yes, everyone is welcome.","可以，歡迎每一個人。"]]},
    adv:{v:"SHcWOjb_-Qg", keys:["ornaments","incense","worship","festivals","bow"], lines:[
      ["A","What are those ornaments?","那些裝飾是什麼？"],
      ["B","They are gods and symbols of luck.","那些是神明和代表好運的象徵。"],
      ["A","The incense smells strong.","香的味道好濃。"],
      ["B","Yes, it's for worship and respect.","對，那是用來祭拜、表示尊敬的。"],
      ["A","Do you pray often?","你常常拜拜嗎？"],
      ["B","Not always, but on festivals and family days.","不一定，但節日和家族的日子會拜。"],
      ["A","What do you ask for?","你都求些什麼？"],
      ["B","Health, peace, and happiness.","健康、平安和快樂。"],
      ["A","Can I try to pray?","我可以試著拜拜嗎？"],
      ["B","Of course. Just bow and make a wish.","當然可以。只要鞠躬，然後許個願。"]]}}},
  {id:"josspaper", zh:"燒金紙", en:"Joss Paper", t:"fun", lv:{
    basic:{v:"6y6LChRoj6k", keys:["burning","luck","blessings","respect"], lines:[
      ["A","What are they doing with the paper?","他們在用那些紙做什麼？"],
      ["B","They're burning joss paper. It's for good luck and to remember family who aren't here.","他們在燒金紙，用來求好運，也紀念不在身邊的家人。"],
      ["A","Why do they burn it?","為什麼要燒掉呢？"],
      ["B","They believe it sends blessings to their loved ones.","他們相信這能把祝福送給所愛的人。"],
      ["A","Can anyone do this?","任何人都可以這樣做嗎？"],
      ["B","Yes. People do this to show love and respect.","可以，人們這樣做是為了表達愛與尊敬。"],
      ["A","Oh, I didn't know that. It's actually quite interesting.","喔，我都不知道。其實還蠻有趣的。"]]},
    adv:{v:"9tTLsfCpCno", keys:["ritual","ancestors","spiritual","tradition","heritage"], lines:[
      ["A","What's the purpose of this ritual?","這個儀式的目的是什麼？"],
      ["B","It's a way to honor ancestors by offering joss paper, which is symbolic.","這是透過供奉金紙來敬祖先的方式，金紙有象徵意義。"],
      ["A","Does this have a spiritual meaning?","這有心靈上的意義嗎？"],
      ["B","Yes. It's a form of remembrance and brings fortune to the ancestors.","有，這是一種紀念，也為祖先帶來福氣。"],
      ["A","Is this a part of a festival?","這是某個節日的一部分嗎？"],
      ["B","It's not just for festivals. It's a common practice in our tradition.","不只在節日，這是我們傳統中很常見的習俗。"],
      ["A","How do you feel when you do this?","你做這件事的時候有什麼感覺？"],
      ["B","It makes me feel connected to my heritage and keeps the memory of my ancestors alive.","讓我覺得和自己的文化根源連在一起，也讓我記得祖先。"]]}}},
  {id:"slide", zh:"溜滑梯", en:"Playground Slide", t:"outdoor", lv:{
    basic:{v:"X6oHQ8rL5UQ", keys:["sliding","fun","big","park"], lines:[
      ["A","Look at these kids. They are sliding down a slide.","你看這些小朋友，他們在溜滑梯。"],
      ["B","Is it fun?","好玩嗎？"],
      ["A","Yes, slides are fun for kids.","好玩，溜滑梯對小孩來說很好玩。"],
      ["B","It's big!","它好大！"],
      ["A","It's a big slide at a park.","這是公園裡的一座大溜滑梯。"]]},
    adv:{v:"FHWb1rbKOJg", keys:["playground","bright","safe","popular","shape"], lines:[
      ["A","This playground is nice.","這個遊樂場很棒。"],
      ["B","Yes, the colors are bright.","對，顏色很鮮豔。"],
      ["A","Kids like the tall slide.","小朋友喜歡那座高的溜滑梯。"],
      ["B","True. It's safe and exciting.","沒錯，又安全又刺激。"],
      ["A","Many kids slide here.","很多小朋友在這裡溜。"],
      ["B","Yes, they love it. It's popular.","對，他們很愛，很受歡迎。"],
      ["A","The shape is interesting too. It fits the park well.","形狀也很有趣，跟公園很搭。"]]}}},
  {id:"moon", zh:"月亮", en:"The Moon", t:"outdoor", lv:{
    basic:{v:"H49Tja3shv0", keys:["round","boat","shape","bright"], lines:[
      ["N","Have you ever looked up at the night sky and seen the moon?","你有沒有抬頭看過夜空中的月亮？"],
      ["N","Let's take a closer look at this beautiful moon in the sky.","我們來仔細看看天上這個美麗的月亮。"],
      ["N","The moon is not always round like a ball.","月亮不一定都像球一樣圓。"],
      ["N","Sometimes it looks like a little boat, and we call it a boat moon.","有時候它看起來像一艘小船，我們叫它「小船月亮」。"],
      ["N","The moon can change shape too. Sometimes it's big and round, and sometimes it's just a piece.","月亮也會變形狀，有時又大又圓，有時只有一小片。"],
      ["N","The moon is like a little light in the sky at night. It makes the dark sky bright.","月亮像夜空中的小燈，讓黑黑的天空變亮。"],
      ["N","We can even say good night to the moon before we go to bed.","睡覺前我們還可以跟月亮說晚安。"],
      ["N","The moon is pretty. We can see it in the sky every night.","月亮很漂亮，每天晚上都能在天上看到它。"]]},
    adv:{v:"HC3YjxERuZ4", keys:["crescent","phases","orbits","waxing","universe"], lines:[
      ["A","Look at the sky. What do you see?","看看天空，你看到什麼？"],
      ["B","I see a crescent moon. It's shaped like a smile.","我看到一彎新月，形狀像微笑。"],
      ["A","Why isn't it a full circle?","為什麼它不是一個完整的圓？"],
      ["B","The moon changes shapes. It goes through phases.","月亮會改變形狀，它有不同的月相。"],
      ["A","What are phases?","什麼是月相？"],
      ["B","Phases are the shapes we see as the moon orbits Earth.","月相就是月亮繞著地球轉時，我們看到的形狀。"],
      ["A","Will it become full?","它會變成滿月嗎？"],
      ["B","Yes, in a few weeks. It gets bigger every night.","會，再過幾週。它每晚都會變大一點。"],
      ["A","Does the moon have a name?","月亮的形狀有名字嗎？"],
      ["B","Yes, each phase has a name. This is a waxing crescent.","有，每個月相都有名字。這是「眉月」（漸盈新月）。"],
      ["A","What are the other phases called?","其他月相叫什麼？"],
      ["B","There are eight phases: new moon, waxing crescent, first quarter, waxing gibbous, full moon, waning gibbous, last quarter, and waning crescent.","共有八個：新月、眉月、上弦月、盈凸月、滿月、虧凸月、下弦月、殘月。"],
      ["A","What's the importance of understanding moon phases?","了解月相有什麼重要性？"],
      ["B","It helps us understand our place in the universe. It also helps us keep track of time and seasons.","它幫助我們了解自己在宇宙中的位置，也幫我們掌握時間和季節。"],
      ["A","Thanks for explaining that to me!","謝謝你跟我解釋！"],
      ["B","You're welcome. It's always fun to learn something new.","不客氣，學新東西總是很有趣。"]]}}},
  {id:"mechanic", zh:"汽車修護", en:"Car Repair", t:"road", lv:{
    basic:{v:"b1H8acGED08", keys:["lift","mechanic","underneath","repairs","safe"], lines:[
      ["A","What is happening to that car?","那台車怎麼了？"],
      ["B","It's on a lift. The mechanic is fixing it.","它在升降機上，技師正在修理它。"],
      ["A","Why is the car up so high?","為什麼車子升得這麼高？"],
      ["B","It's easier to fix the car from underneath.","從車子底下修比較容易。"],
      ["A","What does a mechanic do?","技師是做什麼的？"],
      ["B","A mechanic repairs cars. They make them work well again.","技師修理汽車，讓車子恢復正常運作。"],
      ["A","Can I see under the car too?","我也可以看看車子底下嗎？"],
      ["B","Only if the mechanic says it's safe.","要技師說安全才可以。"]]},
    adv:{v:"KhNGwIjvXY8", keys:["engine","diagnose","replace","hazards"], lines:[
      ["A","What's going on with that car over there?","那邊那台車怎麼了？"],
      ["B","It's on a lift. The mechanic is fixing it.","它在升降機上，技師正在修理它。"],
      ["A","Why is the car up so high?","為什麼車子升得這麼高？"],
      ["B","It's easier to fix from underneath. Mechanics need to reach the engine, transmission, and other parts that are difficult to reach from above.","從底下修比較容易。技師要碰到引擎、變速箱和其他從上面很難碰到的零件。"],
      ["A","What does a mechanic do exactly?","技師到底是做什麼的？"],
      ["B","A mechanic repairs cars. They diagnose problems, replace broken parts, and make sure everything is working well again.","技師修理汽車：診斷問題、更換壞掉的零件，確保一切恢復正常。"],
      ["A","Can I see under the car too?","我也可以看看車子底下嗎？"],
      ["B","Only if the mechanic says it's safe. There are many moving parts and hazards under a car.","要技師說安全才行。車子底下有很多會動的零件和危險。"]]}}},
  {id:"friedfood", zh:"油炸食物", en:"Fried Food", t:"outdoor", lv:{
    adv:{v:"AwwizGXTI0w", keys:["fried","calories","vegetables","vitamins","variety"], lines:[
      ["A","Look at this picture. Don't those fried treats look yummy?","你看這張照片，那些炸物看起來是不是很好吃？"],
      ["B","They sure do. But remember, eating too many fried foods isn't good for our bodies.","真的耶。不過記得，吃太多油炸食物對身體不好。"],
      ["A","Really? Why is that?","真的嗎？為什麼？"],
      ["B","Fried foods are high in fat, calories, and sodium, which can increase the risk of heart disease and obesity.","炸物的脂肪、熱量和鈉都很高，會增加心臟病和肥胖的風險。"],
      ["A","Oh, I didn't know that. What can we do to be healthy?","喔，我都不知道。我們要怎麼做才健康？"],
      ["B","We can eat lots of fruits and vegetables. They're packed with vitamins and minerals.","我們可以多吃蔬菜水果，它們富含維生素和礦物質。"],
      ["A","I love apples, carrots, and broccoli. They're all delicious and good for you.","我喜歡蘋果、紅蘿蔔和花椰菜，都好吃又健康。"],
      ["B","I like strawberries, grapes, and bananas. They're so sweet and yummy.","我喜歡草莓、葡萄和香蕉，又甜又好吃。"],
      ["A","Those are great choices!","這些都是很棒的選擇！"],
      ["B","Remember, it's important to eat a variety of fruits and vegetables every day.","記得，每天吃多種不同的蔬果很重要。"]]}}},
  {id:"walking", zh:"健走", en:"Walking", t:"outdoor", lv:{
    adv:{v:"SUfy-xbn_hI", keys:["exercise","muscles","stress","routine","community"], lines:[
      ["N","Hey guys, have you seen these amazing pictures of people enjoying a morning walk in Tianwei?","嘿，大家有看到這些大家在田尾晨間健走的精彩照片嗎？"],
      ["N","Walking is not only a fun activity, but also great for our physical and mental health.","健走不只好玩，對身心健康也很好。"],
      ["N","It's a low-impact exercise that strengthens our muscles, bones, and joints.","它是低衝擊的運動，能強化肌肉、骨骼和關節。"],
      ["N","It helps reduce the risk of diseases like heart disease and diabetes.","它能降低心臟病、糖尿病等疾病的風險。"],
      ["N","Walking is also a great way to improve our mood and reduce stress.","健走也很能改善心情、減輕壓力。"],
      ["N","It's a great way to connect with nature and spend time with friends and family.","也是親近大自然、和親友相處的好方法。"],
      ["N","So why not make walking a regular part of our daily routine?","那何不讓健走成為每天的固定習慣呢？"],
      ["N","We can start with short walks and slowly make them longer.","我們可以先從短距離開始，再慢慢走久一點。"],
      ["N","We can also join community walking events, like the one in Tianwei, to make it more fun.","也可以參加社區健走活動，像田尾這場，讓它更有趣。"]]}}},
  {id:"earthquake", zh:"地震三步驟", en:"Earthquake Safety", t:"outdoor", lv:{
    adv:{v:"wH9Am3UE19Q", keys:["drop","cover","hold on","furniture","windows","emergency"], lines:[
      ["A","Did you know that \"Drop, Cover, and Hold On\" is the best way to protect yourself during an earthquake?","你知道「趴下、掩護、穩住」是地震時保護自己最好的方法嗎？"],
      ["B","Yes! When the ground starts shaking, drop to the ground, take cover under a strong table, and hold on until the shaking stops.","知道！地面開始搖時，趴到地上，躲到堅固的桌子下，抓穩直到停止搖晃。"],
      ["A","What if I'm not near any furniture?","如果我附近沒有家具呢？"],
      ["B","Cover your head and neck with your arms and crouch in an inside corner. Stay away from windows and anything that could fall on you.","用手臂護住頭和脖子，蹲在室內角落，遠離窗戶和任何可能掉下來的東西。"],
      ["A","What about if I'm outside?","如果我在戶外呢？"],
      ["B","Move away from buildings, street lights, and wires. Drop to the ground and cover your head and neck.","遠離建築物、路燈和電線，趴下並護住頭頸。"],
      ["A","And what if I'm driving?","那如果我在開車呢？"],
      ["B","Pull over to a clear place and stop. Avoid bridges and power lines. Stay inside with your seat belt on.","找空曠處靠邊停車，避開橋梁和電線，繫好安全帶留在車內。"],
      ["A","Thanks for the tips. I feel more prepared now.","謝謝你的提醒，我覺得更有準備了。"],
      ["B","Remember to practice earthquake drills with your family and have an emergency kit ready.","記得和家人練習地震演練，並準備好緊急避難包。"],
      ["A","I will. It's better to be safe than sorry.","我會的。小心駛得萬年船。"]]}}}
];

// 非影片的互動頁（例如「按摩英文」），格式：{title, href, thumb?, desc?}
const EXTRAS = [
  {title:"按摩英文 Massage English", href:"massage-english/", thumb:"massage-english/img/flashcard.jpg", desc:"旅遊按摩實用句・發音＋對話＋挑戰"},
  {title:"選舉字彙 Election Words", href:"election/", thumb:"election/img/hero.jpg", desc:"國小到高中 52 字・字卡＋發音＋小測驗"}
];
