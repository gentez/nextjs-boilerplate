// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {

    // if (req.nextUrl.pathname.startsWith("/profile") && !req.nextauth.token )
    //   return NextResponse.rewrite(
    //     new URL("/auth/login?message=You Are Not Authorized!", req.url)
    //   );
  },
  // {

  // }
);

export const config = {
  matcher: ["/profile"],
};