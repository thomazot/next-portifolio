module.exports = {
  stories: ['../src/common/**/*stories.tsx', '../src/forms/**/*stories.tsx', '../src/components/**/*stories.tsx', '../src/templates/**/*stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-postcss', 'storybook-addon-next-router', 'storybook-addon-apollo-client'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  staticDirs: ['../public']
}