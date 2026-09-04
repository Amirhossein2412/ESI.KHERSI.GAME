// ===============================
// PUT YOUR IMAGE LINKS HERE
// فقط لینک تصاویر خودت را اینجا قرار بده
// ===============================
const ASSETS = {
    // تصویر بک‌گراند ۱۶:۹ جنگل کارتونی (دو طرف آن قرینه و قابل اتصال)
    background: "https://s6.uupload.ir/files/89b49617-1fe6-4b2b-813a-4adc01364f06_4qqs.jpg",

    // موشن گرافیک‌های ویدیویی ۱۶:۹
    videos: {
        creatorIntro: "https://uupload.ir/view/brown_bear_eating_honey_202608312215_h6j4.mp4/", // موشن ۱۰ ثانیه‌ای سازنده
        storyMotion: "https://uupload.ir/view/461d9501-976e-4e70-8bfb-f2df01d5e309_4ct6.mp4/",  // موشن داستانی قبل از شروع گیم‌پلی
        honeyCatch: "https://uupload.ir/view/461d9501-976e-4e70-8bfb-f2df01d5e309_1_5iqq.mp4/",   // موشن هنگام گرفتن عسل
        gameOver: "https://uupload.ir/view/461d9501-976e-4e70-8bfb-f2df01d5e309_2_1m1n.mp4/"      // موشن گیم اور بعد از مرگ خرس
    },

    // شخصیت Bear (تصاویر PNG 1024x1024)
    bear: {
        idle: "https://s6.uupload.ir/files/995fc50c-f305-4d9d-b0f5-fe7a61ac0181_58d.png",
        runOpen: "https://s6.uupload.ir/files/deae8050-3d89-416d-91ce-0ab825b5c2b1_qftk.png",
        runClosed: "https://s6.uupload.ir/files/fcfa74cb-2d56-46ce-bf20-79cf6105069c_xcpb.png",
        jump: "https://s6.uupload.ir/files/ce181504-b968-485e-b3a0-cc278efd25f0_s3gs.png",
        attack: "https://s6.uupload.ir/files/fad410cb-7b51-40a2-898c-c1b75cf4b4f3_c5t.png",
        death: "https://s6.uupload.ir/files/c432c6e0-c906-40c6-bd70-84e4df86f1da_zelp.png",
        catchHoney: "https://s6.uupload.ir/files/817516f5-984b-4903-9c00-38b119da860f_ui3f.png"
    },

    // شخصیت Honey (تصاویر PNG 1024x1024)
    honey: {
        idle: "https://s6.uupload.ir/files/gemini_generated_image_3hitrt3hitrt3hit_sfch.png",
        runOpen: "https://s6.uupload.ir/files/gemini_generated_image_yon6z8yon6z8yon6_xsm7.png",
        runClosed: "https://s6.uupload.ir/files/gemini_generated_image_ib7onyib7onyib7o_yg62.png",
        jump: "https://s6.uupload.ir/files/55e14a28-857e-41d3-ba5e-3257cf2f09ae_yqj.png"
    },

    // دشمن Bee (تصاویر PNG 1024x1024)
    bee: {
        wingOpenLeft: "https://s6.uupload.ir/files/8d594266-f0f1-4d5b-9599-a5ba64c191061_nnln.png",
        wingClosedLeft: "https://s6.uupload.ir/files/b51f50b8-0f0a-48da-8334-e436332b1650_vkjx.png",
        wingOpenRight: "https://s6.uupload.ir/files/8d594266-f0f1-4d5b-9599-a5ba64c19106_10c.png",
        wingClosedRight: "https://s6.uupload.ir/files/b51f50b8-0f0a-48da-8334-e436332b16501_5xtw.png"
    },

    // موانع (تصاویر PNG 1024x1024)
    obstacles: {
        trap: "https://s6.uupload.ir/files/f30d1c9a-f300-48c3-9557-a9b23b8f36cd_oaqi.png",
        verticalPlatform: "https://s6.uupload.ir/files/83ef3131-82cf-4eb2-a013-b9f3c4f004c7_qrrs.png" // این تصویر عمودی است و در کد ۹۰ درجه می‌چرخد
    },

    // دکمه‌های منو اصلی (تصاویر PNG 1024x1024)
    menuButtons: {
        start: "https://s6.uupload.ir/files/4b1fae6b-ba81-4021-a4b0-45d85d34d7c2_gak6.png",
        supportCreator: "https://s6.uupload.ir/files/b2c4f5c0-c8f5-40b1-ac7e-facfccd314b1_qu18.png",
        supportAsiKhersi: "https://s6.uupload.ir/files/2046cf6e-d795-4639-8e5e-c4e4756276f4_okla.png",
        language: "https://s6.uupload.ir/files/1a45ddb3-2ff4-4f51-b110-5abd598a1841_s9vw.png"
    },

    // آیکون دکمه‌های موبایل (تصاویر PNG 1024x1024)
    mobileButtons: {
        left: "https://s6.uupload.ir/files/f97eb6cf-fbaa-4171-91d2-c3760e3e4c42_xfp6.png",
        right: "https://s6.uupload.ir/files/2e83daed-6c83-4ec4-a624-d61b618f01ed_euqw.png",
        jump: "https://s6.uupload.ir/files/e4258620-06a3-441b-bc1a-304c35276f0d_oz1e.png",
        attack: "https://s6.uupload.ir/files/70d5edc2-2c6c-41d8-9d92-d10649d359bb_37pe.png"
    }
};

