import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='header' title='title'>
        <p>連絡板</p>
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
