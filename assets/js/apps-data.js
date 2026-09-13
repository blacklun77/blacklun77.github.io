/**
 * apps-data.js
 * blacklun 공식 모바일 앱 메타데이터 및 스토어 뱃지 공통 설정
 */

const APPS_DATA = [
    {
        id: "com.bloomixcrush.game",
        emoji: "🌸",
        icon: "./assets/icons/bloomix_crush_app_icon.png",
        names: {
            ko: "Bloomix Crush",
            en: "Bloomix Crush",
            ja: "Bloomix Crush",
            zh: "Bloomix Crush",
            "zh-Hant": "Bloomix Crush"
        },
        appStore: {
            id: "6791850251",
            slug: "bloomix-crush"
        }
    },
    {
        id: "com.easyreadbible.app",
        emoji: "✝️",
        icon: "./assets/icons/easy_read_bible_app_icon.png",
        names: {
            ko: "쉬운 성경",
            en: "Easy Read Bible",
            ja: "やさしい聖書",
            zh: "易读圣经",
            "zh-Hant": "易讀聖經",
            "zh-HK": "易讀聖經",
            es: "Biblia de Lectura Fácil",
            pt: "Bíblia de Leitura Fácil",
            tl: "Bibliyang Madaling Basahin",
            fr: "Bible Facile à Lire",
            ru: "Лёгкая Библия",
            de: "Leicht zu Lesende Bibel",
            id: "Alkitab Mudah Dibaca",
            it: "Bibbia Facile da Leggere",
            pl: "Prosta Biblia"
        },
        appStore: {
            id: "6770253137",
            slug: "easy-read-bible",
            zhCountry: "tw"
        }
    },
    {
        id: "com.bloomix2048.app",
        emoji: "🎮",
        icon: "./assets/icons/bloomix2048_app_icon.png",
        names: {
            ko: "Bloomix Merge",
            en: "Bloomix Merge",
            ja: "Bloomix Merge",
            zh: "Bloomix Merge",
            "zh-Hant": "Bloomix Merge"
        },
        appStore: null // Google Play 전용
    },
    {
        id: "com.easyreadbook.app",
        emoji: "📖",
        icon: "./assets/icons/easy_read_book_app_icon.png",
        names: {
            ko: "쉬운 독서",
            en: "ReadEase: Easy Reading",
            ja: "やさしい読書",
            zh: "轻读经典",
            "zh-Hant": "輕讀經典",
            "zh-HK": "輕讀經典"
        },
        appStore: {
            id: "6766005685",
            slug: "readease-easy-reading",
            zhCountry: "tw"
        }
    },
    {
        id: "com.easysutra.app",
        emoji: "☸️",
        icon: "./assets/icons/easy_sutra_app_icon.png",
        names: {
            ko: "쉬운 불경",
            en: "Easy Sutra",
            ja: "やさしい経典",
            zh: "易懂佛经",
            "zh-Hant": "易懂佛經",
            "zh-HK": "易明佛經",
            th: "พระไตรปิฎกอ่านง่าย"
        },
        appStore: {
            id: "6761761924",
            slug: "easy-sutra",
            zhCountry: "tw"
        }
    },
    {
        id: "com.ks.utility_log",
        emoji: "⚡",
        icon: "./assets/icons/utility_log_app_icon.png",
        names: {
            ko: "공과금 기록",
            en: "Utility Log: Secure Bill",
            ja: "公共料金記録",
            zh: "公共账单记录",
            "zh-Hant": "公用事業費用紀錄",
            "zh-HK": "公用事業開支紀錄"
        },
        appStore: {
            id: "6760272670",
            slug: "%EA%B3%B5%EA%B3%BC%EA%B8%88-%EA%B8%B0%EB%A1%9D"
        }
    },
    {
        id: "com.ks.my_eval_record",
        emoji: "📊",
        icon: "./assets/icons/my_eval_record_app_icon.png",
        names: {
            ko: "내 평가 기록",
            en: "My Eval Record",
            ja: "私の評価記録",
            zh: "我的考核记录",
            "zh-Hant": "我的績效紀錄",
            "zh-HK": "我的評核紀錄"
        },
        appStore: {
            id: "6759724181",
            slug: "my-eval-record"
        }
    },
    {
        id: "com.ks.mymoneylog",
        emoji: "📔",
        icon: "./assets/icons/my_money_log_app_icon.png",
        names: {
            ko: "내 경조사 장부",
            en: "My Gift & Event Ledger",
            ja: "冠婚葬祭家計簿",
            zh: "随礼账本",
            "zh-Hant": "紅白包帳本",
            "zh-HK": "人情帳本"
        },
        appStore: {
            id: "6759233404",
            slug: "%EB%82%B4-%EA%B2%BD%EC%A1%B0%EC%82%AC-%EC%9E%A5%EB%B6%80"
        }
    },
    {
        id: "com.bloomixsudoku.game",
        emoji: "🧩",
        icon: "./assets/icons/sudoku_app_icon.png",
        names: {
            ko: "Bloomix Sudoku",
            en: "Bloomix Sudoku",
            ja: "Bloomix Sudoku",
            zh: "Bloomix Sudoku",
            "zh-Hant": "Bloomix Sudoku"
        },
        appStore: null // Google Play 전용
    }
];

