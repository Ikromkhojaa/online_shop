export default [
  {
    path: '/product',
    name: "Product",
    meta: {
      title: 'products'
    },
    component: () => import('@/pages/admin/product/Index')
  },

  {
    path: '/create-product',
    name: 'CreateProduct',
    meta: {
      title: 'create.product'
    },
    component: () => import('@/pages/admin/product/Create')
  },
  {
    path: '/update-product',
    name: 'UpdateProduct',
    meta: {
      title: 'update.product'
    },
    component: () => import('@/pages/admin/product/Update')
  }
]