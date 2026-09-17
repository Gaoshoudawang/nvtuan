// ============================================
// 模拟器配置文件
// 修改这里的配置即可改变模拟器中的各种名称、路径、颜色和文字
// ============================================

var SIMULATOR_CONFIG = {
  // ===== 基本信息 =====
  title: 'HeartShot夺宝抽奖模拟器',
  loadingLogo: 'HeartShot夺宝',
  
  // ===== 抽奖币（购买获得）=====
  gachaCoin: {
    name: 'HeartShot抽奖币',
    quality: 'gold',
  },
  
  // ===== 兑换币（分解获得）=====
  exchangeCoin: {
    name: 'HeartShot兑换币',
    smallImage: '../images/items_box/HeartShot兑换币18/small.png',
    bonusImage: '../images/items_box/HeartShot兑换币18/small.png',
    quality: 'purple',
  },
  
  // ===== 主题颜色（粉红色主题）=====
  theme: {
    primaryColor: '#e84393',
    primaryColorRgb: '232,67,147',
    primaryColorLight: '#fd79a8',
    accentColor: '#ff7675',
  },
  
  // ===== 操作指南 =====
  guide: {
    title: 'HeartShot夺宝操作指南',
    steps: [
      '1. 手机开启自动旋转，点击右上角全屏按钮横屏使用。',
      '2. 首页有"抽奖1次"和"抽奖10次"两个按钮，点击进行抽奖。',
      '3. 抽奖道具直接发放到仓库；仓库在主页左上角返回键。',
      '4. 奖励一览可查看可抽取道具及概率。',
      '5. 兑换商城可消耗积分兑换道具。',
      '6. 已加入BGM和音效，右侧可调节BGM音量。',
    ],
  },
  
  // ===== 免责声明 =====
  disclaimer: '⚠️ 免责声明：本模拟器由玩家个人自制，完全免费，不得用于任何商业用途。各内容名称及形象归腾讯所有，不涉及任何真实充值或道具发放，如有侵权请联系QQ：3894801136删除。',
};
