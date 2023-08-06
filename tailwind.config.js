'use strict';

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: { sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans] },
        extend: {
            height: { 200: '50rem', ...defaultTheme.height },
            screens: {
                '3xl': '1792px',
                '4xl': '2048px',
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                352: '88rem',
                384: '96rem',
            },
            colors: {
                colors,
                blue: { 'dark-contrast': '#302d2f' },
                midnight: { DEFAULT: 'hsl(218, 42%, 10%)' },
                discord: {
                    DEFAULT: 'hsl(235,86%,65%)',
                    dark: 'hsl(235,60%,54%)',
                },
            },
            zIndex: { '-10': '-10' },
            typography: {
                '2xl': {
                    css: {
                        'maxWidth': '73ch',
                        'h1, h2, h3, h4, h5, h6': { fontWeight: 'bold', color: 'hsl(0,0%,9%)', marginBottom: '1.2rem' },
                        'h1': { fontSize: '4rem' },
                        'h2': { fontSize: '3rem' },
                        'h3': { fontSize: '2rem' },
                        'p': { color: 'hsl(0,0%,20%)' },
                        'a': { color: 'hsl(192,80%,40%)' },
                        'iframe': { width: '100%', height: '60vh' },
                    },
                },
            },
        },
    },
    plugins: [
        //require('@flybywiresim/tailwind-config'),
        {
            config: {
                theme: {
                    extend: {
                        // Extend heights
                        height: () => ({
                            120: '30rem',
                            144: '36rem',
                            160: '40rem',
                            map: '40.3rem',
                        }),
                        // Extend screen sizes
                        screens: {
                            'xs': '475px'
                        },
                        // Add color classes to the 'active' state
                        backgroundColor: ['active'],
                        textColor: ['active'],
                        // Animations
                        keyframes: {
                            wiggle: {
                                '0%, 100%': { transform: 'rotate(-1deg)' },
                                '50%': { transform: 'rotate(2.5deg)' },
                            },
                        },
                        animation: {
                            wiggle: 'wiggle 15s ease-in-out infinite',
                        },
                        // Color Extension
                        colors: {
                            teal: {
                                'DEFAULT': '#d16162',
                                'regular': '#00c2cc',
                                // deprecated
                                'light': '#d16162',
                                'regular-contrast': '#00afb7',
                                // deprecated
                                'light-contrast': '#d16162',
                                'medium': '#009ba2',
                                'medium-contrast': '#00888e',
                                'dark': '#00747a',
                                'dark-contrast': '#006166',
                                'darker': '#004e51',
                                'darker-contrast': '#003a3d',
                                'darkest': '#002729',
                                'darkest-contrast': '#001314',
                                '50': '#c2cbcc',
                                '100': '#b8cbcc',
                                '200': '#a3cacc',
                                '300': '#8fc9cc',
                                '400': '#7ac8cc',
                                '500': '#66c7cc',
                                '600': '#52c6cc',
                                '700': '#3dc5cc',
                                '800': '#29c4cc',
                                '900': '#14c3cc',
                            },
                            navy: {
                                'DEFAULT': '#1b2434',
                                'lightest': '#273347',
                                'lighter': '#222c3d',
                                'regular': '#1b2434',
                                // deprecated
                                'light': '#1b2434',
                                'regular-contrast': '#18202f',
                                // deprecated
                                'light-contrast': '#18202f',
                                'medium': '#161d2a',
                                'medium-contrast': '#131924',
                                'dark': '#10161f',
                                'dark-contrast': '#0e121a',
                                '50': '#303133',
                                '100': '#2e3033',
                                '200': '#292d33',
                                '300': '#242933',
                                '400': '#1f2633',
                                '500': '#1a2233',
                            },
                            // Legacy, prefer above colors
                            blue: {
                                'DEFAULT': '#d6a1c0',
                                'light': '#a35a84',
                                'light-contrast': '#d16162',
                                'medium': '#006166',
                                'dark': '#403b3e',
                                'darker': '#3d383b',
                                '100': '#d6a1c0',
                                '200': '#d6a1c0',
                            },
                            grey: {
                                'light': '#D4DADC'
                            }
                        },
                        boxShadow: {
                            'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                            'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                            'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                            '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
                        },
                    },
                },
                variants: {
                    extend: {
                        // Add opacity classes to the 'disabled' state
                        opacity: ['disabled'],
                    }
                },
            },
            handler: function() {} },
        require('@tailwindcss/typography'),
    ],
};
