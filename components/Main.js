import Image from "next/image";
import { Inter } from "@next/font/google";
import classes from "@/components/Main.module.css";
import { Links } from "../components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={classes.main}>
      <div className={classes.description}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={classes.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <Links />
    </main>
  );
}
