import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, MainWrapper } from "./styles";
import PostCard from "../../components/PostCard";
import { useRouter } from "next/router";
import { Fade, Flip, Zoom } from "react-reveal";
import Tilt from "react-parallax-tilt";
import PageTitle from "../../components/PageTitle";

export default function blog({ posts }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Moon Coded - Blog</title>
      </Head>
      <PageTitle title="blog" stretchedLetter="b" overlayTitle="tutorials | documentation | hacks | life" />
      <MainWrapper>
        <Zoom>
          {posts.map((post, index) => {
            return (
              <Tilt
                tiltReverse={true}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                gyroscope={true}
              >
                <PostCard
                  key={index}
                  date={post.data.date}
                  title={post.data.title}
                  image={post.data.image}
                  description={post.data.description}
                  categories={post.data.tags}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                />
              </Tilt>
            );
          })}
        </Zoom>
      </MainWrapper>
    </Container>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownMetaData = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownMetaData);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
