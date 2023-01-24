import { Routes, Route } from 'react-router-dom';

import { Default } from './layout/default';
import { Products } from './pages/Products';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Products />} />
      </Route>
    </Routes>
  );
}
