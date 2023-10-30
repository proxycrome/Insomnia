import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Insomnia. All rights reserved. </div>
      <div className={styles.socials}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Insomnia facebook" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Insomnia instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Insomnia twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Insomnia youtube" />
      </div>
    </div>
  )
}

export default Footer
