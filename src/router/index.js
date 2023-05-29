import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EmployeeInformationView from '../views/EmpInfoView.vue'
import HrEmpManagementView from '../views/HrEmpManagementView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import checkAuth from '../middleware/checkAuth'
import RequestOT from '../views/RequestOTView.vue'
import requestOff from '../views/RequestOffView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        middleware: checkAuth
      }
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFound,
      meta: {
        // middleware: checkAuth
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        // middleware: checkAuth
      }
    },
    {
      path: '/hrEmpManagement',
      name: 'hrempmanagement',
      component: HrEmpManagementView,
      meta: {
        // middleware: checkAuth
      }
    },
    {
      path: '/employee',
      name: 'empinfo',
      component: EmployeeInformationView,
      meta: {
        middleware: checkAuth
      }
    },
    {
      path: '/request-ot',
      name: 'request-ot',
      component: RequestOT,
      meta: {
        middleware: checkAuth
      }
    },
    {
      path: '/request-off',
      name: 'request-off',
      component: requestOff,
      meta: {
        middleware: checkAuth
      }
    }
  ]
})

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

const defaultTitle = 'LOG OT'
router.beforeEach((to, from, next) => {
  document.title = to.name.toUpperCase() || defaultTitle
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})


export default router
