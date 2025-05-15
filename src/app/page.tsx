import styles from './page.module.css';
import { LoginForm } from '@/features/login';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Rabbit Bear Life</h1>
      <p>토끼와 곰돌이만 입장가능</p>
      <LoginForm />
    </div>
  );
}
