import React, { useState } from "react";
import "./App.css";
import BaseCKEditor from "./components/BaseCKEditor";
import ViewSourceEditor from "./components/viewEditor/ViewSourceEditor";

export default function App() {
  const [content, setContent] = useState("");

  const handleChangeContent = (value) => {
    setContent(value);
  };
  return (
    <div>
      <BaseCKEditor changeData={handleChangeContent} value={content} />

      <ViewSourceEditor source={content} />
    </div>
  );
}
