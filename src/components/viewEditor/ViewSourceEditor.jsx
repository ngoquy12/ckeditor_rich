import React from "react";
import "ckeditor5/ckeditor5.css";
import "./view-editor.css";

export default function ViewSourceEditor({ source }) {
  return (
    <>
      <div
        className="editor-container ck-content"
        dangerouslySetInnerHTML={{ __html: source }}
      />
    </>
  );
}
