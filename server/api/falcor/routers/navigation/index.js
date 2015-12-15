var Router = require('falcor-router');
var When = require('when');

var navigationData = {
        names: [
            {name: 'a'},
            {name: 'b'},
            {name: 'c'}
        ]
    };
    
var NamesRouter = Router.createClass([
        {
            route: 'names[{integers:nameIndexes}]["name"]',
            get: (pathSet) => {
                var results = [];
                pathSet.nameIndexes.forEach(nameIndex => {
                    if (navigationData.names.length > nameIndex) {
                        results.push({
                            path: ['names', nameIndex, 'name'],
                            value: navigationData.names[nameIndex].name
                        })
                    }
                })
                return results
            }
        },
        {
            route: 'names.length',
            get: () => {
                // return {path: ['names', 'length'], value: navigationData.names.length}
                return When.promise((resolve, reject, notify) => {
                    setTimeout(() => resolve({path: ['names', 'length'], value: navigationData.names.length}) , 1000);
                })
            }
        },
        {
            route: 'names.add',
            call: (callPath, args) => {
                console.log(callPath, args);
                var newName = args[0];

                navigationData.names.push({name: newName})

                return [
                    {
                        path: ['names', navigationData.names.length-1, 'name'],
                        value: newName
                    },
                    {
                        path: ['names', 'length'],
                        value: navigationData.names.length
                    }
                ]
            }
        }
    ]);

module.exports = NamesRouter;