// ==========================================
// GAME CONSTANTS & CONFIGURATION
// ==========================================
const V_WIDTH = 1920;
const V_HEIGHT = 1080;

// زمین ۱/۹ بک‌گراند را اشغال می‌کند
const GROUND_HEIGHT = V_HEIGHT / 9; // 120px
const GROUND_Y = V_HEIGHT - GROUND_HEIGHT; // 960px

// آفست ارتفاع جهت قرارگیری طبیعی کف پای کاراکتر روی زمین به دلیل شفافیت دور PNG
const GROUND_OFFSET = 25; 

// وضعیت‌های مجاز بازی طبق دستورالعمل (فقط همین ۶ وضعیت)
const STATES = {
    CREATOR_INTRO: 'CREATOR_INTRO',
    MENU: 'MENU',
    STORY: 'STORY',
    PLAYING: 'PLAYING',
    HONEY_CAUGHT: 'HONEY_CAUGHT',
    GAME_OVER: 'GAME_OVER'
};

// دیکشنری دو زبانه (پیش‌فرض: فارسی RTL)
const I18N = {
    fa: {
        dir: 'rtl',
        distance: 'مسافت',
        best: 'بهترین رکورد',
        newRecord: 'رکورد جدید!',
        gameOver: 'بازی تمام شد',
        restart: 'شروع مجدد',
        m: 'متر',
        finalDist: 'مسافت طی شده'
    },
    en: {
        dir: 'ltr',
        distance: 'Distance',
        best: 'Best Record',
        newRecord: 'NEW RECORD!',
        gameOver: 'Game Over',
        restart: 'Restart',
        m: 'm',
        finalDist: 'Distance Run'
    }
};

let currentLang = 'fa';
let currentState = STATES.CREATOR_INTRO;

// منابع بارگذاری شده
const loadedImages = {};
let totalAssetsToLoad = 0;
let loadedAssetsCount = 0;

// المان‌های DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const loadingScreen = document.getElementById('loading-screen');
const loaderProgress = document.getElementById('loader-progress');
const motionContainer = document.getElementById('motion-container');
const motionVideo = document.getElementById('motion-video');
const skipMotionBtn = document.getElementById('skip-motion-btn');
const mainMenu = document.getElementById('main-menu');
const hud = document.getElementById('hud');
const gameOverScreen = document.getElementById('game-over-screen');
const mobileControls = document.getElementById('mobile-controls');

// کلیدها و ورودی‌ها
const keys = { left: false, right: false, jump: false, attack: false };

