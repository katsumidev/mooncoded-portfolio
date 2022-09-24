import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import {
  Container,
  PostData,
  PostTitle,
  PostSubTitle,
  PostImage,
  PostContent,
} from "../../styles/pages/Blog";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { AiFillCalendar } from "../../styles/Icons";
import hljs from "highlight.js";

function blog({ data, content }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Container>
      <PostData>
        <span>
          <AiFillCalendar />
          <sub>{data.date}</sub>
        </span>
        <PostTitle>{data.title}</PostTitle>
        <PostSubTitle>{data.subtitle}</PostSubTitle>
      </PostData>
      <PostImage alt={data.title} src={data.image} />
      <PostContent>
        <Markdown>{content}</Markdown>
      </PostContent>
    </Container>
  );
}

export const getStaticProps = async (context) => {
  const { id } = context.params; // extrai o id do path vindo do contexto da função getStaticPaths

  const data_post = fs.readFileSync(
    path.join("src/posts", `${id}.md`),
    "utf-8"
  ); // lê o arquivo com esse id

  const { data } = matter(data_post); // extrai o frontmatter dele e converte no objeto data
  const { content } = matter(data_post); // extrai o conteudo do markdown e joga no objeto content

  return {
    props: {
      // retorna os dados
      content,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts")); // lê todos os arquivos nesse diretório

  const paths = files.map((post) => ({
    params: {
      id: post.replace(".md", ""),
    },
  })); // para cada arquivo cria um path que retorna um id, que é o slug do post

  return {
    // retorna todos os paths
    paths,
    fallback: false,
  };
};

export default blog;
