import "../styles/globals.css";
import type { AppProps } from "next/app";
import useStyles from "../components/useStyles";
import TopBar from "../components/TopBar";

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
