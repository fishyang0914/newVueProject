import home from 'views/Home';
import about from 'views/About';
import contact from 'views/Contact';

export default {
    routes: [
        { path: '/',             name: 'home',         component: home },
        { path: '/about',        name: 'about',        component: about },
        { path: '/contact',      name: 'contact',      component: contact },
    ]
}
