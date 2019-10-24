import Link from 'next/link';
import Layout from '../components/Layout';
import Member from '../components/Member';

export default () => (
    <Layout header='Whiteboard' title='ゴミローテーション'>
        <p>工事中...</p>
        <Member />
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
