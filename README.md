
## dxc-popup 弹出层



### 属性
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">属性</th>
      <th>说明</th>
      <th>类型</th>
      <th style="width: 210px;">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>isOpen</td>
      <td>是否打开</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>position</td>
      <td>弹出的位置</td>
      <td>'bottom' | 'top' | 'left' | 'right'</td>
      <td>'bottom'</td>
    </tr>
    <tr>
      <td>maskColor</td>
      <td>蒙层背景颜色</td>
      <td>string</td>
      <td>'rgba(0, 0, 0, 0.5)'</td>
    </tr>
    <tr>
      <td>mask</td>
      <td>是否渲染蒙层</td>
      <td>(event) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onMaskClick</td>
      <td>点击蒙层触发</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
     <tr>
      <td>borderRadius</td>
      <td>添加圆角边框</td>
      <td>int</td>
      <td>5</td>
    </tr>
    <tr>
      <td>title</td>
      <td>标题</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>点击关闭按钮时触发</td>
      <td>(event) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td>类名</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>style</td>
      <td>样式</td>
      <td>string</td>
      <td>-</td>
    </tr>
  
  </tbody>
</table>
