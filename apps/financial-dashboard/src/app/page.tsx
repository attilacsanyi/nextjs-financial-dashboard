import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.page + 'm-2 p-2 bg-lime-400'}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
