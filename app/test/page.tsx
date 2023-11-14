'use client';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import Image from 'next/image';
import { TestingContent } from './testingContent';
import s from './instructions.module.css';

type Props = {
  params: {
    id: string;
  };
};

export default function Test({ params: { id } }: Props) {
  // const post = await getSinglePostData(id);
  // const articleTextHTML = { __html: post.body };

  useEffect(() => {
    // const divEl = document.getElementById('rural');
    // console.log(1, divEl?.outerHTML);
    // console.log(2, divEl?.innerHTML);
    // console.log(ReactDOMServer.renderToStaticMarkup(<TestingContent />));
  }, []);

  return (
    <article>
      <h1>Установка Node.js + NPM</h1>
      <div id="rural" className={s.content}>
        <TestingContent />
      </div>
    </article>
  );
}
