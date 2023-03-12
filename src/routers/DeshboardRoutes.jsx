import { Routes, Route } from 'react-router-dom';
import { Home, ErrorPage, Cart, Login, Signup, About, Product, Contact, SingleProduct } from "../pages/"
import { Navbar } from "../components/"
import { Container } from "@mui/material"
import { SellOfferNote } from "../features/"

const AppRouters = () => {
  return (
    <>
      <SellOfferNote />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default AppRouters;
