import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import './style.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ThereHQ" />
        <meta
          name="twitter:title"
          content="There - Timezones in your menubar"
        />
        <meta
          name="twitter:description"
          content="Track local time of your friends, teammates and family. You can set photo and name and add them to your menubar."
        />
        <meta name="twitter:image" content="https://there.pm/twitter-og.jpg" />
        <meta name="og:image" content="https://there.pm/twitter-og.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
