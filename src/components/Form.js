import React, {useState, useEffect} from "react";
import deco from "../assets/Decoration.svg";


const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errors, setErrors] = useState(null);
    const [sendForm, setSendForm] = useState(false);

   const handleSubmit = e => {
       const newErrors = [];

       if (name.trim().split(/\s+/).length) newErrors.push('Name must contains only one word');
       if (email.trim().length <= 3) newErrors.push('Email must be longer then 3 chars');
       if (!email.indexOf('@') === -1) newErrors.push('Email must contain @');
       if (text.trim().length === 0) newErrors.push('Message can not be empty');


       if (newErrors.length === 0) {
           //jest ok wysylamy
           //fetch POST na endpoint
           //zerujemy inuty
           setName('');
           setEmail('');
           setText('');
       } else {
           e.preventDefault();
       }
   }


    return (

        <div className="form_container">
            <div className="form_start">
                <h3>Skontaktuj się z nami</h3>
                <img src={deco}/>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label className="input_1">Podaj swoje imię:
                            <input type="text" name="name" placeholder="Zuza"
                                   value={name}
                                   onChange={e => setName(e.target.value)}
                            />
                        </label>
                        <label className="input_2">Podaj swój email:
                            <input type="email" name="email" placeholder="bfhsj@mkgsgs"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <label className="text_msg">Wpisz swoją wiadomość:<br></br>
                        <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </label>

                    <input className="sub_button" type="submit" value="Wyślij"/>

                </form>
            </div>
            {/*{newErrors.map(el => <span>{el}</span>)}*/}
        </div>
    );

}

export default Form;