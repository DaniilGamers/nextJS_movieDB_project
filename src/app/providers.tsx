'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
            {children}
        </ThemeProvider>
    );
}