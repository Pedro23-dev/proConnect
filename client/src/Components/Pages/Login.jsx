import React, { useState } from 'react';
import style from "../../Styles/Login.module.css"

 

function Login() {
    // Définition des états pour les champs du formulaire
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    
    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation des champs du formulaire
        if (!email || !userName|| !password ) {
            setError('Veuillez remplir tous les champs.');
            return;
        }
        // Soumission des données (peut être envoyé à votre backend pour l'authentification)
        console.log('Email:', email);
        console.log('userName:', userName);
        console.log('Password:', password);
        // Réinitialisation des champs du formulaire
        setEmail('');
        setuserName('');
        setPassword('');
        setError('');
    };
 

    return (
        
            
        
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className={style.titre} >Connexion</h1>

                <div className={style.Form_group}>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={style.Form_group}>
                    <label htmlFor="userName"></label>
                    <input
                        type="userName"
                        id="userName"
                        value={userName}
                        placeholder='UserName'
                        onChange={(e) => setuserName(e.target.value)}
                        required
                    />
                </div>

                <div className={style.Form_group}>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Connexion</button>
                <p>Pas encore de compte ? <a href="./Signup.jsx">Inscrivez-vous</a></p>

            </form>
            {error && <p className="error">{error}</p>}
        </div>
        
    );
}

export default Login;
