'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
}).
  controller('ChecklistCtrl', function ($scope, socket) {
  function createTodo(text) {
    return {
      'text': text,
      'status': false
    };
  }

  function createTodoList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      var item = createTodo(list[i]);
      result.push(item);
    };
    return result;
  }

  var tasks = [
    [
    '购买机票',
    '预定酒店',
    '驾照／身份证',
    '个人证件照电子版',
    '购买旅游保险',
    '保险单扫描件',
    '重要文件备份（扫描件／拍照）',
    '兑换目的地现金',
    '请假（孩子及其兴趣班）',
    '手机安装旅行相关APP'
  ],
  [
    '拉杆箱',
    '双肩背包（配行李牌）',
    '贴身小包／钱包',
    '衣物',
    '洗护用品',
    '电子设备',
    '摄影设备',
    '泳装',
    '内衣裤',
    '袜子',
    '保暖帽',
    '遮阳帽',
    '魔术头巾',
    '太阳眼镜／备用眼镜',
    '拖鞋',
    '休闲鞋',
    '外套',
    '毛衣',
    'T恤',
    '短裤',
    '速干裤',
    '牛仔裤／裙子',
    '毛巾',
    '剃须刀／女性去毛刀',
    '牙膏牙刷',
    '沐浴液',
    '洗发水',
    '洗面奶',
    '梳子',
    '防晒霜',
    '面膜',
    '爽肤水',
    '乳液／面霜',
    '隐形眼镜护理液和眼镜盒',
    '润唇膏',
    '防蚊驱虫水',
    'U盘内含重要文件备份／中文输入法',
    'GPS',
    '电池',
    '笔记本电脑／平板',
    '耳机',
    'MP3／MP4',
    '各类充电器',
    '手机',
    '相机／镜头',
    '读卡器／存储卡',
    '相机包',
    '三脚架',
    '滤镜',
    '望眼镜',
    '水杯／水壶',
    '正在阅读的书籍',
    '小笔记本和笔',
    '干／湿纸巾／卫生巾',
    '雨伞／雨衣',
    '指甲刀',
    '充气枕／眼罩',
    '扑克牌',
    '小礼品',
    '避孕套',
    '小镜子',
    '紧急联系信息',
    '身份证',
    '设置工作电子邮件自动回复',
    '结算必要的帐单（充电卡／水卡／煤气卡）',
    '托管自己的宠物、植物',
    '告诉家人或者熟悉的朋友自己的行程',
    '装好个人常用药（创可贴）',
    '准备好现金和信用卡／银行卡',
    '准备随身携带文件',
    '其他用品',
    '打包行李'
  ],
  [
    '关好门窗',
    '倒垃圾',
    '收好家里的贵重物品',
    '拔掉家用电器插头',
    '手机设置目的地时区'
  ]
  ];

  var listNames = ['出行前准备', '出行前三天', '出行前一刻'];
  var taskLists = [];
  for (var i=0; i < tasks.length; ++i) {
    var taskList = {
      'id': 'list' + i,
      'name': listNames[i],
      'data': createTodoList(tasks[i])
    };
    taskLists.push(taskList);
  }
  $scope.taskLists = taskLists;

}).
  controller('AboutCtrl', function ($scope) {
});
