import { App } from './components/App';
const routes = [
    {
        path: "/",
        element: <App />, // This will trigger the App component for the root path
    },
    {
        path: "/:name",  // Dynamic path for other routes
        element: <App />,
    },


]

export default routes;
