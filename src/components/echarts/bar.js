import React from 'react';
import { Column } from '@antv/g2plot';

class Test extends React.Component {
  componentDidMount() {
    const data = [
        {
          type: '家具家电',
          sales: 38,
        },
        {
          type: '粮油副食',
          sales: 52,
        },
        {
          type: '生鲜水果',
          sales: 61,
        },
        {
          type: '美容洗护',
          sales: 145,
        },
        {
          type: '母婴用品',
          sales: 48,
        },
        {
          type: '进口食品',
          sales: 38,
        },
        {
          type: '食品饮料',
          sales: 38,
        },
        {
          type: '家庭清洁',
          sales: 38,
        },
      ];
      
      const columnPlot = new Column(document.getElementById('bar'), {
        title: {
          visible: true,
          text: '基础柱状图',
        },
        forceFit: true,
        data,
        padding: 'auto',
        data,
        xField: 'type',
        yField: 'sales',
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额(万)',
          },
        },
      });
      
      columnPlot.render();
      
}
render() {
    return (
        <div id="bar" style={{ width: '100%', height: 450 }}></div>
    );
}
}

export default Test;