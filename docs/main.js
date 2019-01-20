(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

	/***/ "./src/$$_lazy_route_resource lazy recursive":
	/*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		function webpackEmptyAsyncContext(req) {
			// Here Promise.resolve().then() is used instead of new Promise() to prevent
			// uncaught exception popping up in devtools
			return Promise.resolve().then(function () {
				var e = new Error("Cannot find module '" + req + "'");
				e.code = 'MODULE_NOT_FOUND';
				throw e;
			});
		}

		webpackEmptyAsyncContext.keys = function () {
			return [];
		};
		webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
		module.exports = webpackEmptyAsyncContext;
		webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

		/***/
	}),

	/***/ "./src/app/about-page/about-page.component.html":
	/*!******************************************************!*\
    !*** ./src/app/about-page/about-page.component.html ***!
    \******************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<section class=\"section section-hero section-about\">\n\t<div class=\"hero-heading\">\n\t\t<h1 class=\"animate text-shadow-pop\">About me</h1>\n\t\t<div [innerHTML]=\"profile.about\" class=\"section-about-content\"></div>\n\t</div>\n\t<div class=\"hero-image\">\n\t\t<img alt=\"illustration of a digital nomad\" src=\"assets\\images\\digital_nomad.svg\">\n\t</div>\n</section>\n"

		/***/
	}),

	/***/ "./src/app/about-page/about-page.component.sass":
	/*!******************************************************!*\
    !*** ./src/app/about-page/about-page.component.sass ***!
    \******************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"

		/***/
	}),

	/***/ "./src/app/about-page/about-page.component.ts":
	/*!****************************************************!*\
    !*** ./src/app/about-page/about-page.component.ts ***!
    \****************************************************/
	/*! exports provided: AboutPageComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
			return AboutPageComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");


		var AboutPageComponent = /** @class */ (function () {
			function AboutPageComponent(profileService) {
				this.profileService = profileService;
			}

			AboutPageComponent.prototype.ngOnInit = function () {
				this.getProfile();
			};
			AboutPageComponent.prototype.getProfile = function () {
				var _this = this;
				this.profileService.getProfile(0).subscribe(function (profile) {
					return _this.profile = profile;
				});
			};
			AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-about-page',
					template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
					styles: [__webpack_require__(/*! ./about-page.component.sass */ "./src/app/about-page/about-page.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
			], AboutPageComponent);
			return AboutPageComponent;
		}());


		/***/
	}),

	/***/ "./src/app/app-routing.module.ts":
	/*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
	/*! exports provided: AppRoutingModule */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
			return AppRoutingModule;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
		/* harmony import */
		var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
		/* harmony import */
		var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
		/* harmony import */
		var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
		/* harmony import */
		var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");
		/* harmony import */
		var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");


