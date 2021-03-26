$(function(){
  /*handsontable*/
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Pathon', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic.NET', '6', '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%']
    ];
  var container = $('#div1'); 
  var hot = new Handsontable(container.get(0), {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动
    colWidths: 150,
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });

  /*echarts*/
  var myChart = echarts.init(document.getElementById('div2'));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ["2000","2005","2010","2015","2020"]
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      data: [6, 9, 8, 8, 7]
    }]
   };
   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);

  return hot;
});
