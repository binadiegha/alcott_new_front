import Dashboard from "./views/Dashboard.js";
import NewShipment from "./views/NewShipment.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]); 

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

// console.log('js is loaded...');
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};
const router = async () => {

    // console.log(pathToRegx("/posts/:id"));
   
   
    const routes = [
        {path: "/404", view: ()=> console.log('404 Page not found...') },
        {path: "/", view: ()=> console.log('rendering home...') },
        {path: "/Dashboard", view: Dashboard },
        {path: "/Dashboard/:id", view: NewShipment }
        // {path: "/", view: ()=> console.log('rendering home...') },
        // {path: "/dashboard", view: ()=> console.log('rendering dashboard...') },
        // {path: "/settings", view: ()=> console.log('rendering settings...') }
    ];

    // Test routes for match
    const potentialMatches = routes.map( route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    };

    const view = new match.route.view(getParams(match));
    
    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view());
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

window.addEventListener("load", (e) => {
    e.preventDefault();
    navigateTo(e.target.href);
})

