import { useEffect, useState } from "react";

const BlogEnglish = () => {
  const [titulo, setTitulo] = useState("Blog");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return (
    <div>
      <h1> Em contrução</h1>
    </div>
  );
};

export default BlogEnglish;
