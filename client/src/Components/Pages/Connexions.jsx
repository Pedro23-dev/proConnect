import React, { useState } from 'react';
import style from "../../Styles/Connexion.module.css"


function Connexion() {
    // Définition des états pour les champs du formulaire
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [sexe, setSexe] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    
    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation des champs du formulaire
        if ( !nom || !prenom || !age || !sexe || !email || !password ) {
            setError('Veuillez remplir tous les champs.');
            return;
        }
        // Soumission des données (peut être envoyé à votre backend pour l'authentification)
        console.log('nom:', nom);
        console.log('Prenom:', prenom);
        console.log('Age:', age);
        console.log('Sexe:', sexe);
        
        console.log('Email:', email);
        console.log('Password:', password);
        // Réinitialisation des champs du formulaire
        setNom('');
        setPrenom('');
        setAge('');
        setSexe('');
        setEmail('');
        setPassword('');
        setError('');
    };
 
    return (
        
            
        
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className={style.titre} >Inscription</h1>

            <div className={style.Form_group}>
                    <label htmlFor="nom"></label>
                    <input
                        type="nom"
                        id="nom"
                        value={nom}
                        placeholder='Nom'
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>
                
                
            <div className={style.Form_group}>
                    <label htmlFor="prenom"></label>
                    <input
                        type="prenom"
                        id="prenom"
                        value={prenom}
                        placeholder='Prenom'
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </div>

                
            <div className={style.Form_group}>
                    <label htmlFor="age"></label>
                    <input
                        type="number"
                        id="age"
                        min={18}
                        max={100}
                        value={age}
                        placeholder='Age'
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className={style.Form_group}>
                    <label htmlFor="sexe"></label>
                   <select name="sexe" id="sexe " onChange={(e) => setEmail(e.target.value)}
                        required>
                    <option value="">Choisir</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>



                   </select>
                </div>

                <div className={style.Form_group}>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Email '
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>


                <div className={style.Form_group}>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Mot de passe '
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Connexion</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
       
    );
}

export default Connexion;
