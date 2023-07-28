//Important Setting up a react project using vite will require to install es lint npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
//Important create a .eslintrc.json file and add export react-app then import into vite config and add to dependencie array
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
