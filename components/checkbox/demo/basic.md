# 基本用法

- order: 0

简单的 checkbox。

---

````jsx
var Checkbox = antd.Checkbox;
var container = document.getElementById('components-checkbox-demo-basic');
function onChange(e) {
  console.log('checked = ' + e.target.checked);
}

React.render(<label>
  <Checkbox defaultChecked={false} onChange={onChange} />
  Checkbox
</label>, container);
````
