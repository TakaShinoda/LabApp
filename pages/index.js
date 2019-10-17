import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='header' title='title'>
        <p>hoge</p>
        <Link href='./contact'>
            <a>連絡板 &gt;&gt;</a>
        </Link>
        <br />
        <Link href='./other'>
            <a> ゴミローテ &gt;&gt;</a>
        </Link>
    </Layout>
);
