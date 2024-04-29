// ProductService.js
import productData from './ProductService.json';

export const ProductService = {
    getProductsSmall: () => Promise.resolve(productData),
};