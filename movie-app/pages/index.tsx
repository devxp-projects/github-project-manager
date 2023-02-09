 import styles from './index.module.scss';
import React, {useState, useEffect} from 'react';
import SplashScreen from '../../libs/src/components/splashscreen';

export function Index() {
  const [loading, setLoading]= useState(false);

  useEffect(() =>{
setLoading(true);

  }, [])
  return (
  
    <div className={styles.page}>
        
    <div className="wrapper">
        <div className='container'>
       {
        loading ?
        <SplashScreen
      
        />
        
        :

     <></>
       }

      

  <footer className={styles.footer}>
Copyright &copy; Victor Abuka
  </footer>
        </div>
  </div>
    </div>
  );
};

export default Index;



