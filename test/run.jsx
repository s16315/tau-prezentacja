// Define your root path - this will be the folder that contains your node_modules folder
var Global = Global || {};
Global.rootPath = new File($.fileName).parent.parent;
Global.modulesPath = new File(Global.rootPath + '/node_modules');

// Define an optional Logger to override default
// $.evalFile(Global.modulesPath + '/extendscript-logger/index.jsx');
// Global.logger = new Logger(Global.rootPath+'/log/mytestlog.log', 'DEBUG');

//Configuration options
Global.jasminejsx = Global.jasminejsx || {}
Global.jasminejsx.specPath = new File(Global.rootPath + '/test/spec');
Global.jasminejsx.reportPending = true; //defaults to false
// Global.jasminejsx.activateApp = true; //defaults to false

//Load the jasminejsx setup
//@include '../node_modules/jasminejsx/index.jsx'

// Sanity check, you can delete this after you verify your root path is correct.
Global.logger.info('Global.rootPath is: ' + Global.rootPath);

// Run Jasmine
$.evalFile(Global.modulesPath + '/jasminejsx/test/run.jsx');