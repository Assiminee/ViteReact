/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
                '17': 'repeat(17, minmax(0, 1fr))',
                '18': 'repeat(18, minmax(0, 1fr))',
                '19': 'repeat(19, minmax(0, 1fr))',
                '20': 'repeat(20, minmax(0, 1fr))',
                '21': 'repeat(21, minmax(0, 1fr))',
                '22': 'repeat(22, minmax(0, 1fr))',
                '23': 'repeat(23, minmax(0, 1fr))',
                '24': 'repeat(24, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
                '17': 'repeat(17, minmax(0, 1fr))',
                '18': 'repeat(18, minmax(0, 1fr))',
                '19': 'repeat(19, minmax(0, 1fr))',
                '20': 'repeat(20, minmax(0, 1fr))',
                '21': 'repeat(21, minmax(0, 1fr))',
                '22': 'repeat(22, minmax(0, 1fr))',
                '23': 'repeat(23, minmax(0, 1fr))',
                '24': 'repeat(24, minmax(0, 1fr))',
            },
            backgroundImage: {
                'kwiklinDark' : "url(assets/images/kwiklinDark.svg)",
                'kwiklinLight' : "url(assets/images/kwiklinLight.svg)",
            }
        },
    },
  plugins: [],
}

