module.exports = [
"[project]/app/blogs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
// 1. Define the GraphQL query to fetch the content items
// NOTE: Orchard Core dynamically builds query fields using camelCase based on Content Type names.
const GET_ALL_BLOGS_QUERY = `
  query {
    blogPost(status: LATEST) {
       contentItemId
    }
  }
`;
async function getAllBlogs() {
    console.log('Target URL:', ("TURBOPACK compile-time value", "https:/localhost:7199/")); //delete YAC
    console.log('Im at the begining of getAllBlogPosts'); //delete YAC
    const endpoint = `${("TURBOPACK compile-time value", "https:/localhost:7199/")}/api/graphql/`; // Using trailing slash to prevent redirects
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: GET_ALL_BLOGS_QUERY
        }),
        // Revalidate data every hour (3600 seconds) or use 0 to disable caching during testing
        next: {
            revalidate: 0
        }
    });
    console.log(res.ok ? 'resOK' : 'resNotOK'); //delete YAC
    if (!res.ok) {
        throw new Error(`Failed to fetch blogs from Orchard Core. Status: ${res.status}`);
    }
    const json = await res.json();
    if (json.errors) {
        console.error('GraphQL Errors:', json.errors);
        throw new Error('GraphQL execution error occurred.');
    }
    // The key here will match your content type name (e.g., json.data.blog or json.data.blogPost)
    console.log(json); //delete YAC
    return json.data.blogPost || [];
}
async function BlogsPage() {
    const blogs = await getAllBlogs();
    if (blogs.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '2rem',
                fontFamily: 'sans-serif'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Blogs"
                }, void 0, false, {
                    fileName: "[project]/app/blogs/page.tsx",
                    lineNumber: 60,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No blog posts found. Make sure you have created and published posts in Orchard Core."
                }, void 0, false, {
                    fileName: "[project]/app/blogs/page.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blogs/page.tsx",
            lineNumber: 59,
            columnNumber: 17
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "See console logs for now "
    }, void 0, false);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_41d41d66._.js.map