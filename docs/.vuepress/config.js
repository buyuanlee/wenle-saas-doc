module.exports = {
    title: '纹乐SAAS指南',
    description: '纹乐SAAS前端技术文档',
    base: '/wenle-saas-doc/',
    markdown: {lineNumbers: true},
    themeConfig: {
        nav: [{text:'文档首页',link:'/'}, {text: '官网首页',link:'http://www.wenleapp.com/businessBack'}],
        sidebar: [
            {title: '项目简介', children: ['/Introduce/',]},
            {title: '开发环境', collapsable: false, children: ['/TechnologyStack/']},
            {title: '项目详情', collapsable: false, children: ['/ProjectDetail/directory']}
        ],
        displayAllHeaders: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
    },

};