// import {ProjectsComponent} from './projects/projects.component';


		var routes = [
			{
				path: '',
				component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
				data: {animation: 'HomePage'}
			},
			{
				path: 'projects',
				children: [
					{
						path: '',
						component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"],
						data: {animation: 'Projects'}
					},
					{
						path: ':id',
						component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"],
						data: {animation: 'Project'}
					},
				]
			},
			{
				path: 'about',
				component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
				data: {animation: 'AboutPage'}
			},
			{
				path: '**',
				component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
			}
		];
		var AppRoutingModule = /** @class */ (function () {
			function AppRoutingModule() {
			}

			AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
					imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {scrollPositionRestoration: 'top'})],
					exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
				})
			], AppRoutingModule);
			return AppRoutingModule;
		}());


		/***/
	}),

	/***/ "./src/app/app.component.html":
	/*!************************************!*\
    !*** ./src/app/app.component.html ***!
    \************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<div class=\"navbar\">\n\t<a routerLink=\"/\" routerLinkActive=\"active\">\n\t\t<img alt=\"logo\" class=\"logo\" height=\"48\" src=\"assets/icons/icon-48-48.png\" width=\"48\">\n\t</a>\n\t<nav class=\"nav link-group\" id=\"navMenu\">\n\t\t<a class=\"link\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n\t\t<a class=\"link\" routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a>\n\t</nav>\n</div>\n<div [@routeAnimations]=\"prepareRoute(outlet)\">\n\t<router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n"

		/***/
	}),

	/***/ "./src/app/app.component.sass":
	/*!************************************!*\
    !*** ./src/app/app.component.sass ***!
    \************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

		/***/
	}),

	/***/ "./src/app/app.component.ts":
	/*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
	/*! exports provided: AppComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "AppComponent", function () {
			return AppComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
		/* harmony import */
		var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
		/* harmony import */
		var _route_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-navigation.service */ "./src/app/route-navigation.service.ts");
		/* harmony import */
		var typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
		/* harmony import */
		var typed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_5__);


		var AppComponent = /** @class */ (function () {
			function AppComponent(router, navigate) {
				var _this = this;
				this.router = router;
				this.navigate = navigate;
				this.router.events.subscribe(function (event) {
					if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
						window.gtag('config', 'UA-79194198-1', {'page_path': event.urlAfterRedirects});
						_this.animateOnView();
					}
				});
				this.navigate.childInit$.subscribe(function (data) {
					if (data === 'typed' || data === undefined) {
						var typed = new typed_js__WEBPACK_IMPORTED_MODULE_5___default.a('#typed', {
							stringsElement: '#typed-strings',
							typeSpeed: 60
						});
					}
					if (data === 'animate' || data === undefined) {
						_this.animateOnView();
					}
				});
			}

			AppComponent.prototype.ngOnInit = function () {
			};
			AppComponent.prototype.prepareRoute = function (outlet) {
				return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
			};
			AppComponent.prototype.animateOnView = function () {
				var elements = document.querySelectorAll('.animate');
				elements.forEach(function (element) {
					element.classList.remove('animate');
				});
				var observer = new IntersectionObserver(function (entries) {
					entries.forEach(function (entry) {
						if (entry.intersectionRatio > 0) {
							entry.target.setAttribute('style', '');
						} else {
							entry.target.setAttribute('style', 'animation:none');
						}
						entry.target.classList.remove('animate');
					});
				});
				elements.forEach(function (element) {
					observer.observe(element);
				});
			};
			AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-root',
					template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
					animations: [
						Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
							Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => Project', [
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 0})
								], {optional: true}),
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({visibility: 'hidden'}))
								], {optional: true}),
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 0}),
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 1}))
								], {optional: true}),
							]),
							Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 0})
								], {optional: true}),
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 1}),
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 0}))
								], {optional: true}),
								Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 0}),
									Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({opacity: 1}))
								], {optional: true}),
							])
						])
					],
					styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _route_navigation_service__WEBPACK_IMPORTED_MODULE_4__["RouteNavigationService"]])
			], AppComponent);
			return AppComponent;
		}());


		/***/
	}),

	/***/ "./src/app/app.module.ts":
	/*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
	/*! exports provided: AppModule */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "AppModule", function () {
			return AppModule;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
		/* harmony import */
		var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
		/* harmony import */
		var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
		/* harmony import */
		var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
		/* harmony import */
		var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
		/* harmony import */
		var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
		/* harmony import */
		var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
		/* harmony import */
		var _code_analysis_code_analysis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./code-analysis/code-analysis.component */ "./src/app/code-analysis/code-analysis.component.ts");
		/* harmony import */
		var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
		/* harmony import */
		var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
		/* harmony import */
		var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");
		/* harmony import */
		var _tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tech-stack/tech-stack.component */ "./src/app/tech-stack/tech-stack.component.ts");
		/* harmony import */
		var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");


		var AppModule = /** @class */ (function () {
			function AppModule() {
			}

			AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
					declarations: [
						_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
						_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
						_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
						_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
						_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
						_code_analysis_code_analysis_component__WEBPACK_IMPORTED_MODULE_10__["CodeAnalysisComponent"],
						_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsPageComponent"],
						_tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_14__["TechStackComponent"],
						_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_15__["AboutPageComponent"]
					],
					imports: [
						_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
						_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
						_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
						_angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production})
					],
					providers: [],
					bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
				})
			], AppModule);
			return AppModule;
		}());


		/***/
	}),

	/***/ "./src/app/code-analysis/code-analysis.component.html":
	/*!************************************************************!*\
    !*** ./src/app/code-analysis/code-analysis.component.html ***!
    \************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<div class=\"code-graph\" id=\"codeGraph\"></div>\n\n"

		/***/
	}),

	/***/ "./src/app/code-analysis/code-analysis.component.sass":
	/*!************************************************************!*\
    !*** ./src/app/code-analysis/code-analysis.component.sass ***!
    \************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtYW5hbHlzaXMvY29kZS1hbmFseXNpcy5jb21wb25lbnQuc2FzcyJ9 */"

		/***/
	}),

	/***/ "./src/app/code-analysis/code-analysis.component.ts":
	/*!**********************************************************!*\
    !*** ./src/app/code-analysis/code-analysis.component.ts ***!
    \**********************************************************/
	/*! exports provided: CodeAnalysisComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "CodeAnalysisComponent", function () {
			return CodeAnalysisComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
		/* harmony import */
		var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
		/* harmony import */
		var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


		var CodeAnalysisComponent = /** @class */ (function () {
			function CodeAnalysisComponent(route, location, projectService) {
				this.route = route;
				this.location = location;
				this.projectService = projectService;
			}

			CodeAnalysisComponent.prototype.ngOnInit = function () {
				this.getCodeData();
			};
			CodeAnalysisComponent.prototype.ngAfterViewInit = function () {
				this.renderData();
			};
			CodeAnalysisComponent.prototype.getCodeData = function () {
				var _this = this;
				var id = this.route.snapshot.paramMap.get('id');
				this.projectService.getCodeData(id).subscribe(function (data) {
					return _this.data = data;
				});
			};
			CodeAnalysisComponent.prototype.renderData = function () {
				var graph = document.getElementById('codeGraph');
				for (var _i = 0, _a = Object.keys(this.data); _i < _a.length; _i++) {
					var key = _a[_i];
					var usage = this.data[key].usage + '%';
					// Create Nodes
					var skillNode = document.createElement('div');
					var skillText = document.createTextNode(this.data[key].name);
					// Styling Nodes
					skillNode.style.width = usage;
					skillNode.classList.add(this.data[key].name.toLowerCase(), 'graphbar');
					// Appending Nodes
					skillNode.appendChild(skillText);
					var detailsText = '';
					if (this.data[key].details) {
						var dkeys = Object.keys(this.data[key].details);
						for (var _b = 0, dkeys_1 = dkeys; _b < dkeys_1.length; _b++) {
							var dkey = dkeys_1[_b];
							if (parseInt(dkey, 10) > 0) {
								detailsText += ', ';
							}
							detailsText += this.data[key].details[dkey].name;
						}
						skillNode.dataset.hover = detailsText;
					}
					graph.appendChild(skillNode);
				}
			};
			CodeAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-code-analysis',
					template: __webpack_require__(/*! ./code-analysis.component.html */ "./src/app/code-analysis/code-analysis.component.html"),
					styles: [__webpack_require__(/*! ./code-analysis.component.sass */ "./src/app/code-analysis/code-analysis.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
					_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
					_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
			], CodeAnalysisComponent);
			return CodeAnalysisComponent;
		}());


		/***/
	}),

	/***/ "./src/app/home-page/home-page.component.html":
	/*!****************************************************!*\
    !*** ./src/app/home-page/home-page.component.html ***!
    \****************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<section class=\"section section-hero section-full-screen\">\n\t<div class=\"hero-heading\">\n\t\t<h1 class=\"animate text-shadow-pop\">{{profile.fname}} {{profile.lname}}</h1>\n\t\t<div class=\"typed-strings\">\n\t\t\t<div id=\"typed-strings\">\n\t\t\t\t<p>{{profile.jobTitle}}</p>\n\t\t\t</div>\n\t\t\t<span class=\"lead\" id=\"typed\"></span>\n\t\t</div>\n\t</div>\n\t<div class=\"hero-image\">\n\t\t<object data=\"assets\\images\\activity.svg\" type=\"image/svg+xml\">\n\t\t\t<img alt=\"working developer illustration\" src=\"assets\\images\\activity.svg\">\n\t\t</object>\n\t</div>\n</section>\n\n<section id=\"projects\" class=\"section section-projects\">\n\t<h2 class=\"section-header animate text-shadow-pop\">Things I worked on</h2>\n\t<app-projects featured=\"true\"></app-projects>\n</section>\n\n<div class=\"section section-projects-below section-banner\">\n\t<div class=\"banner-image\">\n\t\t<img alt=\"man walking by a laptop\" src=\"assets\\images\\worklife.svg\">\n\t</div>\n\t<div class=\"banner-heading\">\n\t\t<h3 class=\"animate text-shadow-pop\">Looking for more? </h3>\n\t\t<p class=\"lead\">Checkout my profile on\n\t\t\t<span *ngFor=\"let socialProfile of profile.socialProfiles;let index = index;\">\n\t\t\t\t<span *ngIf=\"index !== 0\"> and </span>\n\t\t\t\t<a class=\"link\" href=\"{{socialProfile.url}}\">{{socialProfile.name}}</a>\n\t\t\t</span>\n\t</div>\n</div>\n\n"

		/***/
	}),

	/***/ "./src/app/home-page/home-page.component.sass":
	/*!****************************************************!*\
    !*** ./src/app/home-page/home-page.component.sass ***!
    \****************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

		/***/
	}),

	/***/ "./src/app/home-page/home-page.component.ts":
	/*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/
	/*! exports provided: HomePageComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
			return HomePageComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
		/* harmony import */
		var _route_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-navigation.service */ "./src/app/route-navigation.service.ts");


		var HomePageComponent = /** @class */ (function () {
			function HomePageComponent(profileService, navigate) {
				this.profileService = profileService;
				this.navigate = navigate;
			}

			HomePageComponent.prototype.ngOnInit = function () {
				this.getProfile();
			};
			HomePageComponent.prototype.ngAfterViewInit = function () {
				this.navigate.setChildInit('typed');
			};
			HomePageComponent.prototype.getProfile = function () {
				var _this = this;
				this.profileService.getProfile(0).subscribe(function (profile) {
					return _this.profile = profile;
				});
			};
			HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-home-page',
					template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
					styles: [__webpack_require__(/*! ./home-page.component.sass */ "./src/app/home-page/home-page.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _route_navigation_service__WEBPACK_IMPORTED_MODULE_3__["RouteNavigationService"]])
			], HomePageComponent);
			return HomePageComponent;
		}());


		/***/
	}),

	/***/ "./src/app/page-not-found/page-not-found.component.html":
	/*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.html ***!
    \**************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<section class=\"section section-hero\">\n\t<div class=\"hero-heading\">\n\t\t<h1 class=\"animate text-shadow-pop\">Feeling <br/>lost?</h1>\n\t\t<p class=\"lead\">Let's get you back at safety. Go to <a class=\"link\" routerLink=\"/\">Homepage</a>.</p>\n\t</div>\n\t<div class=\"hero-image\">\n\t\t<img alt=\"UFO  and a ghost\" src=\"assets/images/404.png\">\n\t</div>\n</section>\n"

		/***/
	}),

	/***/ "./src/app/page-not-found/page-not-found.component.sass":
	/*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.sass ***!
    \**************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = ".hero-image img,\n.hero-image svg,\n.hero-image object {\n  align-self: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvQzpcXFVzZXJzXFxEaW1pdHJpc1xcd29ya3NwYWNlXFxtYXZyb3Uvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBS0UscUJBQW9CLEVBQUciLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWltYWdlIHtcblxuXHRpbWcsXG5cdHN2Zyxcblx0b2JqZWN0IHtcblx0XHRhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfSB9XG4iXX0= */"

		/***/
	}),

	/***/ "./src/app/page-not-found/page-not-found.component.ts":
	/*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/
	/*! exports provided: PageNotFoundComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
			return PageNotFoundComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


		var PageNotFoundComponent = /** @class */ (function () {
			function PageNotFoundComponent() {
			}

			PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-page-not-found',
					template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
					styles: [__webpack_require__(/*! ./page-not-found.component.sass */ "./src/app/page-not-found/page-not-found.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
			], PageNotFoundComponent);
			return PageNotFoundComponent;
		}());


		/***/
	}),

	/***/ "./src/app/profile.service.ts":
	/*!************************************!*\
    !*** ./src/app/profile.service.ts ***!
    \************************************/
	/*! exports provided: ProfileService */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "ProfileService", function () {
			return ProfileService;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
		/* harmony import */
		var _profiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profiles */ "./src/app/profiles.ts");


		var ProfileService = /** @class */ (function () {
			function ProfileService() {
			}

			ProfileService.prototype.getProfiles = function () {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_profiles__WEBPACK_IMPORTED_MODULE_3__["PROFILES"]);
			};
			ProfileService.prototype.getProfile = function (id) {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_profiles__WEBPACK_IMPORTED_MODULE_3__["PROFILES"].find(function (profile) {
					return profile.id === id;
				}));
			};
			ProfileService.prototype.getSocialProfiles = function (id) {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_profiles__WEBPACK_IMPORTED_MODULE_3__["PROFILES"].find(function (profile) {
					return profile.id === id;
				}).socialProfiles);
			};
			ProfileService.prototype.getSkills = function (id) {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_profiles__WEBPACK_IMPORTED_MODULE_3__["PROFILES"].find(function (profile) {
					return profile.id === id;
				}).skills);
			};
			ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
					providedIn: 'root'
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
			], ProfileService);
			return ProfileService;
		}());


		/***/
	}),

	/***/ "./src/app/profiles.ts":
	/*!*****************************!*\
    !*** ./src/app/profiles.ts ***!
    \*****************************/
	/*! exports provided: PROFILES */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "PROFILES", function () {
			return PROFILES;
		});
		var PROFILES = [
			{
				id: 0,
				fname: 'Dimitris',
				lname: 'Mavroudis',
				gender: 'Male',
				jobTitle: 'Front End & Wordpress Developer',
				about: '<p>I am a front end developer with 3+ years experience, based in Thessaloniki, Greece.</p><p>I code and design high quality and fully responsive websites and web apps. I take great care to ensure an exceptional user experience while keeping it clean and efficient behind the scenes.</p><p>I enjoy constantly learning and improving my skills both in programming and design and I take every opportunity build something new.</p>',
				skills: [
					{
						name: 'WordPress',
						logo: 'assets/images/logos/wordpress.png',
						type: 'cms'
					},
					{
						name: 'Liferay',
						logo: 'assets/images/logos/wordpress.png',
						type: 'cms'
					},
					{
						name: 'Git',
						logo: 'assets/images/logos/git.png',
						type: 'tool'
					},
					{
						name: 'AngularJS',
						logo: 'assets/images/logos/angular.png',
						type: 'front-end'
					},
					{
						name: 'JQuery',
						logo: 'assets/images/logos/jquery.png',
						type: 'front-end'
					},
					{
						name: 'PHP',
						logo: 'assets/images/logos/php.png',
						type: 'back-end'
					},
					{
						name: 'Gulp',
						logo: 'assets/images/logos/gulp.png',
						type: 'tool',
					},
					{
						name: 'MySQL',
						logo: 'assets/images/logos/mysql.png',
						type: 'back-end'
					},
					{
						name: 'HTML5',
						logo: 'assets/images/logos/html5.png',
						type: 'front-end'
					},
					{
						name: 'TypeScript',
						logo: 'assets/images/logos/typecript.png',
						type: 'front-end'
					},
					{
						name: 'SASS',
						logo: 'assets/images/logos/sass.png',
						type: 'front-end'
					},
					{
						name: 'Bootstrap',
						logo: 'assets/images/logos/bootstrap.png',
						type: 'front-end'
					},
					{
						name: 'Photoshop',
						logo: 'assets/images/logos/photoshop.png',
						type: 'tool'
					}
				],
				worksFor: {name: 'Freelance', url: '', logo: ''},
				socialProfiles: [
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dimitrismavroudis/',
					},
					{
						name: 'GitHub',
						url: 'https://github.com/dimavroudis',
					}
				]
			}
		];


		/***/
	}),

	/***/ "./src/app/project.service.ts":
	/*!************************************!*\
    !*** ./src/app/project.service.ts ***!
    \************************************/
	/*! exports provided: ProjectService */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "ProjectService", function () {
			return ProjectService;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
		/* harmony import */
		var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/app/projects.ts");


		var ProjectService = /** @class */ (function () {
			function ProjectService() {
			}

			ProjectService.prototype.getProjects = function (featured) {
				var projects;
				if (!(featured === undefined)) {
					projects = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_projects__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].filter(function (featuredProjects) {
						return featuredProjects.featured === featured;
					}));
				} else {
					projects = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_projects__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"]);
				}
				return projects;
			};
			ProjectService.prototype.getProject = function (id) {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_projects__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].find(function (project) {
					return project.id === id;
				}));
			};
			ProjectService.prototype.getCodeData = function (id) {
				return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_projects__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].find(function (project) {
					return project.id === id;
				}).skills);
			};
			ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
					providedIn: 'root'
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
			], ProjectService);
			return ProjectService;
		}());


		/***/
	}),

	/***/ "./src/app/project/project.component.html":
	/*!************************************************!*\
    !*** ./src/app/project/project.component.html ***!
    \************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<main *ngIf=\"project; else NotShow\" id=\"project\">\r\n\t<section class=\"section section-hero section-full-screen section-project-summary\" id=\"summary\">\r\n\t\t<div class=\"screenshots\">\r\n\t\t\t<img (load)=\"AnimateImage('laptop')\" *ngIf=\"project.images.laptop\" [src]=\"project.images.laptop\"\r\n\t\t\t\t\t alt=\"{{project.name}} laptop screenshot\" class=\"laptop\">\r\n\t\t\t<img (load)=\"AnimateImage('mobile')\" *ngIf=\"project.images.mobile\" [src]=\"project.images.mobile\"\r\n\t\t\t\t\t alt=\"{{project.name}} mobile screenshot\" class=\"mobile float-delay\">\r\n\t\t</div>\r\n\t\t<div class=\"summary\">\r\n\t\t\t<h1 class=\"animate text-shadow-pop\">{{project.name}}</h1>\r\n\t\t\t<p>{{project.summary}}</p>\r\n\t\t\t<div class=\"project-links link-group\">\r\n\t\t\t\t<a class=\"link-visit link link-lg\" data-hover=\"Visit project\" href=\"{{project.link}}\">Visit {{project.type}}</a>\r\n\t\t\t</div>\r\n\t\t\t<h4>Technologies Stack</h4>\r\n\t\t\t<app-code-analysis></app-code-analysis>\r\n\t\t</div>\r\n\t</section>\r\n</main>\r\n<ng-template #NotShow>\r\n\t<app-page-not-found></app-page-not-found>\r\n</ng-template>\r\n"

		/***/
	}),

	/***/ "./src/app/project/project.component.sass":
	/*!************************************************!*\
    !*** ./src/app/project/project.component.sass ***!
    \************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = ".section-project-summary {\n  align-items: center;\n  flex-wrap: nowrap; }\n  .section-project-summary .screenshots {\n    position: relative; }\n  .section-project-summary .screenshots img {\n      opacity: 0; }\n  .section-project-summary .screenshots img.laptop {\n        width: 590px; }\n  .section-project-summary .screenshots img.mobile {\n        position: absolute;\n        width: 240px;\n        top: 56px;\n        right: 0; }\n  .section-project-summary .summary {\n    width: 100%;\n    margin-left: 4em;\n    margin-bottom: 3em; }\n  @media screen and (max-width: 1180px) {\n  .section-project-summary .screenshots img.laptop {\n    width: 460px; }\n  .section-project-summary .screenshots img.mobile {\n    position: absolute;\n    width: 200px;\n    top: 40px;\n    right: 30px; } }\n  @media screen and (max-width: 900px) {\n  .section-project-summary {\n    flex-wrap: wrap; }\n    .section-project-summary .screenshots {\n      margin: 3em 0 1em; }\n      .section-project-summary .screenshots img.laptop {\n        max-width: 460px;\n        width: 100%; }\n      .section-project-summary .screenshots img.mobile {\n        width: 35%;\n        top: 8%;\n        right: 10%; }\n    .section-project-summary .summary {\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9DOlxcVXNlcnNcXERpbWl0cmlzXFx3b3Jrc3BhY2VcXG1hdnJvdS9zcmNcXGFwcFxccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFvQk87RUF0QnpCO0lBS0UsbUJBQWtCLEVBWUQ7RUFqQm5CO01BUUcsV0FBVSxFQVNJO0VBakJqQjtRQVdJLGFBQVksRUFBRztFQVhuQjtRQWNJLG1CQUFrQjtRQUNsQixhQUFZO1FBQ1osVUFBUztRQUNULFNBQVEsRUFBRztFQWpCZjtJQW9CRSxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUFHO0VBRXZCO0VBQ0M7SUFLRyxhQUFZLEVBQUc7RUFMbEI7SUFRRyxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFVBQVM7SUFDVCxZQUFXLEVBQUcsRUFBQTtFQUVsQjtFQUNDO0lBQ0MsZ0JBQWUsRUFlSztJQWhCckI7TUFJRSxrQkFBaUIsRUFTRDtNQWJsQjtRQU9HLGlCQUFnQjtRQUNoQixZQUFXLEVBQUc7TUFSakI7UUFXRyxXQUFVO1FBQ1YsUUFBTztRQUNQLFdBQVUsRUFBRztJQWJoQjtNQWdCRSxlQUFjLEVBQUcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2plY3Qtc3VtbWFyeSB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXG5cdC5zY3JlZW5zaG90cyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0aW1nIHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cblx0XHRcdCYubGFwdG9wIHtcblx0XHRcdFx0d2lkdGg6IDU5MHB4OyB9XG5cblx0XHRcdCYubW9iaWxlIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogMjQwcHg7XG5cdFx0XHRcdHRvcDogNTZweDtcblx0XHRcdFx0cmlnaHQ6IDA7IH0gfSB9XG5cblx0LnN1bW1hcnkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1sZWZ0OiA0ZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogM2VtOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XG5cdC5zZWN0aW9uLXByb2plY3Qtc3VtbWFyeSB7XG5cblx0XHQuc2NyZWVuc2hvdHMge1xuXG5cdFx0XHRpbWcubGFwdG9wIHtcblx0XHRcdFx0d2lkdGg6IDQ2MHB4OyB9XG5cblx0XHRcdGltZy5tb2JpbGUge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcblx0XHRcdFx0dG9wOiA0MHB4O1xuXHRcdFx0XHRyaWdodDogMzBweDsgfSB9IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXHQuc2VjdGlvbi1wcm9qZWN0LXN1bW1hcnkge1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblxuXHRcdC5zY3JlZW5zaG90cyB7XG5cdFx0XHRtYXJnaW46IDNlbSAwIDFlbTtcblxuXHRcdFx0aW1nLmxhcHRvcCB7XG5cdFx0XHRcdG1heC13aWR0aDogNDYwcHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlOyB9XG5cblx0XHRcdGltZy5tb2JpbGUge1xuXHRcdFx0XHR3aWR0aDogMzUlO1xuXHRcdFx0XHR0b3A6IDglO1xuXHRcdFx0XHRyaWdodDogMTAlOyB9IH1cblxuXHRcdC5zdW1tYXJ5IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwOyB9IH0gfVxuIl19 */"

		/***/
	}),

	/***/ "./src/app/project/project.component.ts":
	/*!**********************************************!*\
    !*** ./src/app/project/project.component.ts ***!
    \**********************************************/
	/*! exports provided: ProjectComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
			return ProjectComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
		/* harmony import */
		var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
		/* harmony import */
		var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");


		var ProjectComponent = /** @class */ (function () {
			function ProjectComponent(route, location, projectService) {
				this.route = route;
				this.location = location;
				this.projectService = projectService;
			}

			ProjectComponent.prototype.ngOnInit = function () {
				this.getProject();
			};
			ProjectComponent.prototype.getProject = function () {
				var _this = this;
				var id = this.route.snapshot.paramMap.get('id');
				this.projectService.getProject(id).subscribe(function (project) {
					return _this.project = project;
				});
			};
			ProjectComponent.prototype.AnimateImage = function (image) {
				var mockups = document.querySelectorAll('.screenshots img.' + image);
				mockups.forEach(function (element) {
					element.classList.add('float');
				});
			};
			ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-project',
					template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
					styles: [__webpack_require__(/*! ./project.component.sass */ "./src/app/project/project.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
					_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
					_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
			], ProjectComponent);
			return ProjectComponent;
		}());


		/***/
	}),

	/***/ "./src/app/projects-page/projects-page.component.html":
	/*!************************************************************!*\
    !*** ./src/app/projects-page/projects-page.component.html ***!
    \************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<section class=\"section section-hero\">\n\t<div class=\"hero-heading\">\n\t\t<h1 class=\"animate text-shadow-pop\">My projects</h1>\n\t\t<div id=\"typed-strings\">\n\t\t\t<p>From my first website to my latest work...</p>\n\t\t</div>\n\t\t<span class=\"lead\" id=\"typed\"></span>\n\t</div>\n</section>\n<section class=\"section\">\n\t<app-projects></app-projects>\n</section>\n\n"

		/***/
	}),

	/***/ "./src/app/projects-page/projects-page.component.sass":
	/*!************************************************************!*\
    !*** ./src/app/projects-page/projects-page.component.sass ***!
    \************************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzLXBhZ2UvcHJvamVjdHMtcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"

		/***/
	}),

	/***/ "./src/app/projects-page/projects-page.component.ts":
	/*!**********************************************************!*\
    !*** ./src/app/projects-page/projects-page.component.ts ***!
    \**********************************************************/
	/*! exports provided: ProjectsPageComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function () {
			return ProjectsPageComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _route_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-navigation.service */ "./src/app/route-navigation.service.ts");


		var ProjectsPageComponent = /** @class */ (function () {
			function ProjectsPageComponent(navigate) {
				this.navigate = navigate;
			}

			ProjectsPageComponent.prototype.ngAfterViewInit = function () {
				this.navigate.setChildInit('typed');
			};
			ProjectsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-projects-page',
					template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/projects-page/projects-page.component.html"),
					styles: [__webpack_require__(/*! ./projects-page.component.sass */ "./src/app/projects-page/projects-page.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_route_navigation_service__WEBPACK_IMPORTED_MODULE_2__["RouteNavigationService"]])
			], ProjectsPageComponent);
			return ProjectsPageComponent;
		}());


		/***/
	}),

	/***/ "./src/app/projects.ts":
	/*!*****************************!*\
    !*** ./src/app/projects.ts ***!
    \*****************************/
	/*! exports provided: PROJECTS */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "PROJECTS", function () {
			return PROJECTS;
		});
		var PROJECTS = [
			{
				id: 'autoconvert',
				name: 'AutoConvert Greeklish Permalinks',
				type: 'plugin',
				featured: true,
				summary: 'AutoConvert Greeklish Permalinks is the WordPress plugin that allows users to convert Greek characters to Latin (better known as greeklish) in all permalinks of posts, pages, custom post types and taxonomies.',
				highlights: [
					'Expanded on the functionality of previous plugins by adding conversion for old post and better UI',
					'My 1st plugin published on wordpress.org',
					'Over 1000 active installations',
					'The highest growing plugin in its category'
				],
				skills: [
					{
						'name': 'Wordpress',
						'usage': 80,
					},
					{
						'name': 'PHP',
						'usage': 30,
					},
					{
						'name': 'JavaScript',
						'usage': 20,
						'details': [
							{
								'name': 'jQuery',
								'usage': 90,
							},
							{
								'name': 'Gulp',
								'usage': 10,
							},
						]
					},
					{
						'name': 'CSS',
						'usage': 10,
						'details': [
							{
								'name': 'Bootstrap',
								'usage': 100,
							},
						]
					},
				],
				link: 'https://wordpress.org/plugins/autoconvert-greeklish-permalinks/',
				tags: ['WordPress', 'Plugin'],
				logo: 'assets/images/logos/autoconvert.png',
				images: {
					mobile: '',
					laptop: 'assets/images/screenshots/autoconvert-laptop.png'
				}
			},
			{
				id: 'movvin',
				name: 'movvin.com',
				featured: true,
				type: 'website',
				summary: 'Movvin is an online solution for travellers and holiday-makers wishing to book transfers from any airport or port to their desired destination and various leisure activities, provided by licensed professionals at the best prices.',
				highlights: [
					'Worked with Liferay and JSF',
					'Custom Google Maps API integration',
					'Fully responsive design'
				],
				skills: [
					{
						'name': 'Liferay',
						'usage': 30,
						'details': [
							{
								'name': 'Velocity',
								'usage': 90,
							},
							{
								'name': 'JSP',
								'usage': 10,
							}
						]
					},
					{
						'name': 'JSF',
						'usage': 60,
						'details': [
							{
								'name': 'PrimeFaces',
								'usage': 100,
							},
						]
					},
					{
						'name': 'JavaScript',
						'usage': 30,
						'details': [
							{
								'name': 'jQuery',
								'usage': 90,
							},
							{
								'name': 'AlloyUi',
								'usage': 10,
							},
							{
								'name': 'GMaps API',
								'usage': 10,
							},
						]
					},
					{
						'name': 'CSS',
						'usage': 40,
						'details': [
							{
								'name': 'Bootstrap',
								'usage': 100,
							},
						]
					},
				],
				link: 'https://movvin.com',
				tags: ['Front End'],
				logo: 'assets/images/logos/movvin.png',
				images: {
					mobile: 'assets/images/screenshots/movvin-mobile.png',
					laptop: 'assets/images/screenshots/movvin-laptop.png'
				}
			},
			{
				id: 'gostudy',
				name: 'GoStudy.gr',
				type: 'website',
				featured: true,
				summary: 'GoStudy is a career orientation platform designed to help greek high school students choose their university faculty. The project won the 2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia. ',
				highlights: [
					'Developed a custom search engine',
					'UI and UX design',
					'Use of History API',
					'2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia.'
				],
				skills: [
					{
						'name': 'Wordpress',
						'usage': 80,
					},
					{
						'name': 'PHP',
						'usage': 50,
					},
					{
						'name': 'JavaScript',
						'usage': 60,
						'details': [
							{
								'name': 'jQuery',
								'usage': 90,
							},
							{
								'name': 'Gulp',
								'usage': 10,
							},
						]
					},
					{
						'name': 'CSS',
						'usage': 20,
						'details': [
							{
								'name': 'Bootstrap',
								'usage': 100,
							},
						]
					},
				],
				link: 'https://gostudy.gr',
				tags: ['WordPress', 'Full Stack'],
				logo: 'assets/images/logos/gostudy.png',
				images: {
					mobile: 'assets/images/screenshots/gostudy-mobile.png',
					laptop: 'assets/images/screenshots/gostudy-laptop.png'
				}
			},
			{
				id: 'leadcompass',
				name: 'LeadCompass.gr',
				type: 'website',
				featured: false,
				summary: 'LeadCompass.gr aims to help young people to transition from education to the labor market through a series of e-courses, e-books, webinars, cv templates and more.',
				highlights: [
					'LMS functionality',
					'WooCommerce templates customization',
					'Custom shortcodes and plugins'
				],
				skills: [
					{
						'name': 'Wordpress',
						'usage': 60,
						'details': [
							{
								'name': 'WooCommerce',
								'usage': 50,
							},
							{
								'name': 'LearnPress',
								'usage': 50,
							},
						]
					},
					{
						'name': 'PHP',
						'usage': 30,
					},
					{
						'name': 'JavaScript',
						'usage': 40,
						'details': [
							{
								'name': 'jQuery',
								'usage': 100,
							}
						]
					},
					{
						'name': 'CSS',
						'usage': 20,
					},
				],
				link: 'https://leadcompass.gr',
				tags: ['WordPress', 'Full Stack'],
				logo: 'assets/images/logos/leadcompass.png',
				images: {
					mobile: 'assets/images/screenshots/leadcompass-mobile.png',
					laptop: 'assets/images/screenshots/leadcompass-laptop.png'
				},
			},
		];


		/***/
	}),

	/***/ "./src/app/projects/projects.component.html":
	/*!**************************************************!*\
    !*** ./src/app/projects/projects.component.html ***!
    \**************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<div class=\"projects\">\n\t<div *ngFor=\"let project of projects;let odd=odd; let even=even;\"\n\t\t\t [ngClass]=\"{ 'project-odd': odd, 'project-even': even}\"\n\t\t\t class=\"project\" id=\"{{project.id}}\">\n\t\t<div>\n\t\t\t<h3>{{project.name}}</h3>\n\t\t\t<span *ngFor=\"let tag of project.tags\" class=\"badge\">{{tag}}</span>\n\t\t\t<p>{{project.summary}}</p>\n\t\t\t<div class=\"project-links\">\n\t\t\t\t<a class=\"link-visit link link-lg\" data-hover=\"Visit project\" routerLink=\"/projects/{{project.id}}\">Visit\n\t\t\t\t\tproject</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<img alt=\"{{project.name}} logo\" class=\"animate box-shadow-pop\" src=\"{{project.logo}}\">\n\t</div>\n</div>\n"

		/***/
	}),

	/***/ "./src/app/projects/projects.component.sass":
	/*!**************************************************!*\
    !*** ./src/app/projects/projects.component.sass ***!
    \**************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = ".projects {\n  display: flex;\n  flex-direction: column; }\n\n.project {\n  display: grid;\n  grid-gap: 0 1.2em;\n  grid-template-areas: 'title image';\n  width: 70%;\n  padding: 2em 0; }\n\n.project h3 {\n    font-size: 2em; }\n\n.project img {\n    grid-area: image;\n    height: 128px; }\n\n.project.project-even {\n    text-align: right;\n    align-self: flex-end; }\n\n.project.project-even img {\n      border-radius: 129px 27px 13px 86px; }\n\n.project.project-odd {\n    grid-template-areas: 'image title'; }\n\n.project.project-odd img {\n      border-radius: 27px 129px 86px 13px; }\n\n.project:last-child {\n    margin-bottom: 0; }\n\n@media screen and (max-width: 768px) {\n  .project {\n    grid-gap: 0 0;\n    width: 100%; }\n    .project img {\n      height: 84px; }\n    .project.project-even, .project.project-odd {\n      grid-template-areas: 'image image' 'title title';\n      text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxEaW1pdHJpc1xcd29ya3NwYWNlXFxtYXZyb3Uvc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQWE7RUFDYix1QkFBc0IsRUFBRzs7QUFFMUI7RUFDQyxjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG1DQUFrQztFQUNsQyxXQUFVO0VBQ1YsZUFBYyxFQXVCUTs7QUE1QnZCO0lBUUUsZUFBYyxFQUFHOztBQVJuQjtJQVdFLGlCQUFnQjtJQUNoQixjQUFhLEVBQUc7O0FBWmxCO0lBZUUsa0JBQWlCO0lBQ2pCLHFCQUFvQixFQUdxQjs7QUFuQjNDO01BbUJHLG9DQUFtQyxFQUFHOztBQW5CekM7SUFzQkUsbUNBQWtDLEVBR087O0FBekIzQztNQXlCRyxvQ0FBbUMsRUFBRzs7QUF6QnpDO0lBNEJFLGlCQUFnQixFQUFHOztBQUVyQjtFQUVDO0lBQ0MsY0FBYTtJQUNiLFlBQVcsRUFRVztJQVZ2QjtNQUtFLGFBQVksRUFBRztJQUxqQjtNQVNFLGlEQUFnRDtNQUNoRCxpQkFBZ0IsRUFBRyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5wcm9qZWN0IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1nYXA6IDAgMS4yZW07XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSBpbWFnZSc7XG5cdHdpZHRoOiA3MCU7XG5cdHBhZGRpbmc6IDJlbSAwO1xuXG5cdGgzIHtcblx0XHRmb250LXNpemU6IDJlbTsgfVxuXG5cdGltZyB7XG5cdFx0Z3JpZC1hcmVhOiBpbWFnZTtcblx0XHRoZWlnaHQ6IDEyOHB4OyB9XG5cblx0Ji5wcm9qZWN0LWV2ZW4ge1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG5cdFx0aW1nIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEyOXB4IDI3cHggMTNweCA4NnB4OyB9IH1cblxuXHQmLnByb2plY3Qtb2RkIHtcblx0XHRncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1hZ2UgdGl0bGUnO1xuXG5cdFx0aW1nIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI3cHggMTI5cHggODZweCAxM3B4OyB9IH1cblxuXHQmOmxhc3QtY2hpbGQge1xuXHRcdG1hcmdpbi1ib3R0b206IDA7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG5cdC5wcm9qZWN0IHtcblx0XHRncmlkLWdhcDogMCAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0aW1nIHtcblx0XHRcdGhlaWdodDogODRweDsgfVxuXG5cdFx0Ji5wcm9qZWN0LWV2ZW4sXG5cdFx0Ji5wcm9qZWN0LW9kZCB7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWFyZWFzOiAnaW1hZ2UgaW1hZ2UnICd0aXRsZSB0aXRsZSc7XG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0OyB9IH0gfVxuIl19 */"

		/***/
	}),

	/***/ "./src/app/projects/projects.component.ts":
	/*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/
	/*! exports provided: ProjectsComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
			return ProjectsComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
		/* harmony import */
		var _route_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-navigation.service */ "./src/app/route-navigation.service.ts");


		var ProjectsComponent = /** @class */ (function () {
			function ProjectsComponent(projectService, navigate) {
				this.projectService = projectService;
				this.navigate = navigate;
			}

			ProjectsComponent.prototype.ngOnInit = function () {
				if (this.featured !== undefined) {
					if (this.featured === 'true') {
						this.getProjects(true);
					}
					if (this.featured === 'false') {
						this.getProjects(false);
					}
				} else {
					this.getProjects();
				}
			};
			ProjectsComponent.prototype.ngAfterViewInit = function () {
				this.navigate.setChildInit('animate');
			};
			ProjectsComponent.prototype.getProjects = function (current) {
				var _this = this;
				this.projectService.getProjects(current).subscribe(function (projects) {
					return _this.projects = projects;
				});
			};
			tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
			], ProjectsComponent.prototype, "featured", void 0);
			ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-projects',
					template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
					styles: [__webpack_require__(/*! ./projects.component.sass */ "./src/app/projects/projects.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _route_navigation_service__WEBPACK_IMPORTED_MODULE_3__["RouteNavigationService"]])
			], ProjectsComponent);
			return ProjectsComponent;
		}());


		/***/
	}),

	/***/ "./src/app/route-navigation.service.ts":
	/*!*********************************************!*\
    !*** ./src/app/route-navigation.service.ts ***!
    \*********************************************/
	/*! exports provided: RouteNavigationService */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "RouteNavigationService", function () {
			return RouteNavigationService;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


		var RouteNavigationService = /** @class */ (function () {
			function RouteNavigationService() {
				this.childInit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
				this.childInit$ = this.childInit.asObservable();
			}

			RouteNavigationService.prototype.setChildInit = function (identifier) {
				this.childInit.next(identifier);
			};
			RouteNavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
					providedIn: 'root'
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
			], RouteNavigationService);
			return RouteNavigationService;
		}());


		/***/
	}),

	/***/ "./src/app/tech-stack/tech-stack.component.html":
	/*!******************************************************!*\
    !*** ./src/app/tech-stack/tech-stack.component.html ***!
    \******************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "<p>\n\ttech-stack works!\n</p>\n"

		/***/
	}),

	/***/ "./src/app/tech-stack/tech-stack.component.sass":
	/*!******************************************************!*\
    !*** ./src/app/tech-stack/tech-stack.component.sass ***!
    \******************************************************/
	/*! no static exports found */
	/***/ (function (module, exports) {

		module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2gtc3RhY2svdGVjaC1zdGFjay5jb21wb25lbnQuc2FzcyJ9 */"

		/***/
	}),

	/***/ "./src/app/tech-stack/tech-stack.component.ts":
	/*!****************************************************!*\
    !*** ./src/app/tech-stack/tech-stack.component.ts ***!
    \****************************************************/
	/*! exports provided: TechStackComponent */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "TechStackComponent", function () {
			return TechStackComponent;
		});
		/* harmony import */
		var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


		var TechStackComponent = /** @class */ (function () {
			function TechStackComponent() {
			}

			TechStackComponent.prototype.ngOnInit = function () {
			};
			TechStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
				Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
					selector: 'app-tech-stack',
					template: __webpack_require__(/*! ./tech-stack.component.html */ "./src/app/tech-stack/tech-stack.component.html"),
					styles: [__webpack_require__(/*! ./tech-stack.component.sass */ "./src/app/tech-stack/tech-stack.component.sass")]
				}),
				tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
			], TechStackComponent);
			return TechStackComponent;
		}());


		/***/
	}),

	/***/ "./src/environments/environment.ts":
	/*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
	/*! exports provided: environment */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony export (binding) */
		__webpack_require__.d(__webpack_exports__, "environment", function () {
			return environment;
		});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
		var environment = {
			production: false
		};
		/*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


		/***/
	}),

	/***/ "./src/main.ts":
	/*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
	/*! no exports provided */
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
		__webpack_require__.r(__webpack_exports__);
		/* harmony import */
		var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
		/* harmony import */
		var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
		/* harmony import */
		var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
		/* harmony import */
		var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


		if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
			Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
		}
		Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
			.catch(function (err) {
				return console.error(err);
			});


		/***/
	}),

	/***/ 0:
	/*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
	/*! no static exports found */
	/***/ (function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(/*! C:\Users\Dimitris\workspace\mavrou\src\main.ts */"./src/main.ts");


		/***/
	})

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
