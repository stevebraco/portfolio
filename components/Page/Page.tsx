import React, { ReactNode } from 'react'
import Header from '../Header/Header'

type PageProps = {
  children: ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Page
