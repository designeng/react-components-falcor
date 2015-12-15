var Router = require('falcor-router');

var items = [
    {name: "Acura", href: "/acura/"}, 
    {name: "Nissan", href: "/nissan/"},
    {name: "Ford" , href: "/ford/"}
];
    
var NavigationRouter = Router.createClass([
        {
            route: 'items',
            get: () => {
                console.log("ITEMS ROUTE::::", items);
                return {path: ['items'], value: items}
            }
        },
        {
            route: 'items.add',
            call: (callPath, args) => {
                console.log(callPath, args);
                var newItem = args[0];

                return [
                    {
                        path: ['items', items.length-1],
                        value: newItem
                    },
                    {
                        path: ['items', 'length'],
                        value: items.length
                    }
                ]
            }
        }
    ]);

module.exports = NavigationRouter;