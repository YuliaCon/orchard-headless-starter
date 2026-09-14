module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/blogs/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 1. Define the GraphQL query to fetch the content items
// NOTE: Orchard Core dynamically builds query fields using camelCase based on Content Type names.
__turbopack_context__.s([
    "default",
    ()=>BlogsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const GET_ALL_BLOGS_QUERY = `
  query {
    blogPost(status: LATEST) {
       contentItemId
       createdUtc
       displayText
       markdownBody {
           html
       }
    }
  }
`;
async function getAllBlogs() {
    console.log('Target URL:', ("TURBOPACK compile-time value", "https:/localhost:7199"));
    // 1. URL-encode the GraphQL query string
    const queryParam = encodeURIComponent(GET_ALL_BLOGS_QUERY);
    // 2. Append it as a query string parameter (?query=...)
    const endpoint = `${("TURBOPACK compile-time value", "https:/localhost:7199")}/api/graphql/?query=${queryParam}`;
    try {
        const res = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            next: {
                revalidate: 0
            }
        });
        console.log({
            'res': res
        }); // delete YAV
        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }
        const json = await res.json();
        return json.data?.blogPost || [];
    } catch (networkError) {
        // This catches low-level network issues (DNS failure, CORS, connection refused)
        console.log("🚨 Low-Level Fetch Network Failure:", networkError.message || networkError);
        throw networkError;
    }
}
async function BlogsPage() {
    const blogs = await getAllBlogs();
    console.log(blogs);
    if (blogs.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '2rem',
                fontFamily: 'sans-serif'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Blogs"
                }, void 0, false, {
                    fileName: "[project]/app/blogs/page.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No blog posts found. Make sure you have created and published posts in Orchard Core."
                }, void 0, false, {
                    fileName: "[project]/app/blogs/page.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blogs/page.tsx",
            lineNumber: 62,
            columnNumber: 17
        }, this);
    }
    // 1. Sort the blog posts by date: latest (newest) first
    const sortedBlogs = [
        ...blogs
    ].sort((a, b)=>new Date(b.createdUtc).getTime() - new Date(a.createdUtc).getTime());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    borderBottom: '2px solid #eee',
                    paddingBottom: '0.5rem'
                },
                children: "Latest Blog Posts"
            }, void 0, false, {
                fileName: "[project]/app/blogs/page.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    marginTop: '2rem'
                },
                children: sortedBlogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        style: {
                            border: '1px solid #e1e1e1',
                            padding: '1.5rem',
                            borderRadius: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: '0 0 0.5rem 0',
                                            color: '#1a1a1a'
                                        },
                                        children: blog.displayText || "Untitled Post"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blogs/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this),
                                    blog.createdUtc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: '#666'
                                        },
                                        children: [
                                            "Published on: ",
                                            new Date(blog.createdUtc).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blogs/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blogs/page.tsx",
                                lineNumber: 85,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1rem',
                                    lineHeight: '1.6',
                                    color: '#333'
                                },
                                children: blog.markdownBody?.html ? /* Using dangerouslySetInnerHTML because Orchard Core HTML fields return raw HTML strings */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: blog.markdownBody.html
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No content available for this post."
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/page.tsx",
                                lineNumber: 97,
                                columnNumber: 29
                            }, this)
                        ]
                    }, blog.contentItemId, true, {
                        fileName: "[project]/app/blogs/page.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/blogs/page.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blogs/page.tsx",
        lineNumber: 75,
        columnNumber: 13
    }, this);
}
}),
"[project]/app/blogs/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blogs/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d80ab295._.js.map