# react-portfolio-boilerplate
Boilerplate for a portfolio site in React. It implements all of the regulars of the React ecosystem - Redux, React Router etc.

**Routing** - I used the react-router library to handle loading the various components with changes of route. I also handled sub-routes for the blog and works section with parameters being pulled from the route itself which was used to get data from a backend and populate the page. The sliding animations were done using simple CSS classes. 

**Redux** - I had implemented pagination for the works and blog section but it would revert to the first page if you would navigate elsewhere. To maintain the last viewed page I used Redux to maintain the states. Later on when the number of projects and blogs become too much I'll probably convert the pagination to route based with individual 'pages' being called from the server. 

**Loading** - I implemented the loading screens using image events. Images emit events upon fully loading so I wrapped up all the images on the site in a custom component. A function would lsiten to these image events and would fade out the loading overlay when all the images nested within a DOM element were fully loaded.
