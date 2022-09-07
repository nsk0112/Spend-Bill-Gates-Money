import { configureStore } from "@reduxjs/toolkit";
import spendSlice from "./spendSlice";

export const store = configureStore({
    reducer: {
        spend: spendSlice,
    },
});