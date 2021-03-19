// Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOThjMTg5ZC1kZGFkLTRiMjctODg4OS04ZDJmZmQ1ODllMzEiLCJpZCI6NDAzNDYsInNjb3BlcyI6WyJ2cmZ5Il0sImlhdCI6MTYwODY2NDk1MH0.8JBTTegUmB3Z-xT10qvYJ4w-lmPaR1mk3fTHOqTLt2Y';
// var url = "http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}";



var viewer = new Cesium.Viewer('cesiumContainer', {
    orderIndependentTranslucency: true,
    contextOptions: {
        webgl: {
            alpha: true,
        }
    },
    animation: false,        //是否建立動畫小器件，左下角儀表 儀錶   
    timeline: false,         //是否顯示時間線控制元件   
    fullscreenButton: false, //右下角全螢幕按鈕  
    geocoder: true,         //是否顯示地名查詢控制元件    
    baseLayerPicker: true,  //是否顯示圖層選擇控制元件   
    imageryProvider:
        new Cesium.BingMapsImageryProvider({
            url: 'https://dev.virtualearth.net',
            key: 'ArrcS8z6yEHSvCPEe_wZH2g8WrXpXXFfT8wEgJOJsdDaKwsfOmMoVgSi9gRNoEuX',
            mapStyle: Cesium.BingMapsStyle.AERIAL
        }),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    infoBox: false,
    selectionIndicator: false


});
viewer._cesiumWidget._creditContainer.style.display = "none";

viewer.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(120.454543, 23.5, 10000000) });//默认场景初始位置
viewer.scene.skyAtmosphere.show = false;
viewer.scene.skyBox.show = false;
viewer.scene.sun.show = false;
viewer.scene.moon.show = false;
viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);



let taiwan = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(120.454543, 23.5),
    id: 'taiwan',
    name: '民雄鬼屋',

    billboard: {
        image: 'img/iconfinder_Facebook_UI-1.png',
        show: true, // default
        width: 50, // default: undefined
        height: 50 // default: undefined

    },

    label: {
        text: '民雄鬼屋',
        font: ' 32px normal',
        scale: 0.5,
        color: Cesium.Color.RED,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        //垂直位置
        verticalOrigin: Cesium.VerticalOrigin.BUTTON,
        //中心位置
        pixelOffset: new Cesium.Cartesian2(0, 25)
    }


});

let japan = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(138.584543, 35.556453),
    id: 'japan',
    name: '青木原樹海',
    billboard: {
        image: 'img/iconfinder_Facebook_UI-1.png',
        show: true, // default
        width: 50, // default: undefined
        height: 50 // default: undefined

    },

    label: {
        text: '青木原樹海',
        font: ' 32px normal',
        scale: 0.5,
        color: Cesium.Color.RED,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        //垂直位置
        verticalOrigin: Cesium.VerticalOrigin.BUTTON,
        //中心位置
        pixelOffset: new Cesium.Cartesian2(0, 25)
    }

});

let korean = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(127.584543, 37.556453),
    id: 'korean',
    name: '昆池岩精神病院',


    billboard: {
        image: 'img/iconfinder_Facebook_UI-1.png',
        show: true, // default
        width: 50, // default: undefined
        height: 50 // default: undefined

    },

    label: {
        text: '昆池岩精神病院',
        font: ' 32px normal',
        scale: 0.5,
        color: Cesium.Color.RED,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        //垂直位置
        verticalOrigin: Cesium.VerticalOrigin.BUTTON,
        //中心位置
        pixelOffset: new Cesium.Cartesian2(0, -25)
    }


});
viewer.scene.postProcessStages.fxaa.enabled = false;
let pili = viewer.entities.add({

    position: Cesium.Cartesian3.fromDegrees(120.984543, 14.596453),
    id: 'pili',
    name: '馬尼拉電影中心',


    billboard: {
        image: 'img/iconfinder_Facebook_UI-1.png',
        show: true, // default
        width: 50, // default: undefined
        height: 50 // default: undefined

    },

    label: {
        text: '馬尼拉電影中心',
        font: ' 32px normal',
        scale: 0.5,
        color: Cesium.Color.RED,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        //垂直位置
        verticalOrigin: Cesium.VerticalOrigin.BUTTON,
        //中心位置
        pixelOffset: new Cesium.Cartesian2(0, 25)
    }


});

