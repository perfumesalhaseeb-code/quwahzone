"use client"
import AdminSidebar from "@/componenets/admin/AdminSidebar";
import AdminHeader from "@/componenets/admin/AdminHeader";
import { authService } from "@/libs/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState('admin')

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 1. Get current user
        const user = await authService.getCurrentUser();

        if (!user) {
          router.push('/login');
          return;
        }
        setUser(user.email || '')

        // ✅ All good
        setAuthorized(true);

      } catch (err) {
        console.error('Auth check failed:', err);
        // router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!authorized) {
    return null; // or loading spinner — redirect is already triggered
  }

  return (
    <>
      <AdminSidebar />
      <AdminHeader user={user} />
      <div className="ml-0 md:ml-[245px]"
        style={{ backgroundColor: "var(--color-gray)" }}
      >
        {children}
      </div>
    </>
  );
}
