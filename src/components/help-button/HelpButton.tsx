import styles from './HelpButton.module.css'

const HelpButton = () => {

  const handleClick = () => {
    alert('add help feature');
  }
  return (
    <button className={styles.helpBtn} onClick={handleClick}>Help</button>
  )
}

export default HelpButton