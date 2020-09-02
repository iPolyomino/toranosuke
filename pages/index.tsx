import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import IndexCard from "../components/IndexCard";
import IndexTextField from "../components/IndexTextField";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const [text, setText] = useState("");
  const [gtext, setGtext] = useState("");

  const updateText = (text: string): void => {
    setText(text);
  };

  useEffect(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbwW5mcKD7UaFboSHFML6fcTUk7EmjrCI5lNEMATGV_-o2sB2Rs/exec";
    fetch(`${url}?text=${text}&source=ja&target=en`)
      .then((res) => res.json())
      .then((result) => {
        if (result.code === 200) {
          setGtext(result.text);
        } else {
          setGtext("");
        }
      });
  });

  return (
    <Layout title="とらのすけ">
      <Typography variant="h3">とらのすけ - toranosuke</Typography>
      <IndexTextField updateText={updateText} />
      <IndexCard title="Google 翻訳" description={gtext} />
    </Layout>
  );
};

export default IndexPage;
