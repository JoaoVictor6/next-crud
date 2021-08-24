import { ReactNode } from "react";
import Titulo from "./Titulo";

type LayoutProps = {
  children: ReactNode,
  titulo: string,
}

export default function Layout({ children, titulo }: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800
      rounded-md
    `}>
      <Titulo>{titulo}</Titulo>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}
