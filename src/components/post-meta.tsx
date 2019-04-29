import React from "react";
import styles from "./post-meta.module.css";

export type PostMetaProps = {
  children: any;
};

export function PostMeta({ children }: PostMetaProps) {
  return <p className={styles.postMeta}>{children}</p>;
}
