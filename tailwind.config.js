module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#587DDC",
        secondary: "#97AEE9",
        dark: "#14295F",
        accent: "#F06337",
        black: "#333333",
        white: "#f5f5f5",
      },
      fontFamily: {
        heading: ["Montserrat"],
        body: ["Hind"],
      },
      fontSize: {
        xxl: ["2.488rem"],
        xl: ["2.074rem"],
        lg: ["1.44rem"],
        md: ["1.2rem"],
        base: ["1rem"],
        sm: ["0.833rem"],
        xs: ["0.694rem"],
      },
      margin: {
        body: "70px",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('src/images/Background-Hero.jpg')",
        "destination-1": "url('src/images/destination-1.jpg')",
        "destination-2": "url('src/images/destination-2.jpg')",
        "destination-3": "url('src/images/destination-3.jpg')",
        "destination-4": "url('src/images/destination-4.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
