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
'25-00:10', '25-06:00', '25-09:00', '25-12:00', '25-15:00', '25-18:00', '25-21:00', '25-23:50',
'26-00:10', '26-06:00', '26-09:00', '26-12:00', '26-15:00', '26-18:00', '26-21:00', '26-23:50',
'27-00:10', '27-06:00', '27-09:00', '27-12:00', '27-15:00', '27-18:00', '27-21:00', '27-22:30', '27-23:50',
'28-00:05', '28-00:30', '28-06:00', '28-07:30', '28-09:00', '28-10:30', '28-12:00', '28-13:30', '28-15:00', '28-16:30', '28-18:00', '28-19:30', '28-21:00', '28-22:30', '28-23:50',
'29-00:10', '29-00:30', '29-06:00', '29-07:30', '29-09:00', '29-10:30', '29-12:00', '29-13:30', '29-15:00', '29-16:30', '29-18:00', '29-19:30', '29-21:00', '29-22:30', '29-23:50',
'30-00:10', '30-00:30', '30-06:00', '30-07:30', '30-09:00', '30-10:30', '30-12:00', '30-13:30', '30-15:00', '30-16:30', '30-18:00', '30-19:30', '30-21:00', '30-22:30', '30-23:50',
'31-00:10', '31-00:30', '31-06:00', '31-07:30', '31-09:00', '31-10:30', '31-12:00', '31-13:30', '31-15:00', '31-16:30', '31-18:00', '31-19:30', '31-21:00', '31-22:30', '31-23:50',
'01-00:10', '01-00:30', '01-06:00', '01-07:30', '01-09:00', '01-10:30', '01-12:00', '01-13:30', '01-15:00', '01-16:30', '01-18:00', '01-19:30', '01-21:00', '01-22:30', '01-23:50',
'02-00:10', '02-00:30', '02-06:00', '02-07:30', '02-09:00', '02-10:30', '02-12:00', '02-13:30', '02-15:00', '02-16:30', '02-18:00', '02-19:30', '02-21:00', '02-22:30', '02-23:50',
'03-00:10', '03-00:30', '03-06:00', '03-07:30', '03-09:00', '03-10:30', '03-12:00', '03-13:30', '03-15:00', '03-16:30', '03-18:00', '03-19:30', '03-21:00', '03-22:30', '03-23:50',
'04-00:10', '04-00:30', '04-06:00', '04-07:30', '04-09:00', '04-10:30', '04-12:00', '04-13:30', '04-15:00', '04-16:30', '04-18:00', '04-19:30', '04-21:00', '04-22:30', '04-23:50',
'05-00:10', '05-00:30', '05-06:00', '05-07:30', '05-09:00', '05-10:30', '05-12:00', '05-13:30', '05-15:00', '05-16:30', '05-18:00', '05-19:30', '05-21:00', '05-22:30', '05-23:50',
'06-00:10', '06-00:30', '06-06:00', '06-07:30', '06-09:00', '06-10:30', '06-12:00', '06-13:30', '06-15:00', '06-16:30', '06-18:00', '06-19:30', '06-21:00', '06-22:30', '06-23:50',
'07-00:10', '07-00:30', '07-06:00', '07-07:30', '07-09:00', '07-10:30', '07-12:00', '07-13:30', '07-15:00', '07-16:30', '07-18:00', '07-19:30', '07-21:00', '07-22:30', '07-23:50',
'08-00:10', '08-00:30', '08-06:00', '08-07:30', '08-09:00', '08-10:30', '08-12:00', '08-13:30', '08-15:00', '08-16:30', '08-18:00', '08-19:30', '08-21:00', '08-22:30', '08-23:50',
'09-00:10', '09-00:30', '09-06:00', '09-07:30', '09-09:00', '09-10:30', '09-12:00', '09-13:30', '09-15:00', '09-16:30', '09-18:00', '09-19:30', '09-21:00', '09-22:30', '09-23:50',
'10-00:10', '10-00:30', '10-06:00', '10-07:30', '10-09:00', '10-10:30', '10-12:00', '10-13:30', '10-15:00', '10-16:30', '10-18:00', '10-19:30', '10-21:00', '10-22:30', '10-23:50',
'11-00:10', '11-00:30', '11-06:00', '11-07:30', '11-09:00', '11-10:30', '11-12:00', '11-13:30', '11-15:00', '11-16:30', '11-18:00', '11-19:30', '11-21:00', '11-22:30', '11-23:50',
'12-00:10', '12-00:30', '12-06:00', '12-07:30', '12-09:00', '12-10:30', '12-12:00', '12-13:30', '12-15:00', '12-16:30', '12-18:00', '12-19:30', '12-21:00', '12-22:30', '12-23:50',
'13-00:10', '13-00:30', '13-06:00', '13-07:30', '13-09:00', '13-10:30', '13-12:00', '13-13:30', '13-15:00', '13-16:30', '13-18:00', '13-19:30', '13-21:00', '13-22:30', '13-23:50',
'14-00:10', '14-00:30', '14-06:00', '14-07:30', '14-09:00', '14-10:30', '14-12:00', '14-13:30', '14-15:00', '14-16:30', '14-18:00', '14-19:30', '14-21:00', '14-22:30', '14-23:50',
'15-00:10', '15-00:30', '15-06:00', '15-07:30', '15-09:00', '15-10:30', '15-12:00', '15-13:30', '15-15:00', '15-16:30', '15-18:00', '15-19:30', '15-21:00', '15-22:30', '15-23:50',
'16-00:10', '16-00:30', '16-06:00', '16-07:30', '16-09:00', '16-10:30', '16-12:00', '16-13:30', '16-15:00', '16-16:30', '16-18:00', '16-19:30', '16-21:00', '16-22:30', '16-23:50',
'17-00:10', '17-00:30', '17-06:00', '17-07:30', '17-09:00', '17-10:30', '17-12:00', '17-13:30', '17-15:00', '17-16:30', '17-18:00', '17-19:30', '17-21:00', '17-22:30', '17-23:50',
'18-00:10', '18-00:30', '18-06:00', '18-07:30', '18-09:00', '18-10:30', '18-12:00', '18-13:30', '18-15:00', '18-16:30', '18-18:00', '18-19:30', '18-21:00', '18-22:30', '18-23:50',
'19-00:10', '19-00:30', '19-06:00', '19-07:30', '19-09:00', '19-10:30', '19-12:00', '19-13:30', '19-15:00', '19-16:30', '19-18:00', '19-19:30', '19-21:00', '19-22:30', '19-23:50',
'20-00:10', '20-00:30', '20-06:00', '20-07:30', '20-09:00', '20-10:30', '20-12:00', '20-13:30', '20-15:00', '20-16:30', '20-18:00', '20-19:30', '20-21:00', '20-22:30', '20-23:50',
'21-00:10', '21-00:30', '21-06:00', '21-07:30', '21-09:00', '21-10:30', '21-12:00', '21-13:30', '21-15:00', '21-16:30', '21-18:00', '21-19:30', '21-21:00', '21-22:30', '21-23:50',
'22-00:10', '22-00:30', '22-06:00', '22-07:30', '22-09:00', '22-10:30', '22-12:00', '22-13:30', '22-15:00', '22-16:30', '22-18:00', '22-19:30', '22-21:00', '22-22:30', '22-23:50',
'23-00:10', '23-00:30', '23-06:00', '23-07:30', '23-09:00', '23-10:30', '23-12:00', '23-13:30', '23-15:00', '23-16:30', '23-18:00', '23-19:30', '23-21:00', '23-22:30', '23-23:50',
'24-00:10', '24-00:30', '24-06:00', '24-07:30', '24-09:00', '24-10:30', '24-12:00', '24-13:30', '24-15:00', '24-16:30', '24-18:00', '24-19:30', '24-21:00', '24-22:30', '24-23:50',
'25-00:10', '25-00:30', '25-06:00', '25-07:30', '25-09:00', '25-10:30', '25-12:00', '25-13:30', '25-15:00', '25-16:30', '25-18:00', '25-19:30', '25-21:00', '25-22:30', '25-23:50',
'26-00:10', '26-00:30', '26-06:00', '26-07:30', '26-09:00', '26-10:30', '26-12:00', '26-13:30', '26-15:00', '26-16:30', '26-18:00', '26-19:30', '26-21:00', '26-22:30', '26-23:50',
'27-00:10', '27-00:30', '27-06:00', '27-07:30', '27-09:00', '27-10:30', '27-12:00', '27-13:30', '27-15:00', '27-16:30', '27-18:00', '27-19:30', '27-21:00', '27-22:30', '27-23:50',
'28-00:10', '28-00:30', '28-06:00', '28-07:30', '28-09:00', '28-10:30', '28-12:00', '28-13:30', '28-15:00', '28-16:30', '28-18:00', '28-19:30', '28-21:00', '28-22:30', '28-23:50',
'29-00:10', '29-00:30', '29-06:00', '29-07:30', '29-09:00', '29-10:30', '29-12:00', '29-13:30', '29-15:00', '29-16:30', '29-18:00', '29-19:30', '29-21:00', '29-22:30', '29-23:50',
'30-00:10', '30-00:30', '30-06:00', '30-07:30', '30-09:00', '30-10:30', '30-12:00', '30-13:30', '30-15:00', '30-16:30', '30-18:00', '30-19:30', '30-21:00', '30-22:30', '30-23:50',
'31-00:10', '31-00:30', '31-06:00', '31-07:30', '31-09:00', '31-10:30', '31-12:00', '31-13:30', '31-15:00', '31-16:30', '31-18:00', '31-19:30', '31-21:00', '31-22:30', '31-23:50'
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
        start: 30,
        end: 33
    }, {
        start: 30,
        end: 33
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
			-2.70, 4.40, 5.84, 11.17, 13.83, 16.98, 27.60, 26.72, 
			1.07, 7.06, 14.39, 6.03, 12.67, 6.78, 2.53, 3.88,
			-0.58, -0.64, 1.41, 6.73, 10.18, 9.21, 8.75, 3.49,
			0.16, 1.72, 1.61, -2.72, 0.16, 3.57, 2.91, 8.76, 6.52, 
			-1.78, -2.42, -1.60, -4.72, -6.44, -5.60, -5.23, -7.51, -11.11, -10.55, -13.48, -14.80, -11.54, -11.24, -10.52, 
			-1.21, 
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
			11.68, -10.32, -12.20, -27.89, -32.80, -27.64, -50.38, -52.70, 
			-1.27, -7.87, -44.79, 2.90, 2.90, 2.90, -22.28, -32.81,
			1.54, 1.64, -4.57, -20.80, -31.64, -29.77, -29.09, -19.35,
			-1.03, -5.67, -5.11, 8.01, -1.34, -10.95, -8.44, -26.51, -20.07, 
			5.88, 7.42, 4.15, 14.05, 19.08, 16.71, 15.53, 22.78, 32.98, 31.87, 40.56, 44.23, 34.43, 34.22, 31.76, 
			2.85, 
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
			-1.53, -4.61, -6.15, -7.69, -7.69, -7.69, -13.84, -18.46, 
			0.00, -3.43, -3.77, -5.66, -5.66, -5.66, -5.66, -37.52,
			-1.84, -2.20, 4.40, 20.33, 30.34, 26.96, 26.17, 10.12,
			0.83, 5.52, 5.26, -7.99, 0.62, 10.60, 8.80, 26.73, 19.69,
			-5.86, -7.17, -4.51, -14.06, -18.68, -16.61, -15.80, -22.58, -33.00, -32.22, -38.10, -41.59, -34.51, -33.70, -32.06, 
			-4.40, 
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
			-2.56, 2.80, 5.70, 6.06, 8.43, 8.91, 15.20, 12.64, 
			-0.11, 2.55, 5.01, 1.92, 3.65, 0.82, -1.04, 1.14,
			-0.74, -0.61, -0.37, 3.41, 6.06, 5.02, 4.81, 1.46,
			0.71, 0.60, -0.63, -3.05, -1.37, 1.48, 1.56, 3.75, 2.58,
			-0.99, -1.31, -1.87, -3.08, -4.45, -3.91, -3.52, -5.70, -7.02, -7.17, -9.31, -10.23, -7.61, -7.19, -7.23, 
			-0.73, 
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
			8.36, -2.92, -7.48, -9.23, -11.29, -14.40, -32.84, -29.77, 
			9.62, -4.42, -6.54, -4.42, -6.19, 1.20, 9.30, -9.27,
			2.27, 1.67, 1.23, -10.42, -18.37, -15.33, -14.65, -4.47,
			-2.37, -2.04, 1.83, 9.24, 3.97, -4.03, -4.45, -11.20, -7.99,
			3.59, 4.36, 5.44, 9.39, 13.12, 11.87, 10.52, 17.35, 21.08, 21.80, 28.01, 30.89, 23.11, 21.67, 21.76, 
			2.46, 
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
			-4.15, 5.18, 13.90, 15.59, 20.23, 17.85, 39.13, 33.44, 
			-1.37, 10.68, 14.61, 7.05, 11.14, 3.24, -3.63, -2.07,
			-2.19, -1.77, -0.92, 10.15, 18.12, 14.88, 14.31, 4.46,
			2.08, 2.15, -1.68, -8.81, -4.29, 4.25, 4.51, 11.19, 7.72,
			-3.31, -4.11, -5.24, -9.07, -13.04, -11.54, -10.67, -17.00, -20.99, -21.44, -27.94, -30.93, -25.53, -24.83, -24.91, 
			-2.33, 
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
			-4.25, 3.97, 6.24, 7.19, 13.93, 14.55, 21.31, 21.34, 
			-0.65, 6.66, 16.04, 11.35, 14.70, 10.16, 5.06, 7.78,
			-1.33, -1.05, 2.63, 11.97, 16.95, 15.66, 15.61, 10.63,
			1.36, 2.22, 8.76, 2.38, 8.10, 12.30, 19.72, 19.06, 20.77,
			-2.09, -2.65, -2.01, -5.50, -9.01, -7.52, -7.61, -10.79, -14.69, -14.61, -17.49, -18.93, -14.09, -14.81, -14.59, 
			-1.95, 
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
			18.45, -4.86, -15.16, -15.30, -24.17, -30.75, -45.63, -50.64, 
			18.55, -5.21, -45.21, -31.01, -32.75, -33.33, -20.84, -35.07,
			3.73, 2.33, -8.87, -35.04, -43.92, -41.58, -42.05, -32.71,
			-3.54, -6.38, -26.95, -7.80, -23.40, -36.17, -51.77, -52.48, -54.60,
			6.15, 7.69, 4.61, 16.92, 24.61, 21.53, 21.53, 32.30, 43.07, 43.07, 50.76, 55.38, 40.21, 43.07, 42.80, 
			10.18, 
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
			-1.94, -7.40, -7.40, -7.59, -16.66, -20.64, -25.92, -28.70, 
			0.00, -1.29, -1.29, -1.29, -1.29, -1.29, -3.89, -52.59,
			-7.67, -7.16, 3.58, 31.20, 43.98, 40.40, 40.66, 25.31,
			6.59, 6.19, 25.99, 5.99, 22.99, 36.00, 57.99, 56.79, 63.59,
			-6.47, -10.07, 0.71, -10.31, -16.06, -16.54, -16.66, -27.57, -36.57, -42.68, -48.56, -52.15, -41.12, -43.16, -42.44,
			-6.93, 
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
			-3.75, 9.56, 11.02, 11.78, 13.92, 16.49, 26.78, 29.20, 
			-0.68, 3.63, 8.21, 2.78, 6.09, 1.69, -1.61, 2.72,
			-0.85, 0.32, 2.86, 9.05, 10.46, 9.02, 9.07, 5.10,
			0.71, 2.32, 1.85, -2.62, 0.24, 1.72, 1.55, 3.91, 2.88,
			-0.76, -0.84, -0.90, -2.31, -3.82, -3.09, -2.98, -5.00, -9.15, -8.77, -11.11, -11.86, -8.40, -8.60, -8.80, 
			-0.69, 
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
			16.36, -22.42, -21.34, -23.49, -27.80, -34.70, -48.28, -54.74, 
			-1.42, -9.52, -31.11, -19.42, -19.87, -9.25, -4.76, -26.41,
			3.18, -1.32, -8.75, -27.83, -32.77, -30.18, -30.22, -23.04,
			-1.93, -7.21, -5.67, 8.27, -0.64, -4.79, -4.25, -11.60, -8.78,
			2.52, 2.64, 2.27, 7.18, 11.14, 9.15, 8.99, 14.88, 27.52, 26.48, 33.85, 35.91, 25.03, 25.85, 26.09, 
			2.14, 
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
			-2.38, 21.59, 26.39, 31.11, 31.99, 39.99, 71.88, 79.09, 
			1.56, 15.88, 30.65, 14.86, 23.26, 15.41, -1.20, 1.78,
			-1.52, 0.70, 8.47, 26.55, 30.87, 26.17, 26.61, 14.43,
			3.02, 6.98, 5.43, -8.06, 0.67, 4.82, 4.05, 11.39, 8.36,
			-2.45, -2.41, -2.61, -6.83, -10.55, -9.23, -9.05, -14.90, -23.43, -26.30, -33.22, -34.74, -26.85, -27.63, -27.83, 
			-2.34, 
			]
        }
    ]
};


