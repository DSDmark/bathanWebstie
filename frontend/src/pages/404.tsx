import { AUTH_ROUTE } from "@/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace(AUTH_ROUTE.main);
  }, [router]);

  return null;
}
