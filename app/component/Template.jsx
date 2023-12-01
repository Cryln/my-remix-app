// template.jsx
import React from "react";
import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";

export default function Template({ title, children }) {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
