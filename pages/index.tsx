import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import IndexCard from "../components/IndexCard";
import IndexTextField from "../components/IndexTextField";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const [text, setText] = useState("");
  const [googleappstext, setGoogleappstext] = useState("");
  const [googletext, setGoogletext] = useState("");
  const [bingtext, setBingtext] = useState("");
  const [deepltext, setDeepltext] = useState("");

  const updateText = (text: string): void => {
    setText(text);
  };

  useEffect(() => {
    if (text === "") {
      setGoogleappstext("");
      setGoogletext("");
      setBingtext("");
      setDeepltext("");
      return;
    }

    fetch(
      `https://script.google.com/macros/s/AKfycbwW5mcKD7UaFboSHFML6fcTUk7EmjrCI5lNEMATGV_-o2sB2Rs/exec?text=${text}&source=ja&target=en`
    )
      .then((res) => res.json())
      .then((result) => setGoogleappstext(result.text));

    fetch(`https://trans-puppet.herokuapp.com/google?text=${text}`)
      .then((res) => res.json())
      .then((result) => setGoogletext(result.text))
      .catch((e) => console.error(e));

    fetch(`https://trans-puppet.herokuapp.com/bing?text=${text}`)
      .then((res) => res.json())
      .then((result) => setBingtext(result.text))
      .catch((e) => console.error(e));

    fetch(`https://trans-puppet.herokuapp.com/deepl?text=${text}`)
      .then((res) => res.json())
      .then((result) => setDeepltext(result.text))
      .catch((e) => console.error(e));
  });

  return (
    <Layout title="とらのすけ">
      <Typography variant="h3">とらのすけ - toranosuke</Typography>
      <IndexTextField updateText={updateText} />
      <IndexCard title="Google 翻訳 (GAS)" description={googleappstext} />
      <IndexCard title="Google 翻訳" description={googletext} />
      <IndexCard title="Bing 翻訳" description={bingtext} />
      <IndexCard title="Deepl" description={deepltext} />
    </Layout>
  );
};

export default IndexPage;
