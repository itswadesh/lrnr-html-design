/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    variants: {
      // ...
      transitionDelay: ["responsive"],
      transitionDelay: ["responsive", "hover", "focus"]
    },
    extend: {
      backgroundImage: theme => ({
        "modal-success": "url('/success-bg.svg')"
        //  'modal-failure': "url('/img/footer-texture.png')",
      }),
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem"
      }
    }
  },
  variants: {},
  plugins: []
};
