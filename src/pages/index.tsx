import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
// import RTEBOX from '../components/richTextEditor'
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/editor'),
  { ssr: false }
)
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DynamicComponentWithNoSSR />
    </>
  )
}
