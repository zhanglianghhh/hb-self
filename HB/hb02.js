// 日期
var date = [
'01-00:00', '01-06:00', '01-09:00', '01-12:30', '01-15:00', '01-18:00', '01-21:00', '01-23:55',
'02-00:00', '02-06:00', '02-09:00', '02-12:30', '02-15:00', '02-18:00', '02-21:00', '02-23:55',
'03-00:00', '03-06:00', '03-09:00', '03-12:30', '03-15:00', '03-18:00', '03-21:00', '03-23:55',
'04-00:00', '04-06:00', '04-09:00', '04-12:30', '04-15:00', '04-18:00', '04-21:00', '04-23:55',
'05-00:00', '05-06:00', '05-09:00', '05-12:30', '05-15:00', '05-18:00', '05-21:00', '05-23:55',
'06-00:00', '06-06:00', '06-09:00', '06-12:30', '06-15:00', '06-18:00', '06-21:00', '06-23:55',
'07-00:00', '07-06:00', '07-09:00', '07-12:30', '07-15:00', '07-18:00', '07-21:00', '07-23:55',
'08-00:00', '08-06:00', '08-09:00', '08-12:30', '08-15:00', '08-18:00', '08-21:00', '08-23:55',
'09-00:00', '09-06:00', '09-09:00', '09-12:30', '09-15:00', '09-18:00', '09-21:00', '09-23:55',
'10-00:00', '10-06:00', '10-09:00', '10-12:30', '10-15:00', '10-18:00', '10-21:00', '10-23:55',
'11-00:00', '11-06:00', '11-09:00', '11-12:30', '11-15:00', '11-18:00', '11-21:00', '11-23:55',
'12-00:00', '12-06:00', '12-09:00', '12-12:30', '12-15:00', '12-18:00', '12-21:00', '12-23:55',
'13-00:00', '13-06:00', '13-09:00', '13-12:30', '13-15:00', '13-18:00', '13-21:00', '13-23:55',
'14-00:00', '14-06:00', '14-09:00', '14-12:30', '14-15:00', '14-18:00', '14-21:00', '14-23:55',
'15-00:00', '15-06:00', '15-09:00', '15-12:30', '15-15:00', '15-18:00', '15-21:00', '15-23:55',
'16-00:00', '16-06:00', '16-09:00', '16-12:30', '16-15:00', '16-18:00', '16-21:00', '16-23:55',
'17-00:00', '17-06:00', '17-09:00', '17-12:30', '17-15:00', '17-18:00', '17-21:00', '17-23:55',
'18-00:00', '18-06:00', '18-09:00', '18-12:30', '18-15:00', '18-18:00', '18-21:00', '18-23:55',
'19-00:00', '19-06:00', '19-09:00', '19-12:30', '19-15:00', '19-18:00', '19-21:00', '19-23:55',
'20-00:00', '20-06:00', '20-09:00', '20-12:30', '20-15:00', '20-18:00', '20-21:00', '20-23:55',
'21-00:00', '21-06:00', '21-09:00', '21-12:30', '21-15:00', '21-18:00', '21-21:00', '21-23:55',
'22-00:00', '22-06:00', '22-09:00', '22-12:30', '22-15:00', '22-18:00', '22-21:00', '22-23:55',
'23-00:00', '23-06:00', '23-09:00', '23-12:30', '23-15:00', '23-18:00', '23-21:00', '23-23:55',
'24-00:00', '24-06:00', '24-09:00', '24-12:30', '24-15:00', '24-18:00', '24-21:00', '24-23:55',
'25-00:00', '25-06:00', '25-09:00', '25-12:30', '25-15:00', '25-18:00', '25-21:00', '25-23:55',
'26-00:00', '26-06:00', '26-09:00', '26-12:30', '26-15:00', '26-18:00', '26-21:00', '26-23:55',
'27-00:00', '27-06:00', '27-09:00', '27-12:30', '27-15:00', '27-18:00', '27-21:00', '27-23:55',
'28-00:00', '28-06:00', '28-09:00', '28-12:30', '28-15:00', '28-18:00', '28-21:00', '28-23:55',
'29-00:00', '29-06:00', '29-09:00', '29-12:30', '29-15:00', '29-18:00', '29-21:00', '29-23:55',
'30-00:00', '30-06:00', '30-09:00', '30-12:30', '30-15:00', '30-18:00', '30-21:00', '30-23:55',
'31-00:00', '31-06:00', '31-09:00', '31-12:30', '31-15:00', '31-18:00', '31-21:00', '31-23:55',
'01-00:00', '01-06:00', '01-09:00', '01-12:30', '01-15:00', '01-18:00', '01-21:00', '01-23:55',
'02-00:00', '02-06:00', '02-09:00', '02-12:30', '02-15:00', '02-18:00', '02-21:00', '02-23:55',
'03-00:00', '03-06:00', '03-09:00', '03-12:30', '03-15:00', '03-18:00', '03-21:00', '03-23:55',
'04-00:00', '04-06:00', '04-09:00', '04-12:30', '04-15:00', '04-18:00', '04-21:00', '04-23:55',
'05-00:00', '05-06:00', '05-09:00', '05-12:30', '05-15:00', '05-18:00', '05-21:00', '05-23:55',
'06-00:00', '06-06:00', '06-09:00', '06-12:30', '06-15:00', '06-18:00', '06-21:00', '06-23:55',
'07-00:00', '07-06:00', '07-09:00', '07-12:30', '07-15:00', '07-18:00', '07-21:00', '07-23:55',
'08-00:00', '08-06:00', '08-09:00', '08-12:30', '08-15:00', '08-18:00', '08-21:00', '08-23:55',
'09-00:00', '09-06:00', '09-09:00', '09-12:30', '09-15:00', '09-18:00', '09-21:00', '09-23:55',
'10-00:00', '10-06:00', '10-09:00', '10-12:30', '10-15:00', '10-18:00', '10-21:00', '10-23:55',
'11-00:00', '11-06:00', '11-09:00', '11-12:30', '11-15:00', '11-18:00', '11-21:00', '11-23:55',
'12-00:00', '12-06:00', '12-09:00', '12-12:30', '12-15:00', '12-18:00', '12-21:00', '12-23:55',
'13-00:00', '13-06:00', '13-09:00', '13-12:30', '13-15:00', '13-18:00', '13-21:00', '13-23:55',
'14-00:00', '14-06:00', '14-09:00', '14-12:30', '14-15:00', '14-18:00', '14-21:00', '14-23:55',
'15-00:00', '15-06:00', '15-09:00', '15-12:30', '15-15:00', '15-18:00', '15-21:00', '15-23:55',
'16-00:00', '16-06:00', '16-09:00', '16-12:30', '16-15:00', '16-18:00', '16-21:00', '16-23:55',
'17-00:00', '17-06:00', '17-09:00', '17-12:30', '17-15:00', '17-18:00', '17-21:00', '17-23:55',
'18-00:00', '18-06:00', '18-09:00', '18-12:30', '18-15:00', '18-18:00', '18-21:00', '18-23:55',
'19-00:00', '19-06:00', '19-09:00', '19-12:30', '19-15:00', '19-18:00', '19-21:00', '19-23:55',
'20-00:00', '20-06:00', '20-09:00', '20-12:30', '20-15:00', '20-18:00', '20-21:00', '20-23:55',
'21-00:00', '21-06:00', '21-09:00', '21-12:30', '21-15:00', '21-18:00', '21-21:00', '21-23:55',
'22-00:00', '22-06:00', '22-09:00', '22-12:30', '22-15:00', '22-18:00', '22-21:00', '22-23:55',
'23-00:00', '23-06:00', '23-09:00', '23-12:30', '23-15:00', '23-18:00', '23-21:00', '23-23:55',
'24-00:00', '24-06:00', '24-09:00', '24-12:30', '24-15:00', '24-18:00', '24-21:00', '24-23:55',
'25-00:00', '25-06:00', '25-09:00', '25-12:30', '25-15:00', '25-18:00', '25-21:00', '25-23:55',
'26-00:00', '26-06:00', '26-09:00', '26-12:30', '26-15:00', '26-18:00', '26-21:00', '26-23:55',
'27-00:00', '27-06:00', '27-09:00', '27-12:30', '27-15:00', '27-18:00', '27-21:00', '27-23:55',
'28-00:00', '28-06:00', '28-09:00', '28-12:30', '28-15:00', '28-18:00', '28-21:00', '28-23:55',
'29-00:00', '29-06:00', '29-09:00', '29-12:30', '29-15:00', '29-18:00', '29-21:00', '29-23:55',
'30-00:00', '30-06:00', '30-09:00', '30-12:30', '30-15:00', '30-18:00', '30-21:00', '30-23:55',
'31-00:00', '31-06:00', '31-09:00', '31-12:30', '31-15:00', '31-18:00', '31-21:00', '31-23:55'
];

