var gulp = require('../gulp.js'),
	utils = require('../utils.js');

require('../res/react/gulpfile.js');


exports.usage = "为当前项目创建文档站";

exports.set_options = function(optimist) {	
    return optimist;
};

exports.run = function(options) {
	
	var BASEPATH, config, isLoadSassParse = false;
	
		BASEPATH = options.cwd;
		configFilePath = utils.path.join(BASEPATH, 'docfile.config');
	if(utils.file.exists(configFilePath)){
		config = utils.file.readJson(configFilePath);

		if(config.destDir){
			gulp(['default']);
		}else{
			utils.logger.info("请编辑 docfile.config 文件");
		}
	}else{
		utils.logger.info("找不到docfile.config文件, 请使用 qdoc init 命令初始化");
	}
}