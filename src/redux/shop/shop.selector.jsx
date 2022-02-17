import { createSelector } from "reselect";

const selectShop =state => state.shop;

export const selectData= createSelector(
    [selectShop], shop=> shop.shopData
)