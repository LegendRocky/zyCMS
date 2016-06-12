//meteor entry file

//create an mantra app and initialize it
import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import activityModule from './modules/activity';
import coreModule from './modules/core';
import menusModule from './modules/menus';
import userModule from './modules/users';
import footerModule from './modules/footer';

//backend
import adminModule from './modules/admin';

// init context
const context = initContext();

// create app
const app = createApp(context);

// load module
app.loadModule(activityModule);
app.loadModule(coreModule);
app.loadModule(menusModule);
app.loadModule(userModule);
app.loadModule(footerModule);

app.loadModule(adminModule);
// init app
app.init();


//状态初始化
const { LocalState } = context;
// //最新资讯初始状态
// LocalState.set("NEWS_PAGE", 1);
LocalState.set("PAGE_LIMIT", 5);
// console.log(app);

