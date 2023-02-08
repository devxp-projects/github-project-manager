 import styles from './index.module.scss';
import Trial from './Trial'
import React, {useState, useEffect} from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import SplashScreen from './splashscreen';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
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



