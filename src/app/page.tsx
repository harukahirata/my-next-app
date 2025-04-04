import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
    <h1 className={styles.title}>ようこそ！</h1>
    <p className={styles.description}>これはNext.jsで作ったWebサイトです。</p>
    </>
  )
}