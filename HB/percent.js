// 记录账户金额情况

// 日期
var date = [
'21-01-01', '21-01-02', '21-01-03', '21-01-04', '21-01-05', '21-01-06', '21-01-07', '21-01-08', '21-01-09', '21-01-10', '21-01-11', '21-01-12', '21-01-13', '21-01-14', '21-01-15', '21-01-16', '21-01-17', '21-01-18', '21-01-19', '21-01-20', '21-01-21', '21-01-22', '21-01-23', '21-01-24', '21-01-25', '21-01-26', '21-01-27', '21-01-28', '21-01-29', '21-01-30', '21-01-31', 
'21-02-01', '21-02-02', '21-02-03', '21-02-04', '21-02-05', '21-02-06', '21-02-07', '21-02-08', '21-02-09', '21-02-10', '21-02-11', '21-02-12', '21-02-13', '21-02-14', '21-02-15', '21-02-16', '21-02-17', '21-02-18', '21-02-19', '21-02-20', '21-02-21', '21-02-22', '21-02-23', '21-02-24', '21-02-25', '21-02-26', '21-02-27', '21-02-28', '21-02-29', 
'21-03-01', '21-03-02', '21-03-03', '21-03-04', '21-03-05', '21-03-06', '21-03-07', '21-03-08', '21-03-09', '21-03-10', '21-03-11', '21-03-12', '21-03-13', '21-03-14', '21-03-15', '21-03-16', '21-03-17', '21-03-18', '21-03-19', '21-03-20', '21-03-21', '21-03-22', '21-03-23', '21-03-24', '21-03-25', '21-03-26', '21-03-27', '21-03-28', '21-03-29', '21-03-30', '21-03-31', 
'21-04-01', '21-04-02', '21-04-03', '21-04-04', '21-04-05', '21-04-06', '21-04-07', '21-04-08', '21-04-09', '21-04-10', '21-04-11', '21-04-12', '21-04-13', '21-04-14', '21-04-15', '21-04-16', '21-04-17', '21-04-18', '21-04-19', '21-04-20', '21-04-21', '21-04-22', '21-04-23', '21-04-24', '21-04-25', '21-04-26', '21-04-27', '21-04-28', '21-04-29', '21-04-30', 
'21-05-01', '21-05-02', '21-05-03', '21-05-04', '21-05-05', '21-05-06', '21-05-07', '21-05-08', '21-05-09', '21-05-10', '21-05-11', '21-05-12', '21-05-13', '21-05-14', '21-05-15', '21-05-16', '21-05-17', '21-05-18', '21-05-19', '21-05-20', '21-05-21', '21-05-22', '21-05-23', '21-05-24', '21-05-25', '21-05-26', '21-05-27', '21-05-28', '21-05-29', '21-05-30', '21-05-31', 
'21-06-01', '21-06-02', '21-06-03', '21-06-04', '21-06-05', '21-06-06', '21-06-07', '21-06-08', '21-06-09', '21-06-10', '21-06-11', '21-06-12', '21-06-13', '21-06-14', '21-06-15', '21-06-16', '21-06-17', '21-06-18', '21-06-19', '21-06-20', '21-06-21', '21-06-22', '21-06-23', '21-06-24', '21-06-25', '21-06-26', '21-06-27', '21-06-28', '21-06-29', '21-06-30', 
'21-07-01', '21-07-02', '21-07-03', '21-07-04', '21-07-05', '21-07-06', '21-07-07', '21-07-08', '21-07-09', '21-07-10', '21-07-11', '21-07-12', '21-07-13', '21-07-14', '21-07-15', '21-07-16', '21-07-17', '21-07-18', '21-07-19', '21-07-20', '21-07-21', '21-07-22', '21-07-23', '21-07-24', '21-07-25', '21-07-26', '21-07-27', '21-07-28', '21-07-29', '21-07-30', '21-07-31', 
'21-08-01', '21-08-02', '21-08-03', '21-08-04', '21-08-05', '21-08-06', '21-08-07', '21-08-08', '21-08-09', '21-08-10', '21-08-11', '21-08-12', '21-08-13', '21-08-14', '21-08-15', '21-08-16', '21-08-17', '21-08-18', '21-08-19', '21-08-20', '21-08-21', '21-08-22', '21-08-23', '21-08-24', '21-08-25', '21-08-26', '21-08-27', '21-08-28', '21-08-29', '21-08-30', '21-08-31', 
'21-09-01', '21-09-02', '21-09-03', '21-09-04', '21-09-05', '21-09-06', '21-09-07', '21-09-08', '21-09-09', '21-09-10', '21-09-11', '21-09-12', '21-09-13', '21-09-14', '21-09-15', '21-09-16', '21-09-17', '21-09-18', '21-09-19', '21-09-20', '21-09-21', '21-09-22', '21-09-23', '21-09-24', '21-09-25', '21-09-26', '21-09-27', '21-09-28', '21-09-29', '21-09-30', 
'21-10-01', '21-10-02', '21-10-03', '21-10-04', '21-10-05', '21-10-06', '21-10-07', '21-10-08', '21-10-09', '21-10-10', '21-10-11', '21-10-12', '21-10-13', '21-10-14', '21-10-15', '21-10-16', '21-10-17', '21-10-18', '21-10-19', '21-10-20', '21-10-21', '21-10-22', '21-10-23', '21-10-24', '21-10-25', '21-10-26', '21-10-27', '21-10-28', '21-10-29', '21-10-30', '21-10-31', 
'21-11-01', '21-11-02', '21-11-03', '21-11-04', '21-11-05', '21-11-06', '21-11-07', '21-11-08', '21-11-09', '21-11-10', '21-11-11', '21-11-12', '21-11-13', '21-11-14', '21-11-15', '21-11-16', '21-11-17', '21-11-18', '21-11-19', '21-11-20', '21-11-21', '21-11-22', '21-11-23', '21-11-24', '21-11-25', '21-11-26', '21-11-27', '21-11-28', '21-11-29', '21-11-30',
'21-12-01', '21-12-02', '21-12-03', '21-12-04', '21-12-05', '21-12-06', '21-12-07', '21-12-08', '21-12-09', '21-12-10', '21-12-11', '21-12-12', '21-12-13', '21-12-14', '21-12-15', '21-12-16', '21-12-17', '21-12-18', '21-12-19', '21-12-20', '21-12-21', '21-12-22', '21-12-23', '21-12-24', '21-12-25', '21-12-26', '21-12-27', '21-12-28', '21-12-29', '21-12-30', '21-12-31'

];

// 种类
var legend_data = [
'较前日涨/跌'
];

option = {
    title: {
        text: '哔哔'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legend_data,
		// 各类指标在右侧展示
		type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20
    },
	// 图片整体移动
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
		// 折线图和柱形图
        feature: {
        //    dataZoom: {
        //        yAxisIndex: 'none'
        //    },
        //    dataView: {readOnly: false},
        //    magicType: {type: ['line', 'bar']},
            restore: {},
        //    saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value'
    },
	// 底部滚动条
    dataZoom: [{
        type: 'inside',
        start: 40,
        end: 50
    }, {
        start: 40,
        end: 50
    }],
    series: [
		{
            name: '较前日涨/跌',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
			]
        }
    ]
};

