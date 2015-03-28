//require一下fis模块
var fis = module.exports = require('fis');

//声明命令行工具名称
fis.cli.name = 'omelet';

fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.version = require('./version.js');

fis.cli.help.commands = [ 'release', 'install', 'server' ];

//定义插件前缀，允许加载tomato-xxx-xxx插件，或者fis-xxx-xxx插件，
//这样可以形成 omelet 自己的插件系统
fis.require.prefixes = [ 'omelet', 'fis' ];

//把前面的配置都写在这里统一管理
//项目中就不用再写了
// fis.config.merge({...});

//alias
Object.defineProperty(global, 'omelet', {
    enumerable : true,
    writable : false,
    value : fis
});