// ==========================================
// ASSET LOADER
// ==========================================
function initAssetLoader(onComplete) {
    const assetList = [];

    function collectAssets(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string' && obj[key].trim() !== '') {
                assetList.push({ key: key, url: obj[key], ref: obj });
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                collectAssets(obj[key]);
            }
        }
    }

    collectAssets(ASSETS);

    totalAssetsToLoad = assetList.length;

    // اعمال دکمه‌های منو و موبایل به استایل المان‌ها
    applyUiButtonAssets();

    if (totalAssetsToLoad === 0) {
        loaderProgress.style.width = '100%';
        setTimeout(onComplete, 400);
        return;
    }

    assetList.forEach(item => {
        const img = new Image();
        img.src = item.url;
        img.onload = () => {
            loadedImages[item.url] = img;
            loadedAssetsCount++;
            const pct = Math.floor((loadedAssetsCount / totalAssetsToLoad) * 100);
            loaderProgress.style.width = `${pct}%`;
            if (loadedAssetsCount >= totalAssetsToLoad) {
                setTimeout(onComplete, 300);
            }
        };
        img.onerror = () => {
            console.error(`خطا در بارگذاری تصویر: ${item.url}`);
            loadedAssetsCount++;
            if (loadedAssetsCount >= totalAssetsToLoad) {
                setTimeout(onComplete, 300);
            }
        };
    });
}

function applyUiButtonAssets() {
    if (ASSETS.menuButtons.start) document.getElementById('btn-start').style.backgroundImage = `url('${ASSETS.menuButtons.start}')`;
    if (ASSETS.menuButtons.supportCreator) document.getElementById('btn-support-creator').style.backgroundImage = `url('${ASSETS.menuButtons.supportCreator}')`;
    if (ASSETS.menuButtons.supportAsiKhersi) document.getElementById('btn-support-asi').style.backgroundImage = `url('${ASSETS.menuButtons.supportAsiKhersi}')`;
    if (ASSETS.menuButtons.language) document.getElementById('btn-language').style.backgroundImage = `url('${ASSETS.menuButtons.language}')`;

    if (ASSETS.mobileButtons.left) document.getElementById('m-btn-left').style.backgroundImage = `url('${ASSETS.mobileButtons.left}')`;
    if (ASSETS.mobileButtons.right) document.getElementById('m-btn-right').style.backgroundImage = `url('${ASSETS.mobileButtons.right}')`;
    if (ASSETS.mobileButtons.jump) document.getElementById('m-btn-jump').style.backgroundImage = `url('${ASSETS.mobileButtons.jump}')`;
    if (ASSETS.mobileButtons.attack) document.getElementById('m-btn-attack').style.backgroundImage = `url('${ASSETS.mobileButtons.attack}')`;
}

function getImage(url) {
    return loadedImages[url] || null;
}

// ==========================================
// GAME STATE ENTITIES
// ==========================================
let cameraX = 0;
let distanceTraveled = 0;
let bestRecord = parseInt(localStorage.getItem('asi_khersi_best') || '0', 10);
let hasTriggeredNewRecord = false;
let isHoneyDeleted = false;

// خرس (Bear)
const bear = {
    x: 200,
    y: 0,
    w: 220,
    h: 220,
    vx: 0,
    vy: 0,
    speed: 10,
    isGrounded: false,
    state: 'idle', // idle, runOpen, runClosed, jump, attack, death, catchHoney
    attackTimer: 0,
    runAnimTimer: 0,
    runStep: false,
    deathTimer: 0
};

// عسل (Honey)
const honey = {
    x: 1000,
    y: 0,
    w: 160,
    h: 160,
    vx: 0,
    vy: 0,
    // سرعت عسل ۹۰ تا ۹۵ درصد خرس است
    speed: 9.2,
    isGrounded: false,
    state: 'runOpen',
    runAnimTimer: 0,
    runStep: false
};

// زنبورها و موانع فعال
let bees = [];
let obstacles = [];
let nextSpawnDistance = 600;

// ==========================================
// INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    initAssetLoader(() => {
        loadingScreen.classList.add('hidden');
        playCreatorIntro();
    });
    setupInputListeners();
});

// ==========================================
// MOTION GRAPHICS CONTROLLER
// ==========================================
function playMotion(url, onEnded) {
    if (!url || url.trim() === '') {
        // در صورت عدم قرار دادن لینک ویدیو، یک شبیه‌سازی کوتاه انجام می‌شود
        motionContainer.classList.remove('hidden');
        setTimeout(() => {
            motionContainer.classList.add('hidden');
            onEnded();
        }, 1000);
        return;
    }

    motionContainer.classList.remove('hidden');
    motionVideo.src = url;
    motionVideo.currentTime = 0;
    motionVideo.play().catch(e => {
        console.warn('پخش خودکار ویدیو مسدود شد؛ رد می‌شود.', e);
        motionContainer.classList.add('hidden');
        onEnded();
    });

    const finish = () => {
        motionVideo.onended = null;
        skipMotionBtn.onclick = null;
        motionVideo.pause();
        motionContainer.classList.add('hidden');
        onEnded();
    };

    motionVideo.onended = finish;
    skipMotionBtn.onclick = finish;
}

