import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import SlidePage from "../layouts/SlidePage";
import Cover from "./Cover";
import SpeakerNotes from "./SpeakerNotes";
import Step from "./Step";
import Steps from "./Steps";
import { motion } from "framer-motion";
import Image from 'next/image'

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props;
    const language = className.replace("language-", "");
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    );
  },
  img: (props) => {
    //TODO: Determine width/height
    const { src } = props;
    return <div>
            <Image src={src} layout="fill" objectFit="contain" />
          </div>

  },
  Cover,
  SlidePage,
  SpeakerNotes,
  Step,
  Steps,
  motion,
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
