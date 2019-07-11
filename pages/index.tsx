import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Typography variant="body2">hello</Typography>
    </Layout>
  );
};

export default IndexPage;