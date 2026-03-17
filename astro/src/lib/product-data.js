import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const sourcePath = path.resolve(process.cwd(), "./src/lib/legacy-product-data.js");
const source = fs.readFileSync(sourcePath, "utf8");
const sandbox = { window: {} };

vm.runInNewContext(source, sandbox);

export const brands = sandbox.window.ELECTRONIC_BRANDS ?? [];
export const products = sandbox.window.ELECTRONIC_PRODUCTS ?? {};
export const installationExamples = sandbox.window.PRODUCT_INSTALLATION_EXAMPLES ?? {};
export const productEntries = Object.values(products);

export function getBrandById(id) {
  return brands.find((brand) => brand.id === id);
}

export function getElectronicBrandUrl(id) {
  return `/electronic-page/${id}/`;
}

export function getProductsByBrand(id) {
  return productEntries.filter((product) => product.brand === id);
}

export function getInstallationExamplesByProductId(id) {
  return installationExamples[id] ?? [];
}

export function stripHtml(value) {
  return String(value ?? "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getOfferText(product) {
  if (typeof product.offerPrice === "number") {
    return `優惠價 NT$ ${product.offerPrice.toLocaleString()} (含安裝)`;
  }

  return product.offerPrice === "請洽詢" ? "價格請洽詢" : product.offerPrice;
}

export function getMaskedOfferText(product) {
  if (typeof product.offerPrice === "number") {
    let price = product.offerPrice.toLocaleString();
    price = price.length > 3 ? `${price.slice(0, -4)},XXX` : "XXX";
    return `優惠價 NT$ ${price} (含安裝)`;
  }

  return product.offerPrice === "請洽詢" ? "價格請洽詢" : product.offerPrice;
}