let japantunnel = viewer.entities.add({
    id: 'shop',
    name: '賽西爾酒店',
    position: Cesium.Cartesian3.fromDegrees(601.784543, 34.256453),


    billboard: {
        image: 'img/iconfinder_Facebook_UI-1.png',
        show: true, // default
        width: 50, // default: undefined
        height: 50 // default: undefined

    },

    label: {
        text: '賽西爾酒店',
        font: ' 32px normal',
        scale: 0.5,
        color: Cesium.Color.RED,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        //垂直位置
        verticalOrigin: Cesium.VerticalOrigin.BUTTON,
        //中心位置
        pixelOffset: new Cesium.Cartesian2(0, 25)
    }

});

if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {//判断是否支持图像渲染像素化处理
    viewer.resolutionScale = window.devicePixelRatio;
}
viewer.scene.fxaa = true;
viewer.scene.postProcessStages.fxaa.enabled = true;




// ----------------賽西爾酒店---------------------

var handlerVideo = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handlerVideo.setInputAction(function (click) {
    var pick = viewer.scene.pick(click.position);
    if (pick && pick.id._name == "賽西爾酒店") {
        // console.log(pick);
        var jumpToIntro = document.getElementById("jumpToIntro");
        jumpToIntro.scrollIntoView({ behavior: "smooth" });
        // window.location.href = "#jumpToIntro";
        shop();

    } else {
        return;
    };



}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function shop() {
    // console.log('BCA');

    let intro = document.getElementsByClassName('intro')[0];
    intro.innerHTML = `<div class="intro-terrilevel">
                <p>恐怖指數:</p>
                <img src="img/iconfinder_keditbookmarks_-1.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-2.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-3.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-4.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-5.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-5.png" alt="">
            </div>

            <div class="intro-pic">
                <p class="p_shop">傳說</p>
                <img src="img/intro-shop.png" alt="">
            </div>

            <div class="intro-text">
                <p>地點:賽西爾酒店</p>
                <p>等待成團:7團</p>
                <p>介紹:2013年二月在此間酒店發生震驚世人的藍可兒命案。且著名連環殺手理察·拉米雷茲以及傑克·恩特維格亦曾在該家酒店投宿，使該酒店聲名大噪。</p>
                <div class="intro-text_btn">
                    <a href="introduction.html">找團</a>
                    <a id="jumpbtn">旅拍</a>
                </div>
            </div>`

    let realcamera = document.getElementsByClassName('real_camera')[0];
    realcamera.innerHTML = `<h1>真實旅拍</h1>
            <p>光從地理位置與價格來看，塞西爾酒店掌握方便、便宜等優勢，但待過洛城的人都知道，該區治安敗壞，許多遊民與嗑藥者佔據街頭角落，除非結伴或熟悉當地民情，通常都不建議選擇該處做為旅遊落腳處。</p>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/yw6FiQvWFAo" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

    let jumpbtn = document.getElementById('jumpbtn');

    jumpbtn.addEventListener('click', function (e) {
        console.log(e);
        let jumpToCamera = document.getElementById('jumpToCamera');
        jumpToCamera.scrollIntoView({ behavior: "smooth" });
    });

};

// ----------------青木原樹海---------------------

var handlerVideo2 = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handlerVideo2.setInputAction(function (click) {
    var pick = viewer.scene.pick(click.position);


    if (pick && pick.id._name == "青木原樹海") {
        // console.log('ABC');
        var jumpToIntro = document.getElementById("jumpToIntro");
        jumpToIntro.scrollIntoView({ behavior: "smooth" });
        // window.location.href = "#jumpToIntro";

        jforest();
    } else {
        return;
    };
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function jforest() {
    // console.log('BCA');

    let intro = document.getElementsByClassName('intro')[0];
    intro.innerHTML = `<div class="intro-terrilevel">
                <p>恐怖指數:</p>
                <img src="img/iconfinder_keditbookmarks_-1.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-2.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-3.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-4.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-5.png" alt="">
            </div>

            <div class="intro-pic">
                <p>史詩</p>
                <img src="img/japanforest.png" alt="">
            </div>

            <div class="intro-text">
                <p>地點:日本青木原樹海自殺森林</p>
                <p>等待成團:12團</p>
                <p>介紹:青木原樹海為日本著名的自殺勝地。到此探險的旅團有極高機率遇到自殺者上吊的屍體。著名YouTuber羅根保羅（Logan Paul）因拍攝懸掛在樹上的遺體，曾受到公眾猛烈抨擊。</p>
                <div class="intro-text_btn">
                    <a href="introduction.html">找團</a>
                    <a id="jumpbtn">旅拍</a>
                </div>
            </div>`

    let realcamera = document.getElementsByClassName('real_camera')[0];
    realcamera.innerHTML = `
            <h1>真實旅拍</h1>
            <p>正式進入樹海之後，當你行走一段時間，你會發現林中很多地方都設置了各式各樣的勸告牌或是防止自殺會的郵箱，勸籲那些想自殺的人回頭是岸。對呀，人的生存有很多意義，不應為了一時的挫折和打擊，就自尋短見啊！</p>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/HKk2wIqmZn0" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

    let jumpbtn = document.getElementById('jumpbtn');

    jumpbtn.addEventListener('click', function (e) {
        console.log(e);
        let jumpToCamera = document.getElementById('jumpToCamera');
        jumpToCamera.scrollIntoView({ behavior: "smooth" });
    });
};
// ----------------民雄鬼屋---------------------
var handlerVideo3 = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handlerVideo3.setInputAction(function (click) {
    var pick = viewer.scene.pick(click.position);


    if (pick && pick.id._name == "民雄鬼屋") {
        // console.log('ABC');
        var jumpToIntro = document.getElementById("jumpToIntro");
        jumpToIntro.scrollIntoView({ behavior: "smooth" });
        // window.location.href = "#jumpToIntro";

        ghosthouse();
    } else {
        return;
    };
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function ghosthouse() {
    // console.log('BCA');

    let intro = document.getElementsByClassName('intro')[0];
    intro.innerHTML = `<div class="intro-terrilevel">
                <p>恐怖指數:</p>
                <img src="img/iconfinder_keditbookmarks_-1.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-2.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-3.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-4.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-4.png" alt="">
                
            </div>

            <div class="intro-pic">
                <p>史詩</p>
                <img src="img/ghosthouse.png" alt="">
            </div>

            <div class="intro-text">
                <p>地點:台灣民雄鬼屋</p>
                <p>等待成團:39團</p>
                <p>介紹:又稱劉氏古厝，為全台四大鬼屋之一。據傳，曾有位奴婢懷有身孕，投井自殺，因此戰後有一支部隊，借宿時驚見一位白衣女鬼漂浮於半空中，造成士兵開槍互殺，死傷慘重。</p>
                <div class="intro-text_btn">
                    <a href="introduction.html">找團</a>
                    <a id="jumpbtn">旅拍</a>
                </div>
            </div>`

    let realcamera = document.getElementsByClassName('real_camera')[0];
    realcamera.innerHTML = `<h1>真實旅拍</h1>
            <p>在一個月黑風高的半夜，萬籟俱寂，王狗與一位好友持著手電筒探入一座三層樓高的廢棄洋房，然後闗掉手電筒，聽著自己與好友的呼吸與心跳聲，等待著什麼到來......。</p>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/4aHMPXBbPTE" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

    let jumpbtn = document.getElementById('jumpbtn');

    jumpbtn.addEventListener('click', function (e) {
        console.log(e);
        let jumpToCamera = document.getElementById('jumpToCamera');
        jumpToCamera.scrollIntoView({ behavior: "smooth" });
    });
};

// ----------------馬尼拉電影中心------------------

var handlerVideo4 = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handlerVideo4.setInputAction(function (click) {
    var pick = viewer.scene.pick(click.position);


    if (pick && pick.id._name == "馬尼拉電影中心") {
        // console.log('ABC');
        var jumpToIntro = document.getElementById("jumpToIntro");
        jumpToIntro.scrollIntoView({ behavior: "smooth" });
        // window.location.href = "#jumpToIntro";

        movie();
    } else {
        return;
    };
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function movie() {
    // console.log('BCA');

    let intro = document.getElementsByClassName('intro')[0];
    intro.innerHTML = `<div class="intro-terrilevel">
                <p>恐怖指數:</p>
                <img src="img/iconfinder_keditbookmarks_-1.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-2.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-3.png" alt="">
                
            </div>

            <div class="intro-pic">
                <p class="p_mov">駭人</p>
                <img src="img/movie.png" alt="">
            </div>

            <div class="intro-text">
                <p>地點:馬尼拉電影中心</p>
                <p>等待成團:3團</p>
                <p>介紹:1981年為了電影節，趕工的工人們因為鷹架翻覆，跌落到還未完全凝固的水泥之中，獨裁者妻子伊美黛為了趕上電影節的開幕，命令現場監工活埋工人，手段兇殘令人髮指。</p>
                <div class="intro-text_btn">
                    <a href="introduction.html">找團</a>
                    <a id="jumpbtn">旅拍</a>
                </div>
            </div>`

    let realcamera = document.getElementsByClassName('real_camera')[0];
    realcamera.innerHTML = `<h1>真實旅拍</h1>
            <p>某次跟菲律賓同事經過馬尼拉電影中心的時候，他說：
「你有進去過嗎？」
「還沒有耶，是個好玩的地方嗎？」
沒想到他臉色一白，娓娓道來了這棟建築的恐怖故事。我忍不住回頭看向那棟建築，透出一縷淡淡的詭譎氣氛。</p>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/Fg0rdZ7aD8w" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

    let jumpbtn = document.getElementById('jumpbtn');

    jumpbtn.addEventListener('click', function (e) {
        console.log(e);
        let jumpToCamera = document.getElementById('jumpToCamera');
        jumpToCamera.scrollIntoView({ behavior: "smooth" });
    });
};
// ----------------昆池岩---------------------
var handlerVideo5 = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handlerVideo5.setInputAction(function (click) {
    var pick = viewer.scene.pick(click.position);


    if (pick && pick.id._name == "昆池岩精神病院") {
        // console.log('ABC');
        var jumpToIntro = document.getElementById("jumpToIntro");
        jumpToIntro.scrollIntoView({ behavior: "smooth" });
        // window.location.href = "#jumpToIntro";

        hospital();
    } else {
        return;
    };
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function hospital() {
    // console.log('BCA');

    let intro = document.getElementsByClassName('intro')[0];
    intro.innerHTML = `<div class="intro-terrilevel">
                <p>恐怖指數:</p>
                <img src="img/iconfinder_keditbookmarks_-1.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-2.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-3.png" alt="">
                <img src="img/iconfinder_keditbookmarks_-4.png" alt="">
                
            </div>

            <div class="intro-pic">
                <p class="p_hos">悚然</p>
                <img src="img/hospital.png" alt="">
            </div>

            <div class="intro-text">
                <p>地點:昆池岩精神病院</p>
                <p>等待成團:0團</p>
                <p>介紹:昆池岩精神病院被翻拍成南韓恐怖電影《鬼病院》，轟動南韓，造成萬人空巷的場景，不過目前真正的昆池岩精神病院已被拆除完畢，故已無法成團。</p>
                <div class="intro-text_btn">
                    <a href="introduction.html">找團</a>
                    <a id="jumpbtn">旅拍</a>
                </div>
            </div>`

    let realcamera = document.getElementsByClassName('real_camera')[0];
    realcamera.innerHTML = `<h1>真實旅拍</h1>
            <p>昆池岩精神病院腹地廣大，達3336坪，雖處於深山之中，但從大馬路口到精神病院門口，一定要經過這一條蜿蜒小路，環境幽靜。</p>
            <iframe width="450" height="350" src="https://www.youtube.com/embed/Ci1VSoj4ZpE" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

    let jumpbtn = document.getElementById('jumpbtn');

    jumpbtn.addEventListener('click', function (e) {
        console.log(e);
        let jumpToCamera = document.getElementById('jumpToCamera');
        jumpToCamera.scrollIntoView({ behavior: "smooth" });
    });

};





const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

var previousPickedEntity = undefined;
handler.setInputAction(function (movement) {
    var pickedPrimitive = viewer.scene.pick(movement.endPosition);
    var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
    // Unhighlight the previously picked entity
    if (Cesium.defined(previousPickedEntity)) {
        previousPickedEntity.billboard.scale = 1.0;
        previousPickedEntity.billboard.color = Cesium.Color.WHITE;
        previousPickedEntity.label.scale = 0.5;
    }
    // Highlight the currently picked entity
    if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
        pickedEntity.billboard.scale = 2.0;
        pickedEntity.billboard.color = Cesium.Color.ORANGERED;
        previousPickedEntity = pickedEntity;
        previousPickedEntity.label.scale = 0.8;
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


// let jumpbtn = document.getElementById('jumpbtn');

// jumpbtn.addEventListener('click', function () {
//     let jumpToCamera = document.getElementById('jumpToCamera');
//     jumpToCamera.scrollIntoView({ behavior: "smooth" });
// });

// let jumpbtn = $('#jumpbtn');

$('#jumpbtn').click(function () {
    // console.log(123);
    $('#jumpToCamera')[0].scrollIntoView({
        behavior: "smooth"
    });
});