function playCreatorIntro() {
    currentState = STATES.CREATOR_INTRO;
    playMotion(ASSETS.videos.creatorIntro, () => {
        openMainMenu();
    });
}

function openMainMenu() {
    currentState = STATES.MENU;
    mainMenu.classList.remove('hidden');
    hud.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    mobileControls.classList.add('hidden');
}

function startStoryThenPlay() {
    mainMenu.classList.add('hidden');
    currentState = STATES.STORY;
    playMotion(ASSETS.videos.storyMotion, () => {
        startGameplay();
    });
}

function startGameplay() {
    resetGame();
    currentState = STATES.PLAYING;
    hud.classList.remove('hidden');
    mainMenu.classList.add('hidden');
    gameOverScreen.classList.add('hidden');

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        mobileControls.classList.remove('hidden');
    }
}

function resetGame() {
    cameraX = 0;
    distanceTraveled = 0;
    hasTriggeredNewRecord = false;
    isHoneyDeleted = false;

    bear.x = 200;
    bear.y = GROUND_Y - bear.h + GROUND_OFFSET;
    bear.vx = 0;
    bear.vy = 0;
    bear.state = 'idle';
    bear.attackTimer = 0;
    bear.deathTimer = 0;

    honey.x = 1000;
    honey.y = GROUND_Y - honey.h + GROUND_OFFSET;
    honey.vx = honey.speed;
    honey.vy = 0;
    honey.state = 'runOpen';

    bees = [];
    obstacles = [];
    nextSpawnDistance = 600;

    document.getElementById('new-record-banner').classList.add('hidden');
    updateHudDisplay();
}

// ==========================================
// CONTROLS & EVENTS
// ==========================================
function setupInputListeners() {
    // کلیدهای PC
    window.addEventListener('keydown', (e) => {
        if (currentState !== STATES.PLAYING) return;
        if (e.code === 'KeyA' || e.code === 'ArrowLeft') keys.left = true;
        if (e.code === 'KeyD' || e.code === 'ArrowRight') keys.right = true;
        if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'ArrowUp') keys.jump = true;
        if (e.code === 'KeyF' || e.code === 'KeyX') triggerBearAttack();
    });

    window.addEventListener('keyup', (e) => {
        if (e.code === 'KeyA' || e.code === 'ArrowLeft') keys.left = false;
        if (e.code === 'KeyD' || e.code === 'ArrowRight') keys.right = false;
        if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'ArrowUp') keys.jump = false;
    });

    // دکمه‌های منو
    document.getElementById('btn-start').onclick = startStoryThenPlay;
    document.getElementById('btn-support-creator').onclick = () => {
        alert('از حمایت شما از سازنده صمیمانه سپاسگزاریم!');
    };
    document.getElementById('btn-support-asi').onclick = () => {
        alert('حمایت از اسی خرسی ثبت شد! 🐻🍯');
    };
    document.getElementById('btn-language').onclick = toggleLanguage;

    // دکمه ری‌استارت
    document.getElementById('btn-restart').onclick = startGameplay;

    // دکمه‌های لمسی موبایل
    bindTouchButton('m-btn-left', () => keys.left = true, () => keys.left = false);
    bindTouchButton('m-btn-right', () => keys.right = true, () => keys.right = false);
    bindTouchButton('m-btn-jump', () => keys.jump = true, () => keys.jump = false);
    bindTouchButton('m-btn-attack', () => triggerBearAttack(), () => {});
}

function bindTouchButton(id, onDown, onUp) {
    const btn = document.getElementById(id);
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); onDown(); });
    btn.addEventListener('touchend', (e) => { e.preventDefault(); onUp(); });
    btn.addEventListener('touchcancel', (e) => { e.preventDefault(); onUp(); });
}

