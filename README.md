安装clean-comment-loader

```bash
npm i -D clean-comment-loader
```

配置文件

```js
{
    test: /\.ejs$/,
    loader: [{
        loader: 'ejs-loader',
        options: {}
    },
    {
        loader: 'clean-comment-loader',
        options: {
            type:"html"
        }
    }],
}
```