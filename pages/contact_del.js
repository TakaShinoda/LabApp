import Link from 'next/link';
import Layout from '../components/Layout';
import Firedelete from '../components/Firedelete';



export default () => (
    <Layout header='header' title='投稿削除'>
        <Firedelete />
        <Link href='/contact_board'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
);