// 日期
var date = [
'01-00:10', '01-06:00', '01-09:00', '01-12:00', '01-15:00', '01-18:00', '01-21:00', '01-23:55',
'02-00:10', '02-06:00', '02-09:00', '02-12:00', '02-15:00', '02-18:00', '02-21:00', '02-23:55',
'03-00:10', '03-06:00', '03-09:00', '03-12:00', '03-15:00', '03-18:00', '03-21:00', '03-23:55',
'04-00:10', '04-06:00', '04-09:00', '04-12:00', '04-15:00', '04-18:00', '04-21:00', '04-23:55',
'05-00:10', '05-06:00', '05-09:00', '05-12:00', '05-15:00', '05-18:00', '05-21:00', '05-23:55',
'06-00:10', '06-06:00', '06-09:00', '06-12:00', '06-15:00', '06-18:00', '06-21:00', '06-23:55',
'07-00:10', '07-06:00', '07-09:00', '07-12:00', '07-15:00', '07-18:00', '07-21:00', '07-23:55',
'08-00:10', '08-06:00', '08-09:00', '08-12:00', '08-15:00', '08-18:00', '08-21:00', '08-23:55',
'09-00:10', '09-06:00', '09-09:00', '09-12:00', '09-15:00', '09-18:00', '09-21:00', '09-23:55',
'10-00:10', '10-06:00', '10-09:00', '10-12:00', '10-15:00', '10-18:00', '10-21:00', '10-23:55',
'11-00:10', '11-06:00', '11-09:00', '11-12:00', '11-15:00', '11-18:00', '11-21:00', '11-23:55',
'12-00:10', '12-06:00', '12-09:00', '12-12:00', '12-15:00', '12-18:00', '12-21:00', '12-23:55',
'13-00:10', '13-06:00', '13-09:00', '13-12:00', '13-15:00', '13-18:00', '13-21:00', '13-23:55',
'14-00:10', '14-06:00', '14-09:00', '14-12:00', '14-15:00', '14-18:00', '14-21:00', '14-23:55',
'15-00:10', '15-06:00', '15-09:00', '15-12:00', '15-15:00', '15-18:00', '15-21:00', '15-23:55',
'16-00:10', '16-06:00', '16-09:00', '16-12:00', '16-15:00', '16-18:00', '16-21:00', '16-23:55',
'17-00:10', '17-06:00', '17-09:00', '17-12:00', '17-15:00', '17-18:00', '17-21:00', '17-23:55',
'18-00:10', '18-06:00', '18-09:00', '18-12:00', '18-15:00', '18-18:00', '18-21:00', '18-23:55',
'19-00:10', '19-06:00', '19-09:00', '19-12:00', '19-15:00', '19-18:00', '19-21:00', '19-23:55',
'20-00:10', '20-06:00', '20-09:00', '20-12:00', '20-15:00', '20-18:00', '20-21:00', '20-23:55',
'21-00:10', '21-06:00', '21-09:00', '21-12:00', '21-15:00', '21-18:00', '21-21:00', '21-23:55',
'22-00:10', '22-06:00', '22-09:00', '22-12:00', '22-15:00', '22-18:00', '22-21:00', '22-23:55',
'23-00:10', '23-06:00', '23-09:00', '23-12:00', '23-15:00', '23-18:00', '23-21:00', '23-23:55',
'24-00:10', '24-06:00', '24-09:00', '24-12:00', '24-15:00', '24-18:00', '24-21:00', '24-23:55',
'25-00:10', '25-06:00', '25-09:00', '25-12:00', '25-15:00', '25-18:00', '25-21:00', '25-23:55',
'26-00:10', '26-06:00', '26-09:00', '26-12:00', '26-15:00', '26-18:00', '26-21:00', '26-23:55',
'27-00:10', '27-06:00', '27-09:00', '27-12:00', '27-15:00', '27-18:00', '27-21:00', '27-23:55',
'28-00:10', '28-06:00', '28-09:00', '28-12:00', '28-15:00', '28-18:00', '28-21:00', '28-23:55',
'29-00:10', '29-06:00', '29-09:00', '29-12:00', '29-15:00', '29-18:00', '29-21:00', '29-23:55',
'30-00:10', '30-06:00', '30-09:00', '30-12:00', '30-15:00', '30-18:00', '30-21:00', '30-23:55',
'31-00:10', '31-06:00', '31-09:00', '31-12:00', '31-15:00', '31-18:00', '31-21:00', '31-23:55',
'01-00:10', '01-06:00', '01-09:00', '01-12:00', '01-15:00', '01-18:00', '01-21:00', '01-23:55',
'02-00:10', '02-06:00', '02-09:00', '02-12:00', '02-15:00', '02-18:00', '02-21:00', '02-23:55',
'03-00:10', '03-06:00', '03-09:00', '03-12:00', '03-15:00', '03-18:00', '03-21:00', '03-23:55',
'04-00:10', '04-06:00', '04-09:00', '04-12:00', '04-15:00', '04-18:00', '04-21:00', '04-23:55',
'05-00:10', '05-06:00', '05-09:00', '05-12:00', '05-15:00', '05-18:00', '05-21:00', '05-23:55',
'06-00:10', '06-06:00', '06-09:00', '06-12:00', '06-15:00', '06-18:00', '06-21:00', '06-23:55',
'07-00:10', '07-06:00', '07-09:00', '07-12:00', '07-15:00', '07-18:00', '07-21:00', '07-23:55',
'08-00:10', '08-06:00', '08-09:00', '08-12:00', '08-15:00', '08-18:00', '08-21:00', '08-23:55',
'09-00:10', '09-06:00', '09-09:00', '09-12:00', '09-15:00', '09-18:00', '09-21:00', '09-23:55',
'10-00:10', '10-06:00', '10-09:00', '10-12:00', '10-15:00', '10-18:00', '10-21:00', '10-23:55',
'11-00:10', '11-06:00', '11-09:00', '11-12:00', '11-15:00', '11-18:00', '11-21:00', '11-23:55',
'12-00:10', '12-06:00', '12-09:00', '12-12:00', '12-15:00', '12-18:00', '12-21:00', '12-23:55',
'13-00:10', '13-06:00', '13-09:00', '13-12:00', '13-15:00', '13-18:00', '13-21:00', '13-23:55',
'14-00:10', '14-06:00', '14-09:00', '14-12:00', '14-15:00', '14-18:00', '14-21:00', '14-23:55',
'15-00:10', '15-06:00', '15-09:00', '15-12:00', '15-15:00', '15-18:00', '15-21:00', '15-23:55',
'16-00:10', '16-06:00', '16-09:00', '16-12:00', '16-15:00', '16-18:00', '16-21:00', '16-23:55',
'17-00:10', '17-06:00', '17-09:00', '17-12:00', '17-15:00', '17-18:00', '17-21:00', '17-23:55',
'18-00:10', '18-06:00', '18-09:00', '18-12:00', '18-15:00', '18-18:00', '18-21:00', '18-23:55',
'19-00:10', '19-06:00', '19-09:00', '19-12:00', '19-15:00', '19-18:00', '19-21:00', '19-23:55',
'20-00:10', '20-06:00', '20-09:00', '20-12:00', '20-15:00', '20-18:00', '20-21:00', '20-23:55',
'21-00:10', '21-06:00', '21-09:00', '21-12:00', '21-15:00', '21-18:00', '21-21:00', '21-23:55',
'22-00:10', '22-06:00', '22-09:00', '22-12:00', '22-15:00', '22-18:00', '22-21:00', '22-23:55',
'23-00:10', '23-06:00', '23-09:00', '23-12:00', '23-15:00', '23-18:00', '23-21:00', '23-23:55',
'24-00:10', '24-06:00', '24-09:00', '24-12:00', '24-15:00', '24-18:00', '24-21:00', '24-23:55',
'25-00:10', '25-06:00', '25-09:00', '25-12:00', '25-15:00', '25-18:00', '25-21:00', '25-23:55',
'26-00:10', '26-06:00', '26-09:00', '26-12:00', '26-15:00', '26-18:00', '26-21:00', '26-23:55',
'27-00:10', '27-06:00', '27-09:00', '27-12:00', '27-15:00', '27-18:00', '27-21:00', '27-23:55',
'28-00:10', '28-06:00', '28-09:00', '28-12:00', '28-15:00', '28-18:00', '28-21:00', '28-23:55',
'29-00:10', '29-06:00', '29-09:00', '29-12:00', '29-15:00', '29-18:00', '29-21:00', '29-23:55',
'30-00:10', '30-06:00', '30-09:00', '30-12:00', '30-15:00', '30-18:00', '30-21:00', '30-23:55',
'31-00:10', '31-06:00', '31-09:00', '31-12:00', '31-15:00', '31-18:00', '31-21:00', '31-23:55'
];

