(function () {
    const product = window.ELECTRONIC_PRODUCTS?.[window.PRODUCT_ID];

    if (!product) {
        document.body.innerHTML = '<main style="font-family:Microsoft JhengHei,sans-serif;padding:40px;text-align:center;"><h1>找不到商品頁</h1><p><a href="/">返回首頁</a></p></main>';
        return;
    }

    const brand = window.ELECTRONIC_BRANDS.find(item => item.id === product.brand);
    const lineUrl = 'https://line.me/ti/p/_w85tXo5KV';
    const phoneUrl = 'tel:0903109970';
    const productUrl = `${window.location.origin}/product/${product.id}`;
    const productExamples = window.PRODUCT_INSTALLATION_EXAMPLES?.[product.id] || [];
    const pageTitle = product.pageTitle || brand?.pageTitle || product.title;
    const detailTitle = product.detailTitle || product.title;
    const pageTitleSize = product.pageTitleSize || brand?.pageTitleSize;
    const pageTitleStyle = pageTitleSize ? ` style="font-size:${pageTitleSize};"` : '';
    const plainTitle = (product.plainTitle || detailTitle)
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    function formatPrice() {
        const listPriceHtml = product.listPrice
            ? `<span class="list-price">定價 NT$ ${Number(product.listPrice).toLocaleString()}</span>`
            : '';

        let offerPriceHtml = '';
        if (typeof product.offerPrice === 'number') {
            offerPriceHtml = `優惠價 NT$ ${product.offerPrice.toLocaleString()} (含安裝)`;
        } else if (product.offerPrice === '請洽詢') {
            offerPriceHtml = '價格請洽詢';
        } else {
            offerPriceHtml = product.offerPrice;
        }

        return `${listPriceHtml}<div class="offer-price">${offerPriceHtml}</div>`;
    }

    function renderExamples() {
        const slots = Array.from({ length: 3 }, (_, index) => productExamples[index] || null);

        return slots.map((example, index) => {
            if (!example) {
                return `
                    <div class="gallery-item gallery-item-empty">
                        <div class="gallery-placeholder">安裝實例 ${index + 1}<span>預留放圖位置</span></div>
                    </div>
                `;
            }

            return `
                <div class="gallery-item">
                    <img src="${example.img}" alt="${example.caption}">
                    <div class="gallery-caption">${example.caption}</div>
                </div>
            `;
        }).join('');
    }

    function renderFeatureHighlights() {
        return product.features.map(feature => `<li class="feature-highlight-item">${feature}</li>`).join('');
    }

    function renderHeader() {
        const desktopBrandLinks = window.ELECTRONIC_BRANDS.map(item => (
            `<a href="/electronic-page/#${item.id}">${item.title}</a>`
        )).join('');
        const mobileBrandLinks = window.ELECTRONIC_BRANDS.map(item => (
            `<a class="mobile-submenu-link" href="/electronic-page/#${item.id}">${item.title}</a>`
        )).join('');

        return `
            <header class="site-header">
                <div class="logo" onclick="window.location.href='/'">
                    小李開鎖
                    <span>雙北 24小時 快速救援</span>
                </div>

                <nav class="nav-links">
                    <a href="/">首頁</a>
                    <div class="dropdown">
                        <button class="dropbtn" type="button">
                            電子鎖安裝 <i class="fas fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">${desktopBrandLinks}</div>
                    </div>
                    <a href="/#traditional-page">傳統鎖更換</a>
                    <a href="/#unlock-page">開鎖服務</a>
                    <a href="/#examples-page">安裝實例</a>
                    <a href="/#faq">常見問題</a>
                </nav>

                <div class="header-actions">
                    <a href="${lineUrl}" target="_blank" rel="noopener" class="cta-btn line-btn">
                        <i class="fab fa-line"></i> LINE
                    </a>
                    <a href="${phoneUrl}" class="cta-btn">
                        <i class="fas fa-phone-alt"></i> 立即聯繫
                    </a>
                    <div class="hamburger-icon" onclick="toggleMobileMenu()">
                        <i class="fas fa-bars"></i>
                        <span class="menu-text">選單</span>
                    </div>
                </div>
            </header>

            <div id="mobile-menu" class="mobile-menu-container">
                <a class="mobile-menu-link" href="/">首頁</a>
                <div class="mobile-menu-link" onclick="toggleMobileSubmenu()">
                    電子鎖安裝 <i class="fas fa-caret-down"></i>
                </div>
                <div id="mobile-submenu-list" class="mobile-submenu">${mobileBrandLinks}</div>
                <a class="mobile-menu-link" href="/#traditional-page">傳統鎖更換</a>
                <a class="mobile-menu-link" href="/#unlock-page">開鎖服務</a>
                <a class="mobile-menu-link" href="/#examples-page">安裝實例</a>
                <a class="mobile-menu-link" href="/#faq">常見問題</a>
            </div>
        `;
    }

    document.body.innerHTML = `
        ${renderHeader()}
        <main class="page-shell">
            <div class="page-header">
                <a class="back-link" href="/electronic-page/#${product.brand}">🔙 返回${brand ? brand.title : '電子鎖列表'}</a>
                <h1 class="page-title"${pageTitleStyle}>${pageTitle}</h1>
                <p>${product.tag} | 含安裝、教學與LINE諮詢</p>
            </div>

            <section class="detail-container">
                <div class="detail-header">
                    <div class="detail-img-box">
                        <img src="${product.img}" alt="${plainTitle}">
                    </div>
                    <div class="detail-info">
                        <div class="detail-title">${detailTitle}</div>
                        <div class="detail-price-box">${formatPrice()}</div>
                        <div class="detail-desc">${product.desc}</div>
                        <div class="detail-feature-box">
                            <div class="section-kicker">PRODUCT HIGHLIGHTS</div>
                            <h2>產品重點</h2>
                            <ul class="feature-highlight-list">
                                ${renderFeatureHighlights()}
                            </ul>
                        </div>
                        <div class="group-buy-box">
                            <div class="group-buy-title">🔥 社區團購優惠(請先加LINE洽詢)</div>
                            <div class="group-buy-item">滿 5 台每台最多折 <span style="color:#d35400;font-weight:bold;">500</span> 元</div>
                            <div class="group-buy-item">滿 10 台每台最多折 <span style="color:#d35400;font-weight:bold;">1000</span> 元</div>
                        </div>
                        <div class="detail-actions">
                            <a href="${lineUrl}" target="_blank" rel="noopener" class="btn-line-ask">
                                <i class="fab fa-line"></i> 加LINE詢問優惠價
                            </a>
                            <button type="button" class="btn-share" onclick="shareProductPage()">
                                <i class="fas fa-share-alt"></i> 分享給好友
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="examples-panel">
                <div class="section-kicker">INSTALLATION CASES</div>
                <h2>安裝實例</h2>
                <div class="gallery-grid">
                    ${renderExamples()}
                </div>
                <div class="examples-actions">
                    <a class="example-link" href="/#examples-page">查看更多安裝實例</a>
                </div>
            </section>
        </main>
    `;

    window.toggleMobileMenu = function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('active');
    };

    window.toggleMobileSubmenu = function toggleMobileSubmenu() {
        const submenu = document.getElementById('mobile-submenu-list');
        if (submenu) submenu.classList.toggle('active');
    };

    window.shareProductPage = async function shareProductPage() {
        if (navigator.share) {
            try {
                await navigator.share({ title: plainTitle, text: plainTitle, url: productUrl });
                return;
            } catch (error) {
                if (error && error.name === 'AbortError') return;
            }
        }

        try {
            await navigator.clipboard.writeText(productUrl);
            alert('已複製商品網址，現在可以直接貼給好友。');
        } catch (error) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(`${plainTitle}\n${productUrl}`)}`, '_blank');
        }
    };
})();
