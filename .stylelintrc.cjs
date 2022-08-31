module.exports = {
    //注册stylelint 的 prettier插件
    plugins: ['stylelint-prettier'],
    extends: [
        //standard 规则集合
        'stylelint-config-standard',
        //standard 规则集合的scss版本
        'stylelint-config-standard-scss',
        //样式属性顺序规则
        'stylelint-config-recess-order',
        //接入prettier规则
        'stylelint-config-prettier',
        'stylelint-prettier/recommended'
    ],
    rules: {
        'prettier/prettier': true
    }
}