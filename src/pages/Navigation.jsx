import { useHistory } from 'react-router-dom'
import style from './navigation.module.css'


const Navigation = () => {
    const history = useHistory()
    
    const encryptionPage = () => {
        history.push('./encryption')
    }
    
    const decryptionPage = () => {
        history.push('./decryption')
    }

    return (
        <nav>
            <div className={style['navigation']}>
                <button onClick={encryptionPage}>ENCRYPTION</button>
                <button onClick={decryptionPage}>DECRYPTION</button>
            </div>
        </nav>
    )
}

export default Navigation