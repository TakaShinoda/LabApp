import Link from 'next/link';
import Layout from '../components/Layout';
import Fireadd from '../components/Fireadd';

export default () => (
    <Layout header='Whiteboard' title='新規投稿'>
        <Fireadd />
        <Link href='/contact_board'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
);