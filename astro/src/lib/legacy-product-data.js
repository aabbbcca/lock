window.ELECTRONIC_BRANDS = [
    { id: 'yale', title: '耶魯 Yale', pageTitle: 'Yale 電子鎖', pageTitleSize: 'clamp(1rem, 1vw, 2rem)' },
    { id: 'cp', title: '高CP值精選', pageTitle: '高CP值電子鎖', pageTitleSize: 'clamp(1rem, 1vw, 2rem)' },
    { id: 'philips', title: '飛利浦 Philips', pageTitle: 'Philips 電子鎖', pageTitleSize: 'clamp(1rem, 1vw, 2rem)' },
    { id: 'waferlock', title: '維夫拉克waferlock', pageTitle: 'Waferlock 電子鎖', pageTitleSize: 'clamp(1rem, 1vw, 2rem)' },
    { id: 'milre', title: '美樂 Milre', pageTitle: 'Milre 電子鎖', pageTitleSize: 'clamp(1rem, 1vw, 2rem)' }
];

window.ELECTRONIC_PRODUCTS = {
    'luna-pro': {
        id: 'luna-pro',
        brand: 'yale',
        title: 'Yale Luna Pro+ 人臉辨識',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/yale-luna-pro-plus-front-body-1.webp',
        tag: 'Yale 旗艦款',
        listPrice: 39800,
        offerPrice: 27999,
        desc: '偏心防夾手設計，霧面黑配香檳金/星空灰。極致安全與便利的頂級選擇。<br>支援 3D 人臉識別，靠近自動喚醒，完全解放雙手。',
        features: ['人臉辨識 / 指紋 / 卡片 / 密碼 / 鑰匙 / App', '3D 人臉識別，靠近自動喚醒', '歐規大鎖匣，結構堅固', '防夾手把手設計']
    },
    'byyou-pro': {
        id: 'byyou-pro',
        brand: 'yale',
        title: 'Yale ByYou Pro 指紋五合一',
        detailTitle: 'Yale ByYou Pro 指紋五合一',
        plainTitle: 'Yale ByYou Pro 指紋五合一',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/byyou.PNG',
        tag: 'Yale 時尚款',
        listPrice: 30000,
        offerPrice: 25399,
        desc: '多色把手自由選 (午夜黑/香檳金/冰晶銀)。<br>支援 Apple/Samsung Wallet 解鎖。<br>手機就是鑰匙，超方便!<br>時尚外型，搭配現代裝潢的最佳選擇。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙 / 藍芽', '內建藍芽模組，手機就是鑰匙', '時尚外型，搭配現代裝潢', '支援手機錢包解鎖']
    },
    'ydm7116a': {
        id: 'ydm7116a',
        brand: 'yale',
        title: 'Yale YDM7116A 把手式',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/YDM7116A.PNG',
        tag: 'Yale 經典款',
        listPrice: 30500,
        offerPrice: 19000,
        desc: '經典把手設計，長輩使用最習慣。有黑色跟玫瑰金可選，功能穩定耐用。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙', '語音導覽設定，操作簡單', '強制上鎖與入侵警報功能']
    },
    'ydm4109a': {
        id: 'ydm4109a',
        brand: 'yale',
        title: 'Yale YDM4109A 智慧指紋鎖',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/YDM4109A.PNG',
        tag: 'Yale 智慧款',
        listPrice: 24800,
        offerPrice: 16000,
        desc: '三合一指紋密碼鑰匙。經典熱銷款升級，金色/黑色可選。斷層式指紋掃描，安全可靠。',
        features: ['指紋 / 密碼 / 鑰匙', '虛位密碼功能，防窺視', '可選配藍芽/遠端模組']
    },
    'ymf40a': {
        id: 'ymf40a',
        brand: 'yale',
        title: 'Yale YMF40A 熱感應觸控',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/YMF40A.PNG',
        tag: 'Yale 推拉款',
        listPrice: 25800,
        offerPrice: 17000,
        desc: '三合一指紋密碼鑰匙。簡約黑色推拉式設計，美觀大方。',
        features: ['指紋 / 密碼 / 鑰匙', '熱感應觸控面板', '入侵/破壞警報功能']
    },
    'ymf30a': {
        id: 'ymf30a',
        brand: 'yale',
        title: 'Yale YMF30A 卡片密碼鎖',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/YMF30A.PNG',
        tag: 'Yale 卡片款',
        listPrice: 24800,
        offerPrice: 16000,
        desc: '三合一卡片密碼鑰匙。',
        features: ['卡片 / 密碼 / 鑰匙', '熱感應觸控面板', '美觀耐用']
    },
    'ydm7216a': {
        id: 'ydm7216a',
        brand: 'yale',
        title: 'Yale YDM7216A 隱藏式指紋',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/YDM7216A.PNG',
        tag: 'Yale 升級款',
        listPrice: 26800,
        offerPrice: 18000,
        desc: '隱藏式指紋感應。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙', '隱藏式指紋感應', '語音導覽設定']
    },
    'cp-r1': {
        id: 'cp-r1',
        brand: 'cp',
        title: 'SWD R1 指紋辨識電子鎖<br>高CP值款',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R1.jpg',
        tag: '小資首選',
        listPrice: 15000,
        offerPrice: 12000,
        desc: '功能實用，價格親民，房東與租屋族的最愛。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙', '可加購遠端解鎖功能', '高性價比把手款']
    },
    'cp-r9': {
        id: 'cp-r9',
        brand: 'cp',
        title: 'SWD R9 人臉辨識電子鎖<br>高CP值款',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9.jpg',
        tag: '超高CP值',
        listPrice: 20000,
        offerPrice: 19800,
        desc: '最平價的人臉辨識電子鎖，輕鬆升級智慧生活。<br>3D人臉辨識 掌靜脈 指紋 密碼 卡片 鑰匙 遠端解鎖 七合一功能齊全<br>主動式貓眼雙向通話 逗留自動抓拍<br>開門通知 錯誤警報<br>防水 防潮 人體感應靠近即開門<br>關門自動上鎖 室內反鎖<br>5000毫安大容量電池 續航4~6個月<br>緊急Type-C 室外供電 低電量通知',
        features: ['人臉 / 指紋 / 密碼 / 鑰匙', '3D 人臉識別 / 掌靜脈', '大螢幕貓眼 / 遠端解鎖對講'],
        detailImagesTitle: 'R9 產品 DM',
        detailImages: [
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833230_0.jpg',
                caption: 'R9 八合一電子鎖'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833227_0.jpg',
                caption: 'R9 刷臉解鎖'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833228_0.jpg',
                caption: 'R9 多種解鎖方式'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833229_0.jpg',
                caption: 'R9 多元指紋識別'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833231_0.jpg',
                caption: 'R9 24 小時主動監控'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833232_0.jpg',
                caption: 'R9 防水防潮設計'
            },
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R9_DM/S__189833233_0.jpg',
                caption: 'R9 5000mAh 大容量電池'
            }
        ]
    },
    'cp-p3': {
        id: 'cp-p3',
        brand: 'cp',
        title: '房門電子鎖 P3<br>高CP值款',
        detailTitle: '房門電子鎖 P3 高CP值款',
        plainTitle: '房門電子鎖 P3 高CP值款',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/P3.jpg',
        tag: '高CP值房門款',
        listPrice: null,
        offerPrice: '一般款 NT$3,000 (含安裝)',
        desc: '使用喇叭鎖孔安裝，無須額外開孔。<br>適合租屋族、房東、辦公室及其他一般房間門。<br>一般款：指紋、卡片、密碼、鑰匙解鎖。<br>遠端款：包含一般款全部功能，另有 APP 遠端設定、遠端解鎖、<br>APP 解鎖通知、解鎖失敗通知、操作紀錄、低電量提醒、臨時密碼。<br>沒電時可使用機械鑰匙開鎖，也可使用 USB 應急供電後解鎖。<br>無須額外開孔，方便退租時復原，出門不怕忘記帶鑰匙。<br>提升安全性，方便租客管理，提升租屋品質。<br>保固一年。',
        features: [
            '使用喇叭鎖孔，無須額外開孔',
            '一般款：指紋 / 卡片 / 密碼 / 鑰匙',
            '遠端款：APP 遠端設定 / 遠端解鎖 / APP 解鎖通知',
            '解鎖失敗通知 / 操作紀錄 / 低電量提醒 / 臨時密碼',
            '沒電可用應急鑰匙或 USB 應急供電進入',
            '適合租屋族 / 房東 / 一般房間門',
            '一般款 NT$3,000；遠端款 NT$4,000 以上皆為完工價',
            '保固一年'
        ],
        detailImagesTitle: 'P3 產品 DM',
        detailImages: [
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/P3_DM.png',
                caption: '房門電子鎖 P3 產品 DM'
            }
        ]
    },
    'cp-r3': {
        id: 'cp-r3',
        brand: 'cp',
        title: '高CP值款 SWD R3',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R3.JPG',
        tag: '套房族最愛',
        listPrice: 6500,
        offerPrice: 5500,
        desc: '經濟實惠，入門首選。',
        features: ['密碼 / 卡片 / 鑰匙', '基本防盜', '高性價比']
    },
    'cp-r7': {
        id: 'cp-r7',
        brand: 'cp',
        title: '高CP值款 SWD R7',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/R7.JPG',
        tag: '進階款',
        listPrice: 8000,
        offerPrice: 7000,
        desc: '功能升級，更安全便利。',
        features: ['指紋 / 密碼 / 卡片 / 鑰匙', '進階防盜', '高性價比']
    },
    'philips-709-fvp': {
        id: 'philips-709-fvp',
        brand: 'philips',
        title: '飛利浦 Philips 709-FVP <br>(平行輸入 / 水貨)',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/709fvp.webp',
        tag: 'Philips 旗艦款',
        listPrice: 21500,
        offerPrice: '優惠價 NT$21000 (含基本安裝)',
        desc: '人臉、指紋、密碼、鑰匙、卡片五種開啟方式。<br>內建電子貓眼，隨時掌握門外動態。<br>3D人臉辨識系統，推拉式開門，無接觸自動解鎖。<br>外部type-c充電孔，使用行動電源即可在外面緊急供電。<br>C級隱藏式鎖芯，無法以技術開啟。<br>隨機附兩把機械鑰匙，電子鎖故障時可用機械鑰匙開門。<br>水貨保固一年，安心有保障',
        features: ['人臉 / 指紋 / 密碼 / 卡片 / 鑰匙', '大螢幕貓眼']
    },
    'philips-709-fvp-T': {
        id: 'philips-709-fvp-T',
        brand: 'philips',
        title: '飛利浦 Philips 709-FVP <br>(台灣總代理公司貨)',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/709fvp.webp',
        tag: 'Philips 旗艦款',
        listPrice: 36000,
        offerPrice: '優惠價 NT$31000 (含基本安裝)',
        desc: '飛利浦旗艦款。<br>人臉、指紋、密碼、鑰匙、卡片、WiFi，六種開啟方式。<br>app遠端視訊/解鎖<br>3D人臉辨識系統，推拉式開門，無接觸自動解鎖。<br>外部type-c充電孔，使用行動電源即可在外面緊急供電。<br>C級隱藏式鎖芯，無法以技術開啟。<br>附兩把機械鑰匙，當電子鎖沒電或故障時可用機械鑰匙開門。<br>公司貨享有原廠三年保固，安心有保障',
        features: ['人臉 / 指紋 / 密碼 / 卡片 / 鑰匙', '遠端視訊通話/解鎖', '大螢幕貓眼']
    },
    'philips-702E': {
        id: 'philips-702E',
        brand: 'philips',
        title: 'Philips 702E (公司貨)',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/702E.jpg',
        tag: 'Philips 指紋款',
        listPrice: 26000,
        offerPrice: '優惠價 NT$20000 (含基本安裝)',
        desc: '遠端解鎖、指紋辨識。',
        features: ['指紋 / 密碼 / 卡片 / 鑰匙', '遠端視訊通話', '大螢幕貓眼']
    },
    'wafer-l600': {
        id: 'wafer-l600',
        brand: 'waferlock',
        title: '維夫拉克 Waferlock L600',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/L600.PNG',
        tag: 'Waferlock 人臉款',
        listPrice: null,
        offerPrice: '請洽詢',
        desc: '4合一把手式 (人臉/卡片/密碼/鑰匙)，開門更快速。',
        features: ['人臉辨識 / 卡片 / 密碼 / 鑰匙', 'IP54 防塵防水', '中文語音提示']
    },
    'wafer-l900': {
        id: 'wafer-l900',
        brand: 'waferlock',
        title: '維夫拉克 Waferlock L900',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/L900.PNG',
        tag: 'Waferlock 推拉款',
        listPrice: null,
        offerPrice: '請洽詢',
        desc: '4合1推拉式 (指紋/卡片/密碼/鑰匙)，時尚設計。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙', '推拉式把手', '防高壓電擊']
    },
    'wafer-l396': {
        id: 'wafer-l396',
        brand: 'waferlock',
        title: '維夫拉克 Waferlock L396',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/L396.PNG',
        tag: 'Waferlock 指紋款',
        listPrice: null,
        offerPrice: '請洽詢',
        desc: '4合1把手式 (指紋/卡片/密碼/鑰匙)。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙', '適合辦公室/租屋']
    },
    'wafer-l376': {
        id: 'wafer-l376',
        brand: 'waferlock',
        title: '維夫拉克 Waferlock L376',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/L376.PNG',
        tag: 'Waferlock 基本款',
        listPrice: null,
        offerPrice: '請洽詢',
        desc: '基本款3合1把手式 (卡片/密碼/鑰匙)。',
        features: ['卡片 / 密碼 / 鑰匙', '經濟實惠']
    },
    'milre-7150': {
        id: 'milre-7150',
        brand: 'milre',
        title: '美樂Milre MDL-7150+ <br>推拉式電子鎖',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/MDL-7150+.webp',
        tag: '推拉式',
        listPrice: 19000,
        offerPrice: 16800,
        desc: '推拉式便利設計。<br>隱藏式機械鑰匙孔，附3把機械鑰匙，當電子鎖沒電或故障時可用機械鑰匙開門。<br>台灣總代理公司貨，原廠保固3年，安心有保障。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙','關門自動上鎖','低電量提示','外部緊急充電口','三年保固']
    },
    'milre-6500f': {
        id: 'milre-6500f',
        brand: 'milre',
        title: 'Milre MDL-6500F',
        img: 'https://placehold.co/400x300?text=MDL-6500F',
        tag: '指紋款',
        listPrice: null,
        offerPrice: 18000,
        desc: '經典指紋款。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙']
    },
    'milre-6800': {
        id: 'milre-6800',
        brand: 'milre',
        title: 'Milre MI-6800',
        img: 'https://placehold.co/400x300?text=MI-6800',
        tag: '高階款',
        listPrice: null,
        offerPrice: 16000,
        desc: '高階安全防護。',
        features: ['指紋 / 卡片 / 密碼 / 鑰匙']
    },
    'milre-6450': {
        id: 'milre-6450',
        brand: 'milre',
        title: 'Milre MI-6450',
        img: 'https://placehold.co/400x300?text=MI-6450',
        tag: '輔助鎖',
        listPrice: null,
        offerPrice: 15000,
        desc: '輔助鎖設計。',
        features: ['指紋 / 卡片 / 密碼']
    },
    'milre-400f': {
        id: 'milre-400f',
        brand: 'milre',
        title: 'Milre MDL-400F',
        img: 'https://placehold.co/400x300?text=MDL-400F',
        tag: '指紋輔助',
        listPrice: null,
        offerPrice: 11000,
        desc: '指紋輔助鎖。',
        features: ['指紋 / 密碼']
    },
    'milre-510f': {
        id: 'milre-510f',
        brand: 'milre',
        title: 'Milre MDL-510F',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/MDL-510F.png',
        tag: '三合一指紋款',
        listPrice: 9500,
        offerPrice: 9000,
        desc: '經濟型指紋鎖。出租套房首選。<br>可完全控管，無管理員密碼無法變更設定',
        features: ['指紋 / 卡片 / 密碼']
    },
    'milre-510s': {
        id: 'milre-510s',
        brand: 'milre',
        title: '美樂 Milre MDL-510S',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/MDL-510S.png',
        tag: '二合一',
        listPrice: 7500,
        offerPrice: 7000,
        desc: '經濟型電子鎖。出租套房首選。<br>可完全控管，無管理員密碼無法變更設定',
        features: ['卡片 / 密碼']
    },
    'milre-570f': {
        id: 'milre-570f',
        brand: 'milre',
        title: '美樂 Milre MI-570F',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/MI-570F.jpg',
        tag: '四合一指紋鑰匙款',
        listPrice: null,
        offerPrice: 'NT$ 11,000（含安裝）',
        desc: '指紋辨識、卡片、密碼、鑰匙的輔助型電子鎖。<br>加購遠端APP橋接器，即可透過手機APP控制',
        features: ['指紋 / 密碼 / 卡片 / 鑰匙'],

        detailImagesTitle: 'MI-570F DM',
        detailImages: [
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/570DM.jpg',
                caption: '美樂570系列電子鎖'
            }
        ]
    },
    'milre-570s': {
        id: 'milre-570s',
        brand: 'milre',
        title: 'Milre MI-570S',
        img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/MI-570S.jpg',
        tag: '三合一鑰匙款',
        listPrice: null,
        offerPrice: 'NT$ 8,500（含安裝）',
        desc: '卡片、密碼、鑰匙的外掛式輔助型電子鎖。<br>加購遠端APP橋接器，即可透過手機APP控制',
        features: ['卡片 / 密碼 / 鑰匙'],

        detailImagesTitle: 'MI-570S DM',
        detailImages: [
            {
                img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/570DM.jpg',
                caption: '美樂570系列電子鎖'
            }
        ]
    }
};

window.PRODUCT_INSTALLATION_EXAMPLES = {
    'cp-r9': [
        {
            img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/IMG_1159.JPG',
            caption: 'R9高CP值電子鎖 - 永和闕宅'
        },
        {
            img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/IMG_00000.JPG',
            caption: 'R9高CP值電子鎖 - 大安許宅'
        }
    ],
    'cp-p3': [
        {
            img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/IMG_3231.jpg',
            caption: '房門電子鎖 P3 - 新莊洪宅'
        }
    ],
    'milre-510s': [
        {
            img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/IMG_2895.JPG',
            caption: '美樂 Milre MDL-510S - 大同林宅',
            fit: 'contain'
        }
    ],
    'philips-709-fvp': [
        {
            img: 'https://raw.githubusercontent.com/aabbbcca/lock/main/images/IMG_1283.JPG',
            caption: '飛利浦709-fvp旗艦電子鎖 - 八里蕭宅'
        }
    ]
};
