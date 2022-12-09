import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    require("jquery/dist/jquery");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle")
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            RPL Guild
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/initiatives">Initiatives</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="py-4">
          <Component {...pageProps} />
        </div>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          Get in touch with us on Slack in{" "}
          <a
            className="text-dark"
            href="https://deliveryhero.slack.com/archives/C0402517ESV"
          >
            #pd-rs-platform_guild
          </a>
        </div>
      </footer>
    </>
  );
}
