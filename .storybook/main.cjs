module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  //apenas para informar ao storybook que o "/" é parte da url com o nome do repositório
  viteFinal: (config, {configType} ) => {
    if (configType === 'PRODUCTION') {
      //nome do repositório do github se tiver "/" nele
      config.base = '/Ignite-Lab-figma/'
    }
    return config
  } 
}
