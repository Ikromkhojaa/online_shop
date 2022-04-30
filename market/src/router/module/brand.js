export default [
  {
    path: '/brand',
    name: "Brand",
    meta: {
      title: 'brands'
    },
    component: () => import('@/pages/admin/brand/Index.vue')
  },

  {
    path: '/create-brand',
    name: 'CreateBrand',
    meta: {
      title: 'create.brand'
    },
    component: () => import('@/pages/admin/brand/Create')
  },
  {
    path: '/update-brand/:id',
    name: 'UpdateBrand',
    props: true,
    meta: {
      title: 'update.brand'
    },
    component: () => import('@/pages/admin/brand/Update')
  }
]