// 种类
var legend_data = [
'FIL*(-3)', 'FIL*3', 'LINK*(-3)', 'LINK*3', 'LTC*(-3)', 'LTC*3', 'XRP*(-3)', 'XRP*3'
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
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
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
        end: 36
    }, {
        start: 32,
        end: 36
    }],
    series: [
        {
            name: 'FIL*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			-1.97, 0, -13.46, -8.16, -5.04, -1.97, -3.20, 22.72,
			4.61, -11.97, -20.92, 0.47, 2.78, -4.64
			]
        },
        {
            name: 'FIL*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			-15.35, 0, -3.02, -5.95, -10.49, -12.22, -13.79, -37.30,
			-1.31, -13.15, -16.20, -21.05, -21.57, -22.89
			]
        },
        {
            name: 'LINK*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			19.19, 0, -1.99, 14.89, 20.85, 19.51, 23.48, 52.06,
			8.85, 0.08, -4.98, 8.10, 17.39, 6.27
			]
        },
        {
            name: 'LINK*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			-3.03, 0, 15.05, -2.82, -5.05, -6.06, -7.07, -19.19,
			0.00, -12.50, -25.00, -34.12, -45.00, -49.97
			]
        },
        {
            name: 'LTC*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			18.56, 0, -2.84, 14.48, 20.49, 16.02, 18.65, 55.26,
			5.78, -1.36, -7.46, 0.00, 10.71, 4.54
			]
        },
        {
            name: 'LTC*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			-5.21, 0, 6.11, -3.12, -10.13, -3.12, 13.56, -39.32,
			-0.50, -8.49, -9.99, -15.74, -20.49, -3.74
			]
        },
        {
            name: 'XRP*(-3)',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			16.36, 0, -0.90, 11.81, 18.18, 14.54, 20.00, 41.81,
			8.91, 7.00, 0.63, 18.47, 34.39, 23.56
			]
        },
        {
            name: 'XRP*3',
            type: 'line',
            data: [
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			-13.71, 0, 1.27, -14.15, -12.95, -18.90, -19.49, -40.67,
			-0.01, -6.74, -9.10, -23.65, -40.01, -27.41
			]
        }
    ]
};
