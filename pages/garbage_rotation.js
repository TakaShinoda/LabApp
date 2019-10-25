import Link from 'next/link';
import Layout from '../components/Layout';
import Memberlist from '../components/Memberlist';

export default () => (
    <Layout header='Whiteboard' title='ゴミローテーション'>
        <Memberlist />
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
