import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import IndexCard from "../components/IndexCard";
import IndexTextField from "../components/IndexTextField";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const [text, setText] = useState("");
  const [googleEnText, setGoogleEnText] = useState("");
  const [googleJaText, setGoogleJaText] = useState("");

  const updateText = (text: string): void => {
    setText(text);
  };

  useEffect(() => {
    if (text === "") {
      setGoogleEnText("");
      setGoogleJaText("");
      return;
    }

    fetch(
      `https://script.google.com/macros/s/AKfycbwW5mcKD7UaFboSHFML6fcTUk7EmjrCI5lNEMATGV_-o2sB2Rs/exec?text=${text}&source=ja&target=en`,
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((result) => setGoogleEnText(result.text));

    fetch(
      `https://script.google.com/macros/s/AKfycbwW5mcKD7UaFboSHFML6fcTUk7EmjrCI5lNEMATGV_-o2sB2Rs/exec?text=${text}&source=en&target=ja`,
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((result) => setGoogleJaText(result.text));
  });

  return (
    <Layout title="とらのすけ">
      <Typography variant="h3">とらのすけ - toranosuke</Typography>
      <IndexTextField updateText={updateText} />
      <IndexCard title="Google 翻訳 (Ja->En)" description={googleEnText} />
      <IndexCard title="Google 翻訳 (En->Ja)" description={googleJaText} />
    </Layout>
  );
};

export default IndexPage;
