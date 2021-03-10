const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginGhost = require("eleventy-plugin-ghost");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const sass = require("sass");
const fs = require("fs-extra");

require("dotenv").config();
const { GHOST_URL, GHOST_KEY } = process.env;

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginGhost, {
    url: GHOST_URL,
    key: GHOST_KEY,
    version: "v3",
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("src/scss/");

  eleventyConfig.on("beforeBuild", () => {
    let result = sass.renderSync({
      file: "src/scss/styles.scss",
      sourceMap: false,
      outputStyle: "compressed",
    });
    fs.ensureDirSync("dist/css/");
    fs.writeFile("dist/css/styles.css", result.css, (err) => {
      if (err) throw err;
      console.log("CSS generated");
    });
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
