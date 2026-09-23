
import Header from "@/components/Header";
import React, { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="min-h-screen text-gray-400">
        <Header />
        <div className="container py-10">
            { children }
        </div>
    </main>
  )
}

export default Layout;