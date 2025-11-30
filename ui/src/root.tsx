import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { themeSessionResolver } from "@/lib/sessions.server";
import clsx from "clsx";
import { SidebarProvider } from '@/components/ui/sidebar';

// Return the theme from the session storage using the loader
export async function loader({ request }) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}
// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData();
  return (
      <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
        <AppLayout />
      </ThemeProvider>
  )
}


export function AppLayout() {
  const data = useLoaderData();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
      <meta charSet="UTF-8" />
      <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SuukuECOM</title>
      <Meta />
      <Links />
    </head>
    <body>
    <Outlet />
    <ScrollRestoration />
    <Scripts />
    </body>
    </html>
  );
}


