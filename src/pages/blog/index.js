import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, MainWrapper, Header, Title, Letter } from "./styles";
import PostCard from "../../components/PostCard";
import { useRouter } from "next/router";
import { Flip } from "react-reveal";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

export default function blog({ posts }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Moon Coded - Blog</title>
      </Head>
      <Header>
        <p>tutorials | documentation | hacks | life </p>
        <Title>
          <Letter className="stretch">B</Letter>
          <Letter>L</Letter>
          <Letter>O</Letter>
          <Letter>G</Letter>
        </Title>
        <hr />
      </Header>
      <MainWrapper>
        <Flip left>
          {posts.map((post, index) => {
            return (
              <PostCard
                key={index}
                date={post.data.date}
                title={post.data.title}
                image={post.data.image}
                description={post.data.description}
                categories={post.data.tags}
                onClick={() => router.push(`/blog/${post.slug}`)}
              />
            );
          })}
        </Flip>
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
