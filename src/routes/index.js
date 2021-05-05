import { createRouter as createVueRouter } from "vue-router";
import Product from "../views/Product";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  }
];

function createRouter(history) {
  const router = createVueRouter({
    history,
    routes,
  })

  return router;
}

export { createRouter };
