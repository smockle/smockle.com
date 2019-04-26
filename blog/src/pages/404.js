import React from "react";

import Layout from "../components/layout";
import Meta from "../components/meta";

const NotFoundPage = () => (
  <Layout>
    <Meta title="404: Not found" />
    <main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
);

export default NotFoundPage;
