import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import IndexCard from "../components/IndexCard";
import IndexTextField from "../components/IndexTextField";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const [text, setText] = useState("");

  const updateText = (text: string): void => {
    setText(text);
  };

  return (
    <Layout title="とらのすけ">
      <Typography variant="h3">とらのすけ - toranosuke</Typography>
      <IndexTextField updateText={updateText} />
      <IndexCard title="Input Text" description={text} />
    </Layout>
  );
};

export default IndexPage;
