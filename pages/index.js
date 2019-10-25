import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='Whiteboard' title='Home'>
        <Link href='./contact_board'>
            <a>連絡板 &gt;&gt;</a>
        </Link>
        <br />
        <Link href='./garbage_rotation'>
            <a>ゴミローテ &gt;&gt;</a>
        </Link>
        <br />
        <Link href='./admin'>
            <a>Admin</a>
        </Link>
    </Layout>
);
