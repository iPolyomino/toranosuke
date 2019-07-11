import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import IndexCard from "../components/IndexCard";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Typography variant="h3">Hagi</Typography>
      <IndexCard title="About Hagi" description="This is description." />
    </Layout>
  );
};

export default IndexPage;
