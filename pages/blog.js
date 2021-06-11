import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Divider } from "@chakra-ui/layout";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Aprende JavaScript con Carlos Azaustre</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>carlosazaustre.es</h1>

        <Divider>
          {posts.map((post) => (
            <Link href={post.slug} key={post.slug}>
              <a>
                <h2>{post.title} &rarr;</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </Divider>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return {
    props: { posts },
  };
}
