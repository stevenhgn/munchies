import React from "react";

// TODO: default is dark theme, refactor to correct theme name
const themes = {
  light: {
    spacing: 4,
    palette: {
      primary: "black",
      secondary: "#E53935",
      third: "#ff634d",
      logo: "#FFA000",
      subLogo: "#FFD951",
      money: "#F2994A",
      inputColor: "#42A5F5",
      interaction: "#FFE898",
      priceRange: "#ffaaaa",
      backgroundColor: "#333333",
      // cardBackgroundColor: "white",
      cardBackgroundColor: "#F5f5f5",
      h3: "white",
    },
  },
  dark: {
    spacing: 4,
    palette: {
      primary: "white",
      secondary: "white",
      third: "white",
      priceRange: "darkgray",
      interaction: "#1F1A24",
      // backgroundColor_two: "#081B33",
      money: "#27AE60",

      //https://material.io/design/color/dark-theme.html#properties
      backgroundColor: "#1F1A24", // Material reccommended dark theme surface color
      // #333
      // backgroundColor: "#332940", //2.versjon
      cardBackgroundColor: "#121212", // Material reccommended dark theme surface color
    },
  },
};
export default themes;
