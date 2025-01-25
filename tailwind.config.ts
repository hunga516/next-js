import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'default-layout-header': '60px',
      },
      width: {
        'default-layout-width': '1150px'
      },
      padding: {
        '4': '1rem', // 16px
        // Các giá trị khác
      },
      backgroundColor: {
        "primary": "#fe2c55",
        "bluePrimary:": "#007FFF"
      },
      textColor: {
        "bluePrimary": "#007FFF"
      },
      boxShadow: {
        'curve-bl': '-10px 10px 0 #fff',
        'curve-tl': '-10px 10px 0 #fff',
        'curve-br': '10px 10px 0 #fff',
        'curve-bl-4px': '-4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
}
export default config