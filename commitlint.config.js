module.exports = {
    extends: ['@commitlint/config-conventional'],
    prompt: {
        questions: {
            type: {
                description: 'Select the type of change that you\'re committing:',
                enum: {
                    feat: {
                        description: '新功能',
                        title: 'Features',
                        emoji: '✨'
                    },
                    fix: {
                        description: 'bug修复',
                        title: 'Bug Fixes',
                        emoji: '🐛'
                    },
                    docs: {
                        description: '文档修改',
                        title: 'Documentation',
                        emoji: '📚'
                    },
                    style: {
                        description: '代码格式修改, 注意不是 css 修改, 仅仅是对格式进行修改，如逗号、缩进、空格等',
                        title: 'Styles',
                        emoji: '💎'
                    },
                    refactor: {
                        description: '代码重构（既不修复错误也不添加功能的代码更改）',
                        title: 'Code Refactoring',
                        emoji: '📦'
                    },
                    perf: {
                        description: '优化相关，比如提升性能、体验',
                        title: 'Performance Improvements',
                        emoji: '🚀'
                    },
                    test: {
                        description: '测试用例，包括单元测试、集成测试',
                        title: 'Tests',
                        emoji: '🚨'
                    },
                    build: {
                        description: '编译相关的修改，例如发布版本、对项目构建或者依赖的改动',
                        title: 'Builds',
                        emoji: '🛠'
                    },
                    ci: {
                        description: '更改我们的CI配置文件和脚本（例如作用域：Travis、Circle、BrowserStack、SauceLabs）',
                        title: 'Continuous Integrations',
                        emoji: '⚙️'
                    },
                    chore: {
                        description: '其他修改, 比如改变构建流程、或者增加依赖库、工具等',
                        title: 'Chores',
                        emoji: '♻️'
                    },
                    revert: {
                        description: '回滚到上一个版本',
                        title: 'Reverts',
                        emoji: '🗑'
                    }
                }
            }

        }
    }
}
// build
// chore
// ci
// docs
// feat
// fix
// perf
// refactor
// revert
// style
// test

// feat：新功能
// fix：修补 Bug
// docs：文档更新
// style：格式改变，例如对代码进行了格式化，修改了空格等方式。
// refactor：对现有的代码进行了重构，注意与修补 Bug 的区别。
// test：增加测试用例
// chore：对构建过程或辅助工具和库（如文档生成）的更改
// revert：撤销上一个提交。

// feat	新增一个功能
// fix	修复一个Bug
// docs	文档变更
// style	代码格式（不影响功能，例如空格、分号等格式修正）
// refactor	代码重构
// perf	改善性能
// test	测试
// build	变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
// ci	更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等
// chore	变更构建流程或辅助工具
// revert	代码回退
