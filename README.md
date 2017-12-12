# react-native-edit-text

React Native 默认的 `textInput` 组件默认是没有边框的，使用的时候需要自己在其外面套个`view`来使用。且安卓上面无法实现输入时，右侧出现删除按钮。

## usuage

```javascript

  <EditText
    inputStyle={{}}
    clearButtonMode="while-editing"
    value={}
    onChangeText={()=>{}}
    placeholder="请输入资产编号"
  />
```
