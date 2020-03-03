# new vue project

## cookie 使用説明
vue, vuex都有綁上變數$cookie，所以可以這樣用：
```javascript
    this.$cookie.set("[name]", data); // 寫入 cookie 
    this.$cookie.get("[name]"); // 讀取 cookie 
    this.$cookie.remove("[name]"); // 刪除 cookie
```
#### Vue Development
```
npm run dev
```
#### Vue build
```
npm run build
```