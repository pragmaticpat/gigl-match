import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/game">Play GiglMatch</Link>
      </div>
    </Layout>
  );
}
