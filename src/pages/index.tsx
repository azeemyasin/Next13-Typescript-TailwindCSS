import { NextPage } from 'next'
import Home from '@/components/Home'
import Layout from '@/components/Layout'

const HomePage: NextPage = () => {
  return (
    <>
    <Layout>
      <Home/>
      </Layout>
    </>
  )
}

export default HomePage
