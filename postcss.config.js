
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  // connect plugins to PostCSS
  plugins: [
    // connect autoprefixer
    autoprefixer,
    
    cssnano({ preset: "default" }) //
  ]
};