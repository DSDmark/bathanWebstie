import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export const useNProgress = () => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleComplete = () => {
      NProgress.done();
    };

    NProgress.configure({ showSpinner: false  });
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
};
