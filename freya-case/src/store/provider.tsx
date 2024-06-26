'use client'

/** dependencies */
import {Provider} from "react-redux";
import {store} from "@/store/store";
import React from "react";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}