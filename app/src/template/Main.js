import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListArticle from '../page/ListArticle';
import DescriptionArticle from '../page/DescriptionArticle';
import List from '../page/admin/List';
import Create from '../page/admin/Create';
import Update from '../page/admin/Update';

export default function Main() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<ListArticle />} />
          <Route exact path="/crud" element={<List />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update/:id" element={<Update />} />
          <Route exact path="/:slug" element={<DescriptionArticle />} />
          <Route path="*" element={<DescriptionArticle />} />
      </Routes>
    </Router>
  );
}
