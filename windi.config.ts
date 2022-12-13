import { defineConfig } from 'windicss/helpers'

// colors
import colors from 'windicss/colors'
import type { Plugin } from 'windicss/types/interfaces'

import defaultTheme from 'windicss/defaultTheme'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
    colors: {
        white: {
          DEFAULT: "#000000",
        },
        black: "#000",
          yellow: {
            DEFAULT: "#FFFCEE",
            50: "#FFF2C2",
            100: "#00000",
            200: "#FFE485",
            300: "#FFE070",
            400: "#FFD333",
            500: "#FFC700",
            600: "#E0B000",
            700: "#A38000",
            800: "#524000",
            900: "#292000",
          },
          orange: {
            DEFAULT: "#FFF8EB",
            50: "#FFF1D6",
            100: "#FFE2AD",
            200: "#FFD485",
            300: "#FFC65C",
            400: "#FFB833",
            500: "#FFA600",
            600: "#E09200",
            700: "#B87700",
            800: "#7A5000",
            900: "#3D2800",
          },
          gray: {
            DEFAULT: "#FFFFFF",
            50: "#DFDFDF",
            100: "#E0E0E0",
            200: "#D6D6D6",
            300: "#C2C2C2",
            400: "#ADADAD",
            500: "#8F8F8F",
            600: "#666666",
            700: "#474747",
            800: "#292929",
            900: "#141414",
          },
          green: {
            100: "#E2FDE9",
            300: "#B6FFCB",
            400: "#13B105",
          },
          red: {
            100: "#FFC7C7",
            300: "#FF3838",
            400: "#C20101",
          },
      },
  }

  export default defineConfig({
    darkMode: 'class',
    attributify: false,
    extract: {
      include: [
        './components/**/*.{vue,js}',
        './composables/**/*.{js,ts}',
        './content/**/*.md',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './utils/**/*.{js,ts}',
        './app.vue',
      ],
    },
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "max-2xl": { max: "1440px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
      },
      extend: {
        colors: {
          primary: MyTheme.colors.green,
          // if want to change primary color to blue
          // primary: MyTheme.colors.blue,
          white: MyTheme.colors.white,
          green: MyTheme.colors.green,
          gray: MyTheme.colors.gray,
        //   blue: MyTheme.colors.blue,
          red: MyTheme.colors.red,
          slate: colors.slate,
        },
        fontFamily: {
          sans: ['OpenSans', ...defaultTheme.fontFamily.sans],
        },
      },
      container: {
        center: true,
        maxWidth: "1360px",
        padding: {
          "DEFAULT": "1rem",
          "lg": "1rem",
          "2xl": "4rem",
        },
      },
    },
    shortcuts: {
      'light-img': 'block dark:hidden',
      'dark-img': 'hidden dark:block',
    },
    plugins: [
      // filters plugin require for navbar blur
      FiltersPlugin as Plugin,
      TypographyPlugin as Plugin,
      AspectRatioPlugin as Plugin,
    ] as Plugin[],
  })