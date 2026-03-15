(function () {
    const brands = window.ELECTRONIC_BRANDS || [];
    const products = window.ELECTRONIC_PRODUCTS || {};

    function stripHtml(value) {
        return String(value || '')
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getBrandHashValue(hash = window.location.hash) {
        const normalized = hash.replace(/^#/, '');
        if (!normalized) return null;

        if (brands.some(item => item.id === normalized)) {
            return normalized;
        }

        const match = normalized.match(/^electronic-page\/([a-z0-9-]+)$/i);
        if (!match) return null;

        return brands.some(item => item.id === match[1]) ? match[1] : null;
    }

    function getProductUrl(productId) {
        return `/product/${productId}`;
    }

    function getMaskedPrice(product) {
        if (typeof product.offerPrice === 'number') {
            let priceStr = product.offerPrice.toLocaleString();
            priceStr = priceStr.length > 3 ? `${priceStr.slice(0, -4)},XXX` : 'XXX';
            return `優惠價 NT$ ${priceStr} (含安裝)`;
        }

        return product.offerPrice === '請洽詢' ? '價格請洽詢' : product.offerPrice;
    }

    function renderBrandMenus() {
        const desktopContainer = document.getElementById('desktop-brand-links');
        const mobileContainer = document.getElementById('mobile-brand-links');

        const desktopLinks = brands.map(item => (
            `<a href="/electronic-page/#${item.id}">${item.title}</a>`
        )).join('');

        const mobileLinks = brands.map(item => (
            `<a class="mobile-submenu-link" href="/electronic-page/#${item.id}" onclick="toggleMobileMenu()">${item.title}</a>`
        )).join('');

        desktopContainer.innerHTML = desktopLinks;
        mobileContainer.innerHTML = `${mobileLinks}<a class="mobile-submenu-link" href="/electronic-page/" onclick="toggleMobileMenu()" style="color:var(--primary-yellow)">查看全部款式</a>`;
    }

    function renderElectronicList() {
        const container = document.getElementById('electronic-list');
        container.innerHTML = '';

        brands.forEach(brand => {
            const brandProducts = Object.values(products).filter(product => product.brand === brand.id);

            const header = document.createElement('div');
            header.className = 'category-header';
            header.id = `${brand.id}-section`;
            header.innerHTML = `<div class="brand-divider"></div><div class="brand-section-title">${brand.title}</div>`;
            container.appendChild(header);

            const grid = document.createElement('div');
            grid.className = 'product-grid';

            if (brandProducts.length === 0) {
                grid.innerHTML = '<p style="width:100%;text-align:center;color:#999;">即將上架</p>';
                container.appendChild(grid);
                return;
            }

            brandProducts.forEach(product => {
                const card = document.createElement('a');
                card.className = 'product-card';
                card.href = getProductUrl(product.id);

                const plainTitle = stripHtml(product.plainTitle || product.title);
                const displayTitle = product.listTitle || product.detailTitle || product.title;
                const priceText = getMaskedPrice(product);

                card.innerHTML = `
                    <div class="product-img-container">
                        <span class="brand-tag">${product.tag}</span>
                        <img src="${product.img}" class="real-img" alt="${plainTitle}">
                    </div>
                    <div class="product-body">
                        <div class="product-title">${displayTitle}</div>
                        <ul class="product-features">${product.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}</ul>
                        <div class="product-price">${priceText}</div>
                        <div class="view-more-text">查看詳細規格與優惠 →</div>
                    </div>
                `;

                grid.appendChild(card);
            });

            container.appendChild(grid);
        });
    }

    function scrollToBrandFromHash(behavior = 'smooth') {
        const brandId = getBrandHashValue();
        if (!brandId) return;

        const section = document.getElementById(`${brandId}-section`);
        if (!section) return;

        const headerOffset = 88;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior
        });
    }

    window.toggleMobileMenu = function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;

        menu.classList.toggle('active');

        if (!menu.classList.contains('active')) {
            const submenu = document.getElementById('mobile-brand-links');
            if (submenu) submenu.classList.remove('active');
        }
    };

    window.toggleMobileSubmenu = function toggleMobileSubmenu() {
        const submenu = document.getElementById('mobile-brand-links');
        if (submenu) submenu.classList.toggle('active');
    };

    window.addEventListener('hashchange', () => {
        scrollToBrandFromHash('smooth');
    });

    renderBrandMenus();
    renderElectronicList();

    window.setTimeout(() => {
        scrollToBrandFromHash('auto');
    }, 0);
})();
