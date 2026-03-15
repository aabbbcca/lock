export const traditionalCategories = [
  {
    id: "trad-main",
    title: "精選機械門鎖",
    description: "常見住宅鐵門、輔助鎖與五段鎖款式，適合舊門換新與日常維修。"
  },
  {
    id: "trad-electric",
    title: "電鎖與特殊鎖",
    description: "公寓大門電鎖、連體鎖與特殊機構更換，適合社區門口與大門升級。"
  },
  {
    id: "trad-japan",
    title: "日規系列",
    description: "MIWA、GOAL 等日規規格鎖體，常見於日式鋁門與進口門扇。"
  },
  {
    id: "trad-room",
    title: "房門與通道",
    description: "房門喇叭鎖、水平鎖與通道鎖，適合套房、辦公室與室內門更新。"
  }
];

export const traditionalProducts = [
  {
    id: "trad-3-4",
    category: "trad-main",
    title: "鐵門鎖（三段 / 四段）",
    img: "https://raw.githubusercontent.com/aabbbcca/lock/main/images/%E7%99%BD%E9%90%B5%E4%B8%89%E6%AE%B5.JPG",
    tag: "高 CP 值",
    offerText: "含安裝 NT$ 2,000~3,000",
    desc: "公寓與透天常見的鐵門鎖型，依段數、門厚與把手形式選配，維修與更換都很常見。",
    features: ["常見規格好維修", "適合舊門換新", "可依門厚與段數挑款"],
    variants: [
      { name: "單舌三段鎖", price: "NT$ 2,000" },
      { name: "三段式鐵門鎖", price: "NT$ 2,500" },
      { name: "四段式鐵門鎖", price: "NT$ 3,000" }
    ]
  },
  {
    id: "trad-5-blade",
    category: "trad-main",
    title: "葉片五段鎖",
    img: "https://raw.githubusercontent.com/aabbbcca/lock/main/images/%E5%A4%A7%E5%AE%89%E4%BD%8F.PNG",
    tag: "大門升級",
    offerText: "含安裝 NT$ 3,800~4,500",
    desc: "適合重視防撬與鑰匙安全性的住家，常見於需要升級門鎖防護等級的老屋大門。",
    features: ["葉片結構防拷貝", "常見於住家大門", "可搭配高安全鑰匙"],
    variants: [
      { name: "988 五段鎖", price: "NT$ 3,800" },
      { name: "9512 五段鎖", price: "NT$ 4,500" }
    ]
  },
  {
    id: "trad-aux",
    category: "trad-main",
    title: "輔助鎖",
    img: "https://raw.githubusercontent.com/aabbbcca/lock/main/images/%E8%BC%94%E5%8A%A9%E9%8E%96.jpg",
    tag: "防護加強",
    offerText: "含安裝 NT$ 1,000~1,500",
    desc: "適合加裝在既有大門上，作為第二道防護，常見於租屋處、套房與一般住家。",
    features: ["安裝快速", "可加強原有門鎖防護", "常見尺寸易維修"],
    variants: [
      { name: "標準輔助鎖", price: "NT$ 1,000" },
      { name: "S 型輔助鎖", price: "NT$ 1,200" },
      { name: "K-589 輔助鎖", price: "NT$ 1,300" },
      { name: "COE 輔助鎖", price: "NT$ 1,500" }
    ]
  },
  {
    id: "trad-gate-electric",
    category: "trad-electric",
    title: "公寓大門電鎖",
    img: "/S__26214418.jpg",
    tag: "社區大門",
    offerText: "含安裝 NT$ 2,500~3,000 起",
    desc: "適用於社區、公寓一樓鐵門與門禁系統整合，現場會依門框、開門方向與電源配置評估。",
    features: ["可搭配門禁系統", "常見公寓大門使用", "依現場結構評估配件"],
    variants: [
      { name: "APD 電鎖", price: "NT$ 2,500" },
      { name: "電鎖頭", price: "NT$ 3,000" },
      { name: "磁力鎖", price: "價格洽詢" },
      { name: "玻璃門專用", price: "價格洽詢" }
    ]
  },
  {
    id: "trad-3in1",
    category: "trad-electric",
    title: "三合一通風門鎖",
    img: "/S__26214418.jpg",
    tag: "一體成型",
    offerText: "含安裝 NT$ 3,000 起",
    desc: "三合一通風門用，常見於陽台門。",
    features: ["外觀整體性高", "適合整組汰換", "安裝完成度佳"]
  },
  {
    id: "trad-horiz-integrated",
    category: "trad-electric",
    title: "水平連體鎖",
    img: "/S__26214418.jpg",
    tag: "特殊規格",
    offerText: "價格洽詢",
    desc: "常見於舊式大門或特殊門型，需先確認鎖體尺寸、孔位與把手方向。",
    features: ["需丈量鎖體規格", "可協助比對替代款", "適合老屋既有門扇"]
  },
  {
    id: "trad-floor",
    category: "trad-electric",
    title: "地鉸鏈 / 地鎖",
    img: "/S__26214418.jpg",
    tag: "商空常見",
    offerText: "價格洽詢",
    desc: "適合玻璃門、店面門與特殊門扇，需依現場門片重量與結構確認。",
    features: ["商業空間常見", "需現場確認尺寸", "可搭配門片調整"]
  },
  {
    id: "trad-jp-horiz",
    category: "trad-japan",
    title: "日規水平鎖（MIWA / GOAL）",
    img: "/S__26214418.jpg",
    tag: "日規門型",
    offerText: "價格洽詢",
    desc: "常見於日規鋁門、進口門與社區公設，需依鎖體中心距與面板尺寸判斷。",
    features: ["MIWA / GOAL 常見", "需確認中心距", "可協助替代規格評估"]
  },
  {
    id: "trad-jp-aux",
    category: "trad-japan",
    title: "日規輔助鎖",
    img: "/S__26214418.jpg",
    tag: "進口門適用",
    offerText: "價格洽詢",
    desc: "適合日規門扇追加第二道安全鎖，會依門框厚度與原有孔位協助搭配。",
    features: ["適合日規門扇", "可補強原有防護", "需現場丈量確認"]
  },
  {
    id: "trad-room",
    category: "trad-room",
    title: "房門鎖（喇叭鎖 / 水平鎖）",
    img: "https://raw.githubusercontent.com/aabbbcca/lock/main/images/%E6%B0%B4%E5%B9%B3%E9%8E%96.JPG",
    tag: "室內門更新",
    offerText: "含安裝 NT$ 700~1,000",
    desc: "適合套房、房間門與辦公室常見門型，安裝快、規格多，現場可直接比對。",
    features: ["常見規格容易更換", "適合室內門更新", "快速安裝"],
    variants: [
      { name: "喇叭鎖", price: "NT$ 700" },
      { name: "水平鎖", price: "NT$ 1,000" },
      { name: "房門浴廁鎖", price: "價格洽詢" },
      { name: "其他特殊房門鎖", price: "價格洽詢" }
    ]
  },
  {
    id: "trad-passage",
    category: "trad-room",
    title: "通道鎖（不反鎖）",
    img: "/S__26214418.jpg",
    tag: "辦公室常見",
    offerText: "價格洽詢",
    desc: "適合辦公室、走道門與不需反鎖的室內門，注重通行便利與耐用度。",
    features: ["適合高頻率通行", "維護簡單", "可搭配常見門型"]
  }
];

export function getTraditionalProductsByCategory(categoryId) {
  return traditionalProducts.filter((product) => product.category === categoryId);
}

export function getTraditionalProductById(id) {
  return traditionalProducts.find((product) => product.id === id);
}

export function getTraditionalCategoryById(id) {
  return traditionalCategories.find((category) => category.id === id);
}
