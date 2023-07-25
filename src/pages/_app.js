import "../app/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        {/* This is the header component. You can use it to display common elements like navigation menus at the top of each page. */}
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        {/* // This is the footer component. You can use it to display common elements at the bottom of each page, such as copyright notices or links. */}
      </footer>
    </div>
  );
}
