import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/blog/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:stock" element={<Index />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
