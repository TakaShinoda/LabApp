import Link from 'next/link';
import Layout from '../components/Layout';
import Firedelete from '../components/Firedelete';
import Firelist from '../components/Firelist';

export default () => (
    <Layout header='Whiteboard' title='投稿削除'>
        <Firedelete />
        <Firelist />
        <Link href='/contact_board'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
);