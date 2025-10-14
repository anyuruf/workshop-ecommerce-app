import {
  route,
} from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
   route("/", "./pages/LandingPage/HomePage.jsx"),
  route("*?", "catchall.jsx"),
];
