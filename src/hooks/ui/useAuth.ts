import { Encryption } from "@/utils/encryption";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const token = sessionStorage.getItem(
      process.env.NEXT_PUBLIC_TOKEN as string
    );

    if (token) {
      try {
        const decryptedToken = Encryption.decrypt(token);
        if (decryptedToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Invalid token");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (isAuthenticated === false) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, router]);

  return { isAuthenticated, loading: isAuthenticated === null };
};

export default useAuth;
