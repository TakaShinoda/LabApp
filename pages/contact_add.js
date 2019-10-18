import Link from 'next/link';
import Layout from '../components/Layout';
import Fireadd from '../components/Fireadd';



export default () => (
    <Layout header='header' title='新規連絡投稿'>

        <Fireadd />
        <Link href='/contact_board'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
);