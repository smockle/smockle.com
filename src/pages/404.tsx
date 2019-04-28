import React from "react";
import { HomeLayout, Meta } from "../components";

export default function NotFoundPage() {
  return (
    <HomeLayout>
      <Meta title="404: Not found" />
      <main>
        <h1>404: Not found</h1>
      </main>
    </HomeLayout>
  );
}
