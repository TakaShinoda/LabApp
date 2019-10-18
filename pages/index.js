import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='header' title='ホーム'>
        <p>home</p>
        <Link href='./contact_board'>
            <a>連絡板 &gt;&gt;</a>
        </Link>
        <br />
        <Link href='./garbage_rotation'>
            <a> ゴミローテ &gt;&gt;</a>
        </Link>
    </Layout>
);
