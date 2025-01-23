const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './src/app.html',
        "./src/**/*.{html,js,svelte,ts}",
        // "node_modules/@frostui/tailwindcss/dist/*.js",
        'node_modules/preline/preline.js',
    ],
    darkMode: 'class',
    theme: {

        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '1rem',
                xl: '3rem',
                '2xl': '13rem',
            },
        },

        fontFamily: {
            'body': ['Be Vietnam Pro', 'sans-serif'],
        },

        extend: {
            colors: {
                'primary': colors.blue[600],
            },
        },
    },

    plugins: [
        // require('@frostui/tailwindcss/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('preline/plugin'),
    ],
}
