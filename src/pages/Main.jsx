import Navigation from './Navigation'
import { useHistory } from 'react-router-dom'
import style from './main.module.css'

const Main = () => {
    const history = useHistory()

    const encryptionPage = () => {
        console.log('enc')
        history.push('./encryption')
    }
    
    const decryptionPage = () => {
        console.log('dec')
        history.push('./decryption')
    }

    return (
        <div>
            <header>
                <h1>Main Page</h1>
                <Navigation />
            </header>
            <div className={style['container']}>
                <div className={style['content']} onClick={encryptionPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                    </svg>
                    <section>
                        <h1>Encrypt</h1>
                        <p>Here is to <strong>encrypt</strong> a message. Passe the wanter message through the input field and voila</p>
                    </section>
                </div>

                <div className={style['content']} onClick={decryptionPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
                        <path d="M16.75 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
                        <path fillRule="evenodd" d="M15.75 0a8.25 8.25 0 00-7.851 10.79L.513 18.178A1.75 1.75 0 000 19.414v2.836C0 23.217.784 24 1.75 24h1.5A1.75 1.75 0 005 22.25v-1a.25.25 0 01.25-.25h2.735a.75.75 0 00.545-.22l.214-.213A.875.875 0 009 19.948V18.5a.25.25 0 01.25-.25h1.086c.464 0 .91-.184 1.237-.513l1.636-1.636A8.25 8.25 0 1015.75 0zM9 8.25a6.75 6.75 0 114.288 6.287.75.75 0 00-.804.168l-1.971 1.972a.25.25 0 01-.177.073H9.25A1.75 1.75 0 007.5 18.5v1H5.25a1.75 1.75 0 00-1.75 1.75v1a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-2.836a.25.25 0 01.073-.177l7.722-7.721a.75.75 0 00.168-.804A6.73 6.73 0 019 8.25z"></path>
                    </svg>
                    <section>
                        <h1>Decrypt</h1>
                        <p>Here is to <strong>decrypt</strong> a message. Passe the wanter message through the input field and voila</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Main