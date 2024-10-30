import Sub1Component from "@/components/vue06_router/Sub1Component.vue";
import Sub2Component from "@/components/vue06_router/Sub2Component.vue";
import CommunityPage from "@/pages/CommunityPage.vue";
import GrammarPage from "@/pages/GrammarPage.vue";
import PostPage from "@/components/vue07_statement/PostStatementComponent.vue";
import ProductPage from "@/pages/ProductPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ExampleRouterPage from "@/pages/ExampleRouterPage.vue";
import DynamicRoutingComponent from "@/components/vue06_router/DynamicRoutingComponent.vue";
import NestingRoutingComponent from "@/components/vue06_router/NestingRoutingComponent.vue";
import StatementPage from "@/pages/StatementPage.vue";
import MemberPage from "@/pages/MemberPage.vue";
import WYSIWYGPage from "@/pages/WYSIWYGPage.vue";
import ExceptionPage from "@/pages/ExceptionPage.vue";
import { useMemberStore } from "@/store/useMemberStore";
import CompositionAPIPage from "@/pages/CompositionApiPage.vue";
import ValidationPage from "@/pages/ValidationPage.vue";
import TestPage from "@/pages/TestPage.vue";

const requireLogin = (from, to, next) => {
    if(useMemberStore().isLoggedIn){
        return next;
    }
    next(new Error("에러"));
    next("/login");
}
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/grammar", component: GrammarPage},
        {path: "/community", component: CommunityPage},
        {path: "/product", component: ProductPage},
        {path: "/product", component: PostPage},
        {
            path: "/example-router", 
            component: ExampleRouterPage,
            children: [
                {
                    // 동적 라우팅으로 파라미터 가져오기
                    path: "/one/:idx", 
                    component: DynamicRoutingComponent,
                },
                {   
                    // 중첩 라우팅
                    path: "/two", 
                    component: NestingRoutingComponent, 
                    children: [
                        { path: "sub1", component: Sub1Component },
                        { path: "sub2", component: Sub2Component },
                    ],
                }
            ],
        },
        {path: "/statement", component: StatementPage},
        {path: "/member", component: MemberPage},
        {path: "/wysiwyg", beforeEnter: requireLogin, component: WYSIWYGPage},
        {path: "/exception", component: ExceptionPage},
        {path: "/compositionApi", component: CompositionAPIPage},
        {path: "/validation", component: ValidationPage},
        {path: "/test", component: TestPage}

    ],
});

// 예외처리
router.onError(error => {
    console.log(error);
})
export default router;