"use strict";
require('jquery');
var fastclick_1 = require('fastclick');
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Damage Calculator';
        config.map([
            { route: ['', 'attack-calc' ], name: 'attack-calc' , moduleId: 'pages/attack-calc'   , nav: true, title: 'Attack' },
            { route: 'surge-calc'    , name: 'surge-calc'      , moduleId: 'pages/surge-calc'    , nav: true, title: 'Surges' },
            { route: 'defence-calc'  , name: 'defence-calc'    , moduleId: 'pages/defence-calc'  , nav: true, title: 'Defence' },
            { route: 'attribute-test', name: 'attribute-test'  , moduleId: 'pages/attribute-test', nav: true, title: 'Attribute Test' },
            { route: 'info'          , name: 'info'            , moduleId: 'pages/info'          , nav: true, title: 'Info' },
        ]);
        this.router = router;
    };
    App.prototype.attached = function () {
        fastclick_1.attach(document.body);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map
