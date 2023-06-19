import React, { useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import readme from "../../docs.md";

const DocumentationPage = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(readme)
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        setMarkdown(text)
      })
  }, [])

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default DocumentationPage;
