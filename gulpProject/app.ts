///<reference path="node_modules/angular2/typings/tsd.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

// import {Home} from 'components/home/home';
import {Nav} from 'components/nav/nav';

@Component({
	selector : 'app'
})
// @RouteConfig([
// 	{path: '/', component:Home, as:'Home' }
// 	// {path: '/nav', component:Nav, as:'Nav' }
// ])
@View({
	templateUrl : "app.html",
	directives : [ROUTER_DIRECTIVES, Nav],
	styleUrls : ['app.css']
})

class App 
{ 	
}

bootstrap(App, [ROUTER_PROVIDERS]);
