"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b70e45d9-437e-4914-ac3d-7332a0aa1600");
  }, []);

  return null;
};