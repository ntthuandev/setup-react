import config from "~/config";

// Layouts
import { HeaderOnly } from "~/layouts";

// Pages
import HomePage from "~/pages/HomePage";
import { LoginPage } from "~/pages/LoginPage";
import PostsPage from "~/pages/PostsPage";
import ProfilePage from "~/pages/ProfilePage";
import RegisterPage from "~/pages/RegisterPage";

const publicRoutes = [
  {
    path: config.routes.home,
    component: HomePage,
  },
  {
    path: config.routes.posts,
    component: PostsPage,
  },
  {
    path: config.routes.login,
    component: LoginPage,
    layout: null,
  },
  {
    path: config.routes.register,
    component: RegisterPage,
    layout: null,
  },
];

const privateRoutes = [
  {
    path: config.routes.profile,
    component: ProfilePage,
    layout: HeaderOnly,
  },
];

export { publicRoutes, privateRoutes };
