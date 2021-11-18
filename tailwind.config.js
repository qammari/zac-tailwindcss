const defaultTheme = require('tailwindcss/defaultTheme');
const tokens = require('./tokens.json');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        colors: {
            black: 'var(--colors-black)',
            white: 'var(--colors-white)',
            gray: {
                100: 'var(--colors-gray-100)',
                200: 'var(--colors-gray-200)',
                300: 'var(--colors-gray-300)',
                400: 'var(--colors-gray-400)',
                500: 'var(--colors-gray-500)',
                600: 'var(--colors-gray-600)',
                700: 'var(--colors-gray-700)',
                800: 'var(--colors-gray-800)',
                900: 'var(--colors-gray-900)',
                1000: 'var(--colors-gray-1000)',
            },
            blue: {
                100: 'var(--colors-blue-100)',
                200: 'var(--colors-blue-200)',
                300: 'var(--colors-blue-300)',
                400: 'var(--colors-blue-400)',
                500: 'var(--colors-blue-500)',
                600: 'var(--colors-blue-600)',
                700: 'var(--colors-blue-700)',
                800: 'var(--colors-blue-800)',
                900: 'var(--colors-blue-900)',
                1000: 'var(--colors-blue-1000)',
            },
            teal: {
                100: 'var(--colors-teal-100)',
                200: 'var(--colors-teal-200)',
                300: 'var(--colors-teal-300)',
                400: 'var(--colors-teal-400)',
                500: 'var(--colors-teal-500)',
                600: 'var(--colors-teal-600)',
                700: 'var(--colors-teal-700)',
                800: 'var(--colors-teal-800)',
                900: 'var(--colors-teal-900)',
                1000: 'var(--colors-teal-1000)',
            },
            green: {
                100: 'var(--colors-green-100)',
                200: 'var(--colors-green-200)',
                300: 'var(--colors-green-300)',
                400: 'var(--colors-green-400)',
                500: 'var(--colors-green-500)',
                600: 'var(--colors-green-600)',
                700: 'var(--colors-green-700)',
                800: 'var(--colors-green-800)',
                900: 'var(--colors-green-900)',
                1000: 'var(--colors-green-1000)',
            },
            yellow: {
                100: 'var(--colors-yellow-100)',
                200: 'var(--colors-yellow-200)',
                300: 'var(--colors-yellow-300)',
                400: 'var(--colors-yellow-400)',
                500: 'var(--colors-yellow-500)',
                600: 'var(--colors-yellow-600)',
                700: 'var(--colors-yellow-700)',
                800: 'var(--colors-yellow-800)',
                900: 'var(--colors-yellow-900)',
                1000: 'var(--colors-yellow-1000)',
            },
            orange: {
                100: 'var(--colors-orange-100)',
                200: 'var(--colors-orange-200)',
                300: 'var(--colors-orange-300)',
                400: 'var(--colors-orange-400)',
                500: 'var(--colors-orange-500)',
                600: 'var(--colors-orange-600)',
                700: 'var(--colors-orange-700)',
                800: 'var(--colors-orange-800)',
                900: 'var(--colors-orange-900)',
                1000: 'var(--colors-orange-1000)',
            },
            red: {
                100: 'var(--colors-red-100)',
                200: 'var(--colors-red-200)',
                300: 'var(--colors-red-300)',
                400: 'var(--colors-red-400)',
                500: 'var(--colors-red-500)',
                600: 'var(--colors-red-600)',
                700: 'var(--colors-red-700)',
                800: 'var(--colors-red-800)',
                900: 'var(--colors-red-900)',
                1000: 'var(--colors-red-1000)',
            },
            purple: {
                100: 'var(--colors-purple-100)',
                200: 'var(--colors-purple-200)',
                300: 'var(--colors-purple-300)',
                400: 'var(--colors-purple-400)',
                500: 'var(--colors-purple-500)',
                600: 'var(--colors-purple-600)',
                700: 'var(--colors-purple-700)',
                800: 'var(--colors-purple-800)',
                900: 'var(--colors-purple-900)',
                1000: 'var(--colors-purple-1000)',
            },
            positive: {
                absolute: 'var(--theme-positive-absolute)',
                primary: 'var(--theme-positive-primary)',
                secondary: 'var(--theme-positive-secondary)',
                tertiary: 'var(--theme-positive-tertiary)',
                quaternary: 'var(--theme-positive-quaternary)',
                background: 'var(--theme-positive-background)',
            },
            negative: {
                absolute: 'var(--theme-negative-absolute)',
                primary: 'var(--theme-negative-primary)',
                secondary: 'var(--theme-negative-secondary)',
                tertiary: 'var(--theme-negative-tertiary)',
                quaternary: 'var(--theme-negative-quaternary)',
                background: 'var(--theme-negative-background)',
            },
            accent: {
                primary: 'var(--theme-accent-primary)',
                hover: 'var(--theme-accent-hover)',
                pressed: 'var(--theme-accent-pressed)',
                'opacity-50': 'var(--theme-accent-opacity-50)',
                'opacity-30': 'var(--theme-accent-opacity-30)',
                'opacity-10': 'var(--theme-accent-opacity-10)',
            },
            support: {
                info: 'var(--theme-support-info)',
                success: 'var(--theme-support-success)',
                warning: 'var(--theme-support-warning)',
                danger: 'var(--theme-support-danger)',
            },
        },
        spacing: () => {
            const jsonSpacing = tokens.global.spacing;
            const spacingKeys = Object.keys(tokens.global.spacing);
            const obj = {};

            spacingKeys.forEach((spacing) => {
                return (obj[`${spacing}`] = `var(--spacing-${spacing})`);
            });

            return obj;
        },
        fontWeight: () => {
            const jsonFontWeights = tokens.global.fontWeights;
            const fontWeightsKeys = Object.keys(tokens.global.fontWeights);
            const obj = {};

            fontWeightsKeys.forEach((fontWeight) => {
                return (obj[
                    `${fontWeight}`
                ] = `var(--font-weights-${fontWeight})`);
            });

            return obj;
        },
        fontSize: () => {
            const jsonFontSizes = tokens.global.fontSizes;
            const fontSizesKeys = Object.keys(tokens.global.fontSizes);
            const obj = {};

            fontSizesKeys.forEach((fontSize) => {
                return (obj[`${fontSize}`] = `var(--font-sizes-${fontSize})`);
            });

            return obj;
        },
        lineHeight: () => {
            const jsonLineHeights = tokens.global.lineHeights;
            const lineHeightKeys = Object.keys(tokens.global.lineHeights);
            const obj = {};

            lineHeightKeys.forEach((lineHeight) => {
                return (obj[
                    `${lineHeight}`
                ] = `var(--line-heights-${lineHeight})`);
            });

            return obj;
        },
        letterSpacing: () => {
            const jsonLetterSpacing = tokens.global.letterSpacing;
            const letterSpacingKeys = Object.keys(tokens.global.letterSpacing);
            const obj = {};

            letterSpacingKeys.forEach((letterSpacing) => {
                return (obj[
                    `${letterSpacing}`
                ] = `var(--letter-spacing-${letterSpacing})`);
            });

            return obj;
        },
        borderRadius: () => {
            const jsonBorderRadius = tokens.global.borderRadius;
            const borderRadiusKeys = Object.keys(tokens.global.borderRadius);
            const obj = {};

            borderRadiusKeys.forEach((borderRadius) => {
                return (obj[
                    `${borderRadius}`
                ] = `var(--border-radius-${borderRadius})`);
            });

            return obj;
        },
        extend: {
            fontFamily: {
                sans: [
                    `"${tokens.global.fontFamilies.sans.value}"`,
                    ...defaultTheme.fontFamily.sans
                ],
                mono: [
                    `"${tokens.global.fontFamilies.mono.value}"`,
                    ...defaultTheme.fontFamily.mono
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
