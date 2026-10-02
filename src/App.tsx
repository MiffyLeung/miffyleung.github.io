import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { resolveRoute } from "./routes";
import { mountInteractions } from "./motion/interactions";

export function App({ path }: { path: string }) {
  const route = resolveRoute(path);
  useEffect(() => {
    document.body.className = route?.bodyClass ?? "routed-page";
    document.title = route?.title ?? "Page not found · Miffy Leung";
    return mountInteractions();
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header active={route?.active ?? "work"} />
      <div id="header-sentinel" aria-hidden="true" />
      {route ? (
        <route.Component />
      ) : (
        <main id="main-content" className="wrap study-main">
          <h1>That page has moved.</h1>
          <p>
            <a href="/">Back to my portfolio ↗</a>
          </p>
        </main>
      )}
      <Footer />
    </>
  );
}
