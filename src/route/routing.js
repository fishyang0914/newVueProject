import home from 'components/Home';
import about from 'components/About';
import contact from 'components/Contact';

export default {
    routes: [
        { path: '/',             name: 'home',         component: home },
        { path: '/about',        name: 'about',        component: about },
        { path: '/contact',      name: 'contact',      component: contact },
    ]
}
