// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Bookkeeping-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() //包含icons目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    // extract:false 不把文件解析出来
    // svgo-loader  去除svg的fill
    // .use('svgo-loader').loader('svgo-loader')
    // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
    //其他svg loader 排除icons目录

  }
}
