import React, { ReactNode } from 'react'

export interface MyTextProps {
  children?: ReactNode
}

export function MyText({ children }: MyTextProps) {
  return <div>{children}</div>
}