function triggerBearAttack() {
    if (bear.state !== 'death' && bear.state !== 'catchHoney') {
        bear.attackTimer = 18; // مدت زمان انیمیشن حمله
        bear.state = 'attack';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    const dict = I18N[lang];
    document.documentElement.dir = dict.dir;
    document.documentElement.lang = lang;

    document.getElementById('lbl-distance').textContent = dict.distance;
    document.getElementById('lbl-best').textContent = dict.best;
    document.getElementById('lbl-unit-m').textContent = dict.m;
    document.getElementById('lbl-unit-m2').textContent = dict.m;
    document.getElementById('lbl-unit-m3').textContent = dict.m;
    document.getElementById('lbl-unit-m4').textContent = dict.m;
    document.getElementById('lbl-game-over').textContent = dict.gameOver;
    document.getElementById('new-record-banner').textContent = dict.newRecord;
    document.getElementById('lbl-final-distance').textContent = dict.finalDist;
    document.getElementById('lbl-final-best').textContent = dict.best;
    document.getElementById('btn-restart').textContent = dict.restart;
}

// ==========================================
// GAMEPLAY LOGIC & UPDATES
// ==========================================
function updateGame() {
    if (currentState !== STATES.PLAYING) return;

    // ۱. به‌روزرسانی Bear
    if (bear.state !== 'death' && bear.state !== 'catchHoney') {
        if (keys.right) {
            bear.vx = bear.speed;
        } else if (keys.left) {
            bear.vx = -bear.speed * 0.7; // حرکت رو به عقب کمی آرام‌تر است
        } else {
            bear.vx = 0;
        }

        // پرش
        if (keys.jump && bear.isGrounded) {
            bear.vy = -20;
            bear.isGrounded = false;
        }

        // انیمیشن‌های Bear
        if (bear.attackTimer > 0) {
            bear.attackTimer--;
            bear.state = 'attack';
        } else if (!bear.isGrounded) {
            bear.state = 'jump';
        } else if (bear.vx !== 0) {
            bear.runAnimTimer++;
            if (bear.runAnimTimer > 8) {
                bear.runStep = !bear.runStep;
                bear.runAnimTimer = 0;
            }
            bear.state = bear.runStep ? 'runOpen' : 'runClosed';
        } else {
            bear.state = 'idle';
        }
    }

    // فیزیک Bear
    bear.vy += 0.9; // جاذبه
    bear.x += bear.vx;
    bear.y += bear.vy;

    // پلتفرم‌ها و برخورد با زمین
    const currentGroundY = GROUND_Y - bear.h + GROUND_OFFSET;
    if (bear.y >= currentGroundY) {
        bear.y = currentGroundY;
        bear.vy = 0;
        bear.isGrounded = true;
    }

    // پلتفرم‌های افقی شده
    obstacles.forEach(obs => {
        if (obs.type === 'verticalPlatform' && obs.isRotated) {
            const platTop = obs.y;
            if (bear.x + bear.w * 0.7 > obs.x && bear.x + bear.w * 0.3 < obs.x + obs.w) {
                if (bear.y + bear.h >= platTop && bear.y + bear.h <= platTop + 30 && bear.vy >= 0) {
                    bear.y = platTop - bear.h + GROUND_OFFSET;
                    bear.vy = 0;
                    bear.isGrounded = true;
                }
            }
        }
    });

    // ۲. به‌روزرسانی Honey (فرار از خرس با سرعت ۹۰ تا ۹۵٪ خرس)
    if (!isHoneyDeleted) {
        honey.x += honey.speed;
        honey.vy += 0.9;
        honey.y += honey.vy;

        const honeyGroundY = GROUND_Y - honey.h + GROUND_OFFSET;
        if (honey.y >= honeyGroundY) {
            honey.y = honeyGroundY;
            honey.vy = 0;
            honey.isGrounded = true;
        }

        // پرش تصادفی یا عبور از موانع
        if (honey.isGrounded && Math.random() < 0.015) {
            honey.vy = -18;
            honey.isGrounded = false;
        }

        if (!honey.isGrounded) {
            honey.state = 'jump';
        } else {
            honey.runAnimTimer++;
            if (honey.runAnimTimer > 8) {
                honey.runStep = !honey.runStep;
                honey.runAnimTimer = 0;
            }
            honey.state = honey.runStep ? 'runOpen' : 'runClosed';
        }

        // بررسی گرفتن عسل توسط خرس
        if (checkCollision(bear, honey)) {
            triggerHoneyCaught();
            return;
        }
    }

    // ۳. دوربین و محاسبه مسافت
    cameraX = bear.x - 250;
    distanceTraveled = Math.max(distanceTraveled, Math.floor(bear.x / 30));

    if (distanceTraveled > bestRecord) {
        bestRecord = distanceTraveled;
        localStorage.setItem('asi_khersi_best', bestRecord.toString());
        if (!hasTriggeredNewRecord) {
            hasTriggeredNewRecord = true;
            document.getElementById('new-record-banner').classList.remove('hidden');
        }
    }
    updateHudDisplay();

    // ۴. مدیریت موانع (Platform و Trap)
    updateObstacles();

    // ۵. مدیریت زنبورها (Bees)
    updateBees();

    // ۶. حذف المان‌های خارج از صفحه
    cullOffscreenObjects();

    // ۷. تولید موانع در طول مسیر بی‌پایان
    spawnEndlessTrack();

    // ۸. بررسی انیمیشن مرگ خرس
    if (bear.state === 'death') {
        bear.deathTimer++;
        if (bear.deathTimer > 60) { // بعد از ۱ ثانیه
            triggerGameOverSequence();
        }
    }
}

// برخورد ساده مستطیلی با حاشیه امن
function checkCollision(r1, r2, padding = 30) {
    return (
        r1.x + padding < r2.x + r2.w - padding &&
        r1.x + r1.w - padding > r2.x + padding &&
        r1.y + padding < r2.y + r2.h - padding &&
        r1.y + r1.h - padding > r2.y + padding
    );
}

// ==========================================
// SPAWN & TRACK SYSTEM
// ==========================================
function spawnEndlessTrack() {
    if (bear.x + 1800 > nextSpawnDistance) {
        const rand = Math.random();

        if (rand < 0.35) {
            // ایجاد تله خرس (Bear Trap)
            obstacles.push({
                type: 'trap',
                x: nextSpawnDistance,
                y: GROUND_Y - 80 + GROUND_OFFSET,
                w: 110,
                h: 80
            });
        } else if (rand < 0.65) {
            // پلتفرم عمودی که بعد از ۱ ثانیه ۹۰ درجه می‌چرخد
            obstacles.push({
                type: 'verticalPlatform',
                x: nextSpawnDistance,
                y: GROUND_Y - 260,
                w: 70,
                h: 260,
                rotation: 0, // رادیان
                timer: 0,
                isRotated: false
            });
        } else if (rand < 0.82) {
            // زنبور راست (ورود از راست، سر به چپ)
            bees.push({
                direction: 'right',
                x: bear.x + 1900,
                y: GROUND_Y - 220 - Math.random() * 180,
                w: 120,
                h: 120,
                vx: -6,
                vy: 0,
                wingTimer: 0,
                wingOpen: true,
                isDying: false,
                deathRot: 0
            });
        } else {
            // زنبور چپ (ورود از چپ، سر به راست)
            bees.push({
                direction: 'left',
                x: cameraX - 200,
                y: GROUND_Y - 220 - Math.random() * 180,
                w: 120,
                h: 120,
                vx: 8,
                vy: 0,
                wingTimer: 0,
                wingOpen: true,
                isDying: false,
                deathRot: 0
            });
        }

        nextSpawnDistance += 600 + Math.random() * 450;
    }
}

function updateObstacles() {
    obstacles.forEach(obs => {
        if (obs.type === 'verticalPlatform') {
            obs.timer += 1 / 60;
            // بعد از ۱ ثانیه، چرخش نرم ۹۰ درجه تا افقی شدن
            if (obs.timer >= 1.0 && obs.rotation < Math.PI / 2) {
                obs.rotation += 0.05;
                if (obs.rotation >= Math.PI / 2) {
                    obs.rotation = Math.PI / 2;
                    obs.isRotated = true;
                    // تغییر نسبت ابعاد فیزیکی هنگام افقی شدن کامل
                    obs.w = 260;
                    obs.h = 70;
                }
            }

            // برخورد با پلتفرم اگر هنوز عمودی است و مسدودکننده است
            if (!obs.isRotated && checkCollision(bear, obs, 10)) {
                bear.vx = 0;
                bear.x = obs.x - bear.w + 10;
            }
        } else if (obs.type === 'trap') {
            if (bear.state !== 'death' && checkCollision(bear, obs, 20)) {
                triggerBearDeath();
            }
        }
    });
}

function updateBees() {
    bees.forEach(bee => {
        if (!bee.isDying) {
            bee.x += bee.vx;

            // انیمیشن دو مرحله‌ای بال زدن
            bee.wingTimer++;
            if (bee.wingTimer > 6) {
                bee.wingOpen = !bee.wingOpen;
                bee.wingTimer = 0;
            }

            // برخورد حمله خرس به زنبور
            if (bear.state === 'attack') {
                const attackZone = {
                    x: bear.x + 50,
                    y: bear.y - 20,
                    w: bear.w + 60,
                    h: bear.h + 40
                };
                if (checkCollision(attackZone, bee, 10)) {
                    // شروع انیمیشن کارتونی Spoof مرگ زنبور
                    bee.isDying = true;
                    bee.vy = -14; // پرتاب اولیه به بالا
                    bee.vx = bee.vx * -0.5;
                }
            } else if (bear.state !== 'death' && checkCollision(bear, bee, 25)) {
                triggerBearDeath();
            }
        } else {
            // انیمیشن مرگ: چرخش ۱۸۰ درجه، بالا رفتن و سقوط کمدی به پایین
            bee.x += bee.vx;
            bee.vy += 0.8;
            bee.y += bee.vy;
            if (bee.deathRot < Math.PI) {
                bee.deathRot += 0.15;
            }
        }
    });
}

function cullOffscreenObjects() {
    obstacles = obstacles.filter(o => o.x > cameraX - 800 && o.x < cameraX + 3000);
    bees = bees.filter(b => b.y < V_HEIGHT + 300 && b.x > cameraX - 800 && b.x < cameraX + 3000);
}

function triggerBearDeath() {
    bear.state = 'death';
    bear.vx = 0;
    bear.vy = -8;
    bear.deathTimer = 0;
}

function triggerBearCaughtHoney() {
    bear.state = 'catchHoney';
    isHoneyDeleted = true; // عسل کاملاً دیلیت می‌شود
}

function triggerHoneyCaught() {
    triggerBearCaughtHoney();
    currentState = STATES.HONEY_CAUGHT;
    setTimeout(() => {
        playMotion(ASSETS.videos.honeyCatch, () => {
            showGameOverModal();
        });
    }, 600);
}

function triggerGameOverSequence() {
    currentState = STATES.GAME_OVER;
    playMotion(ASSETS.videos.gameOver, () => {
        showGameOverModal();
    });
}

function showGameOverModal() {
    hud.classList.add('hidden');
    mobileControls.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    document.getElementById('final-distance').textContent = distanceTraveled;
    document.getElementById('final-best').textContent = bestRecord;
}

function updateHudDisplay() {
    document.getElementById('val-distance').textContent = distanceTraveled;
    document.getElementById('val-best').textContent = bestRecord;
}

// ==========================================
// RENDERING (CANVAS 16:9 & SCENERY)
// ==========================================
function render() {
    ctx.clearRect(0, 0, V_WIDTH, V_HEIGHT);

    // ۱. ترسیم بک‌گراند بی‌پایان و تکرارشونده
    const bgImg = getImage(ASSETS.background);
    if (bgImg) {
        // پس‌زمینه قرینه و تکرارشونده ۱۶:۹ با سرعت پارالاکس نرم
        const bgOffset = (cameraX * 0.5) % V_WIDTH;
        ctx.drawImage(bgImg, -bgOffset, 0, V_WIDTH, V_HEIGHT);
        ctx.drawImage(bgImg, V_WIDTH - bgOffset, 0, V_WIDTH, V_HEIGHT);
        if (bgOffset > 0) {
            ctx.drawImage(bgImg, -bgOffset - V_WIDTH, 0, V_WIDTH, V_HEIGHT);
        }
    } else {
        // بک‌گراند پشتیبان در صورت عدم قرار دادن تصویر
        ctx.fillStyle = '#1e3c20';
        ctx.fillRect(0, 0, V_WIDTH, V_HEIGHT);
        ctx.fillStyle = '#142816';
        ctx.fillRect(0, GROUND_Y, V_WIDTH, GROUND_HEIGHT);
    }

    ctx.save();
    // انتقال مختصات بوم با توجه به موقعیت دوربین
    ctx.translate(-cameraX, 0);

    // ۲. ترسیم موانع (Obstacles)
    obstacles.forEach(obs => {
        if (obs.type === 'trap') {
            const trapImg = getImage(ASSETS.obstacles.trap);
            if (trapImg) {
                ctx.drawImage(trapImg, obs.x, obs.y, obs.w, obs.h);
            } else {
                ctx.fillStyle = '#8b0000';
                ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
            }
        } else if (obs.type === 'verticalPlatform') {
            const platImg = getImage(ASSETS.obstacles.verticalPlatform);
            ctx.save();
            ctx.translate(obs.x + 35, obs.y + 130);
            ctx.rotate(obs.rotation);
            if (platImg) {
                ctx.drawImage(platImg, -35, -130, 70, 260);
            } else {
                ctx.fillStyle = '#654321';
                ctx.fillRect(-35, -130, 70, 260);
            }
            ctx.restore();
        }
    });

    // ۳. ترسیم Honey (اگر دیلیت نشده باشد)
    if (!isHoneyDeleted) {
        let honeyImgKey = ASSETS.honey.runOpen;
        if (honey.state === 'runClosed') honeyImgKey = ASSETS.honey.runClosed;
        if (honey.state === 'jump') honeyImgKey = ASSETS.honey.jump;
        if (honey.state === 'idle') honeyImgKey = ASSETS.honey.idle;

        const honeyImg = getImage(honeyImgKey);
        if (honeyImg) {
            ctx.drawImage(honeyImg, honey.x, honey.y, honey.w, honey.h);
        } else {
            ctx.fillStyle = '#ffb300';
            ctx.fillRect(honey.x, honey.y, honey.w, honey.h);
        }
    }

    // ۴. ترسیم زنبورها (Bees)
    bees.forEach(bee => {
        let beeImgKey = '';
        if (bee.direction === 'left') {
            beeImgKey = bee.wingOpen ? ASSETS.bee.wingOpenLeft : ASSETS.bee.wingClosedLeft;
        } else {
            beeImgKey = bee.wingOpen ? ASSETS.bee.wingOpenRight : ASSETS.bee.wingClosedRight;
        }

        const beeImg = getImage(beeImgKey);
        ctx.save();
        ctx.translate(bee.x + bee.w / 2, bee.y + bee.h / 2);
        if (bee.isDying) {
            ctx.rotate(bee.deathRot);
        }
        if (beeImg) {
            ctx.drawImage(beeImg, -bee.w / 2, -bee.h / 2, bee.w, bee.h);
        } else {
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(-bee.w / 2, -bee.h / 2, bee.w, bee.h);
        }
        ctx.restore();
    });

    // ۵. ترسیم Bear
    let bearImgKey = ASSETS.bear.idle;
    if (bear.state === 'runOpen') bearImgKey = ASSETS.bear.runOpen;
    else if (bear.state === 'runClosed') bearImgKey = ASSETS.bear.runClosed;
    else if (bear.state === 'jump') bearImgKey = ASSETS.bear.jump;
    else if (bear.state === 'attack') bearImgKey = ASSETS.bear.attack;
    else if (bear.state === 'death') bearImgKey = ASSETS.bear.death;
    else if (bear.state === 'catchHoney') bearImgKey = ASSETS.bear.catchHoney;

    const bearImg = getImage(bearImgKey);
    if (bearImg) {
        ctx.drawImage(bearImg, bear.x, bear.y, bear.w, bear.h);
    } else {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(bear.x, bear.y, bear.w, bear.h);
    }

    ctx.restore();
}

// ==========================================
// MAIN GAME LOOP
// ==========================================
function gameLoop() {
    updateGame();
    render();
    requestAnimationFrame(gameLoop);
}

// شروع حلقه انیمیشن
requestAnimationFrame(gameLoop);