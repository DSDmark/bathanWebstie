import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DeshboardRouters from "./DeshboardRoutes.jsx"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DeshboardRouters />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter;