// 种类
var legend_data = [
'BCH', 'BCH*(-3)', 'BCH*3', 'BTC', 'BTC*(-3)', 'BTC*3', 
'EOS', 'EOS*(-3)', 'EOS*3', 'ETH', 'ETH*(-3)', 'ETH*3' 
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
        start: 32,
        end: 40
    }, {
        start: 32,
        end: 40
    }],
    series: [
        {
            name: 'BCH',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, -3.15,
			-0.58, -2.02, -1.82, -3.63, -8.12, -16.93, -20.32, -22.03,
			-2.70, 4.40, 5.84, 11.17, 13.83, 16.98
			]
        },{
            name: 'BCH*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			22.29, 0, -6.12, 7.58, 12.99, 7.99, 15.84, 47.75,
			8.87, 9.06, 1.32, 17.83, 20.23, 8.39, 2.60, 8.03,
			3.48, 5.51, 5.33, 10.44, 22.52, 34.39, 34.80, 65.36,
			11.68, -10.32, -12.20, -27.89, -32.80, -27.64
			]
        },
        {
            name: 'BCH*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			-0.49, 0, -0.64, -0.05, -0.43, -0.49, -0.81, -1.90,
		    0.00, -2.24, -2.24, -3.37, -5.05, -6.74, -7.86, -10.11,
			0.00, 0.00, 0.00, -1.67, -2.87, -6.25, -8.73, -17.66,
			-1.53, -4.61, -6.15, -7.69, -7.69, -7.69
			]
        },
		{
            name: 'BTC',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 3.87,
			-0.51, 0.22, -0.04, -2.07, -4.30, -10.44, -10.79, -12.92,
			-2.56, 2.80, 5.70, 6.06, 8.43, 8.91
			]
        },
        {
            name: 'BTC*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			20.85, 0, -4.61, 6.58, 6.54, 1.57, 5.75, 28.75,
			0.55, -6.58, -14.10, -4.36, -1.08, -8.99, -15.07, -15.18,
			0.79, -3.53, 0.12, -0.57, 3.74, 14.42, 15.64, 28.05,
			8.36, -2.92, -7.48, -9.23, -11.29, -14.40
			]
        },
        {
            name: 'BTC*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			-11.51, 0, 7.80, -1.57, -4.32, -0.60, -5.31, -26.36,
			-6.23, -1.55, 7.31, 1.44, -2.83, 5.01, 7.22, 6.37,
			-1.59, 3.13, 1.32, -1.12, -8.09, -24.78, -24.99, -31.45,
			-4.15, 5.18, 13.90, 15.59, 20.23, 17.85
			]
        },
		{
            name: 'EOS',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, -3.32,
			-1.04, -1.29, -0.64, -3.82, -7.78, -16.71, -20.89, -23.08,
			-4.25, 3.97, 6.24, 7.19, 13.93, 14.55
			]
        },
        {
            name: 'EOS*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			15.53, 0, -11.36, 6.81, 11.36, 6.43, 12.12, 42.04,
			12.40, 2.63, -3.69, 8.70, 17.94, 8.97, 3.43, 7.65,
			3.41, 4.14, 2.43, 11.21, 20.48, 41.46, 45.12, 70.73,
			18.45, -4.86, -15.16, -15.30, -24.17, -30.75
			]
        },
        {
            name: 'EOS*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			-3.24, 0, 0.35, -0.07, -0.42, -1.12, -1.12, -3.95,
			0.00, -0.51, -1.98, -2.72, -4.20, -4.20, -4.93, -6.04,
			0.00, -0.07, -0.07, -1.25, -4.64, -9.12, -13.37, -15.02,
			-1.94, -7.40, -7.40, -7.59, -16.66, -20.64
			]
        },
		{
            name: 'ETH',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, -1.94,
			-0.29, 0.47, -0.39, -2.37, -7.09, -13.86, -17.87, -19.02,
			-3.75, 9.56, 11.02, 11.78, 13.92, 16.49
			]
        },
        {
            name: 'ETH*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			22.71, 0, -4.53, 3.19, 11.16, 12.49, 19.73, 48.27,
			4.43, -1.66, -7.84, 8.72, 13.84, -0.65, -4.52, -1.65,
			1.61, -0.88, 1.85, 7.86, 17.61, 29.90, 35.95, 58.65,
			16.36, -22.42, -21.34, -23.49, -27.80, -34.70
			]
        },
        {
            name: 'ETH*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			-14.82, 0, 8.26, 8.08, -5.49, -10.61, -15.62, -36.13,
			-4.47, -13.79, -6.89, -17.96, -24.13, -16.59, -12.43, -13.96,
			1.74, 5.15, 3.63, -5.25, -10.60, -36.10, -34.01, -46.78,
			-2.38, 21.59, 26.39, 31.11, 31.99, 39.99
			]
        }
    ]
};


