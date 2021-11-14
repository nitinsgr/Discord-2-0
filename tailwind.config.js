module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_bpurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
      }
    },
  },
  variants: {},
  plugins: [],
};
