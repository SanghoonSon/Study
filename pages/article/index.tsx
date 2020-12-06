import { User } from "interfaces"
import { GetStaticProps } from "next"
import Link from "next/link"
import { sampleUserData } from "utils/sample-data"
import Layout from '../../components/Layout'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <>
    <h1>Article!!!</h1>
    <Link href="/users">
      <a>유저 가즈아</a>
    </Link>
  </>
);

export const getStaticProps: GetStaticProps = async() => {
  const items: User[] = sampleUserData
  return { props: {items}}
}

export default WithStaticProps;