import React from "react";
import Giscus from "@giscus/react";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");

export default function Comment() {
  return (
    <Giscus
      class="comments"
      repo="RohitShelkeBot/Community-Library"
      repoId="R_kgDOIFxHkQ"
      category="General"
      categoryId="DIC_kwDOIFxHkc4CRsax"
      mapping="url"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme={darkThemeMq.matches ? "light" : "dark"}
      lang="en"
      loading="lazy"
    />
  );
}
