import { Loader } from "@/components";
import { PROTECTED_ROUTE } from "@/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(PROTECTED_ROUTE.dashboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return <Loader loading />;
};

export default RedirectLayout;
