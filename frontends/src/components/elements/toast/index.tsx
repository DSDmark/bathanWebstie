import { useMaxToasts } from "@/hooks";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToasterWithMax({
  max = 1,
  ...props
}: React.ComponentProps<typeof Toaster> & {
  max?: number;
}) {
  useMaxToasts(max);

  return (
    <Toaster
      position="top-center"
      toastOptions={{ style: { maxWidth: "calc(44.33vw)" } }}
      {...props}
    />
  );
}
