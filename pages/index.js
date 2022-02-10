import "animate.css";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Instagram, X } from "react-feather";

export default function Home({ post }) {
  const [isPost, setIsPost] = React.useState(false);

  return (
    <>
      {isPost ? (
        <div
          className="container-fluid d-flex justify-content-center align-items-center flex-column animate__animated animate__fadeIn"
          style={{
            backgroundColor: "black",
            zIndex: "999",
            position: "absolute",
            top: "0",
            minHeight: "100vh",
            overflow: "scroll",
          }}
        >
          <X
            onClick={() => setIsPost(false)}
            style={{ cursor: "pointer" }}
            className={"mt-1 " + styles.button}
          />
          <div
            className="p-3 "
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      ) : null}
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Head>
          <title>Dominik Brendan</title>
          <meta
            name="description"
            content="The official website for singer and composer Dominik Brendan"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="row d-flex flex-direction-column">
          <img
            src="https://hungry-driscoll.77-68-115-165.plesk.page/wp-content/uploads/2022/02/logo-1.png"
            className="img-fluid"
            alt="Dominik Brendan Logo"
            style={{ maxWidth: "500px" }}
          />
          <div
            style={{ maxWidth: "500px" }}
            className="d-flex flex-direction-row justify-content-between align-items-center"
          >
            <p className="mt-4">
              <a href="https://www.instagram.com/dominikbrendan/">
                <Instagram size={33} className={styles.button} />
              </a>
            </p>
            <h2
              style={{ fontWeight: "lighter", cursor: "pointer" }}
              className={"animate__animated animate__flash " + styles.button}
              onClick={() => setIsPost(true)}
            >
              What am I doing now?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://hungry-driscoll.77-68-115-165.plesk.page/index.php/wp-json/wp/v2/pages/12"
  );
  const post = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}
