import Link from 'next/link'
import { Link as CLink } from '@chakra-ui/react'

export default function Home() {
  return (
    <Link href="/customers">
      <CLink color="teal.500">Customers</CLink>
    </Link>
  )
}
