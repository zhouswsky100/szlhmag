module.exports = {
  title: '深圳市人大预算联网监督系统',

  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

   // poxyUrl: 'http://192.168.1.4:8011',
  poxyUrl: 'http://lh.yunbaitu.com/prod-api',
  // poxyUrl: 'http://192.168.1.22:8011',

  // poxyUrl: 'http://192.168.1.9:8011',

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
