module.exports = {
  refs: {
    "chakra-ui": {
      title: "Chakra UI",
      url: "https://storybook.chakra-ui.com/",
    },
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@snek-at/storybook-addon-chakra-ui",
  ],
};
