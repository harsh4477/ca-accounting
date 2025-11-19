import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("admin/services", "routes/admin.services.tsx"),
    route("admin/experts", "routes/admin.experts.tsx"),
    route("admin/insights", "routes/admin.insights.tsx"),
] satisfies RouteConfig;