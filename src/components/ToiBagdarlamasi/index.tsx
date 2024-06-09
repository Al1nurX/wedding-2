// components/Timeline.tsx
import Image from 'next/image';
import styles from './Timeline.module.scss';
import cake from '../../../public/images/cake.jpeg';

export default function ToiBagdarlamasi() {
  return (
    <div className={styles.timeline}>
      <div className={styles.title}>ТОЙ БАҒДАРЛАМАСЫ</div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <Image src={cake} alt="Жиналу" width={300} height={200} />
          <h2 className='flex text-center '>18:00 ҚОНАҚТАРДЫН ЖИНАЛУЫ</h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <Image src={cake}  alt="Беташар" width={300} height={200} />
          <h2 className='mt-2 text-center '>18:30  <br/>БЕТАШАР</h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <Image src={cake}  alt="Фуршет, фотосессия" width={300} height={200} />
          <h2 className='flex text-center '>19:00 <br/> ФУРШЕТ, ФОТОСЕССИЯ</h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <Image src={cake}  alt="Кұдаларды қарсы алу" width={300} height={200} />
          <h2 className='flex text-center '>19:20 ҚҰДАЛАРДЫ ҚАРСЫ АЛУ</h2>
        </div>
      </div>


      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <Image src={cake}  alt="Фуршет, фотосессия" width={300} height={200} />
          <h2 className='flex text-center '>19:30 <br/> Тойдың ащылуы</h2>
        </div>
      </div>

      
    </div>
  );
};


