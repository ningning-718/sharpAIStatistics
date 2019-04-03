import { Router } from 'meteor/iron:router';

import './layout.html';
import './home.html';

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('Home');
});