import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='header' title='ゴミローテーション'>
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
