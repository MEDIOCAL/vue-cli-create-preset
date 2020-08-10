module.exports = (api, options, rootOptions) => {
    api.render('./template', rootOptions);
  
    // api.extendPackage({
    //     devDependencies: {
    //         'eslint-config-xm': '^0.0.1'
    //     }
    // });
  
    // 处理eslint 配置为自己的eslint 配置
    api.extendPackage(pkg => {
        pkg.eslintConfig.extends.length = 0;

        // 因为目前底层依赖库 大多数的是 2个空格目前 先占时使用这样的 方案更改
        const INDENT = 4;
        return {
            eslintConfig: {
                root: true,
                env: { node: true },
                extends: [],
                rules: {
                    indent: ['error', INDENT],
                    'vue/html-indent': ['error', INDENT, {
                        ignores: []
                    }]
                },
                parserOptions: {
                    parser: 'babel-eslint'
                },
                overrides: [
                    {
                        files: ['*.vue'],
                        rules: {
                            indent: 'off',
                            'vue/script-indent': ['error', INDENT, {
                                baseIndent: 1,
                                switchCase: 1,
                                ignores: []
                            }]
                        }
                    }
                ]
        }
        };
    });
};
