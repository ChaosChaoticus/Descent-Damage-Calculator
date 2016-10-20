import 'jquery';
import {attach as attachFastClick} from 'fastclick';

export class App {
    public router: any;

    configureRouter(config, router) {
        config.title = 'Damage Calculator';
        config.map([
            { route: ['', 'attack-calc'], name: 'attack-calc'   , moduleId: 'pages/attack-calc'   , nav: true, title: 'Attack' },
            { route: 'surge-calc'       , name: 'surge-calc'    , moduleId: 'pages/surge-calc'    , nav: true, title: 'Surges' },
            { route: 'defence-calc'     , name: 'defence-calc'  , moduleId: 'pages/defence-calc'  , nav: true, title: 'Defence' },
            { route: 'attribute-test'   , name: 'attribute-test', moduleId: 'pages/attribute-test', nav: true, title: 'Attribute Test' },
        ]);

        this.router = router;
    }

    attached() {
        attachFastClick(document.body);
    }
}
