export default [
  {
    path: '/category',
    name: "Category",
    meta: {
      title: 'categories'
    },
    component: () => import('@/pages/admin/category/Index')
  },

  {
    path: '/create-category',
    name: 'CreateCategory',
    meta: {
      title: 'create.category'
    },
    component: () => import('@/pages/admin/category/Create')
  },
  {
    path: '/update-category',
    name: 'UpdateCategory',
    meta: {
      title: 'update.category'
    },
    component: () => import('@/pages/admin/category/Update')
  }
]