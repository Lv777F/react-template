import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		lazy: async () => ({
			Component: (await import("./pages/Home")).default,
		}),
	},
]);

export default router;
