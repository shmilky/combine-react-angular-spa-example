import { start, registerApplication } from 'single-spa'

window.sharedState = {
    messages: []
};

function step1 () {
    return location => location.pathname.indexOf('step-1') >= 0;
}

function step2() {
    return location => location.pathname.indexOf('step-2') >= 0;
}

function step3 () {
    return location => location.pathname.indexOf('step-3') >= 0;
}

registerApplication('react-layout', () => import('../react/layout.spa.app.js'), () => true);
registerApplication('react-step-1', () => import('../react/step.spa.app.js'), step1());
registerApplication('angular-step-2', () => import('../angularJS/angularJS.app.js'), step2());
registerApplication('react-step-3', () => import('../react/step.spa.app.js'), step3());

start();
