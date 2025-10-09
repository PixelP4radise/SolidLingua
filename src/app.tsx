import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { I18nProvider } from "~/i18n/i18n-context";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense>
            <I18nProvider>{props.children}</I18nProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