// 스토어 뱃지 리소스 및 언어별 설정 매핑
const PLAY_BADGE_MAP = {
    'ko': { src: './assets/badges/google-play-ko.svg', alt: 'Google Play에서 다운로드' },
    'en': { src: './assets/badges/google-play-en.svg', alt: 'Get it on Google Play' },
    'ja': { src: './assets/badges/google-play-ja.svg', alt: 'Google Play で手に入れよう' },
    'zh': { src: './assets/badges/google-play-zh-cn.svg', alt: '获取 Google Play' },
    'zh-Hant': { src: './assets/badges/google-play-zh-tw.svg', alt: '取得 Google Play' }
};

const APP_STORE_BADGE_MAP = {
    'ko': { country: 'kr', src: './assets/badges/app-store-ko.svg', alt: 'App Store에서 다운로드' },
    'en': { country: 'us', src: './assets/badges/app-store-en.svg', alt: 'Download on the App Store' },
    'ja': { country: 'jp', src: './assets/badges/app-store-ja.svg', alt: 'App Storeでダウンロード' },
    'zh': { country: 'cn', src: './assets/badges/app-store-zh-cn.svg', alt: 'App Store 下载' },
    'zh-Hant': { country: 'tw', src: './assets/badges/app-store-zh-tw.svg', alt: 'App Store 下載' }
};

// 헬퍼 함수: 패키지 ID로 앱 데이터 조회
function getAppById(packageId) {
    return APPS_DATA.find(app => app.id === packageId) || null;
}

// 헬퍼 함수: 특정 언어의 앱 이름 조회
function getAppName(packageId, lang) {
    const app = getAppById(packageId);
    if (!app || !app.names) return '';
    return app.names[lang] || app.names['en'] || app.names['ko'] || '';
}

// 헬퍼 함수: 언어에 따른 App Store URL 생성
function getAppStoreUrl(packageId, lang) {
    const app = getAppById(packageId);
    if (!app || !app.appStore) return null;
    const badgeConfig = APP_STORE_BADGE_MAP[lang] || APP_STORE_BADGE_MAP['en'];
    const country = (lang === 'zh' && app.appStore.zhCountry) ? app.appStore.zhCountry : badgeConfig.country;
    return `https://apps.apple.com/${country}/app/${app.appStore.slug}/id${app.appStore.id}`;
}

// 헬퍼 함수: Google Play URL 생성
function getPlayStoreUrl(packageId) {
    return `https://play.google.com/store/apps/details?id=${packageId}`;
}
