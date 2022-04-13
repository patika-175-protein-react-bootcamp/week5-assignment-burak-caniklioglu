import React, { useState } from "react";
import { Formik } from "formik";
import clsx from "clsx";
import { toast } from 'react-toastify';
import Moon from "../icons/Moon"; // ay componenti
import Sun from "../icons/Sun"; // gunes componenti
import { formSchema } from "../constants/formSchema"; // yup scheması
import LoadingSvg from "../constants/loading"; // loading gorseli icin component


function FormSide({ isNight, change }) {
  
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // login olup olmadıgını kontrol ediyor
  const [username, setUsername] = useState(''); // hosgeldiniz mesaji icin

  const setServer = (auth) => {  // serverdan gelen auth bilgilerini kullanıyoruz
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuth(true);
      toast.success('Başarılı bir şekilde kayıt oldunuz', 2000);
    }, 3000);
    setUsername(auth.userName); 
  }
  

  return (
    <div className={isNight ? "form-2" : "form-1"}>
      <div className="icon">
        {isNight ? <Sun change={change} /> : <Moon change={change} />}
      </div>
      <div className="form-area">
        <h3 className="header" style={{ color: isNight && "#FEFEFE" }}>
          Kayıt
        </h3>
        <p
          className="header-border"
          style={{ backgroundColor: isNight && "#FFBF5E" }}
        ></p>
        
        {
          isAuth ? 
          <div style={{ color: isNight && "#FEFEFE" }}>Hoşgeldin {username}</div>
          :<Formik
          initialValues={{firstName:'', lastName:'',email: "", userName:'', password: "", passwordCheck: "",checkbox: false}}
          onSubmit = {auth => {
            setServer(auth)
          }}
          validationSchema={formSchema}
        >
          {
            ({values, handleChange, handleSubmit,errors}) => (
              <form className="form" >
            <div className="name-area">
              <div >
                <label className="title" style={{ color: isNight && "#FEFEFE" }}>İSİM</label>
                <input 
                type="text" 
                name="firstName" 
                placeholder="İsmini gir"
                value={values.firstName}
                onChange={handleChange}
                />
                
                <span></span>
              </div>

              <div>
                <label className="title" style={{ color: isNight && "#FEFEFE" }}>SOYİSİM</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Soyisimini gir"
                  value={values.lastName}
                  onChange={handleChange}
                />
                <span></span>
              </div>
            </div>

            <div className={clsx('', {'formError': !!errors.email})}>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>E-POSTA</label>
              <input
                type="text"
                name="email"
                placeholder="E-posta adresini gir"
                value={values.email}
                onChange={handleChange}
              />
              <span>{errors.email}</span>
            </div>

            <div className={clsx('', {'formError': !!errors.userName})}>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>KULLANICI ADI</label>
              <input
                type="text"
                name="userName"
                placeholder="Kullanıcı adını gir"
                value={values.userName}
                onChange={handleChange}
              />
              <span>{errors.userName}</span>
            </div>

            <div className={clsx('', {'formError': !!errors.password})}>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>ŞİFRE</label>
              <input
                type="password"
                name="password"
                placeholder="Şifreni gir"
                value={values.password}
                onChange={handleChange}
              />
              <span>{errors.password}</span>
            </div>

            <div className={clsx('', {'formError': !!errors.passwordCheck})}>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>ŞİFRENİ TEKRAR GİR</label>
              <input
                type="password"
                name="passwordCheck"
                placeholder="Şifreni doğrula"
                value={values.passwordCheck}
                onChange={handleChange}
              />
              <span>{errors.passwordCheck}</span>
            </div>

            <div className="checkbox-area" >
              <input type="checkbox" value={values.checkbox} onChange={() => values.checkbox = !values.checkbox}   />
              <label className="contract">Sözleşmeyi kabul ediyorum</label>
              <span>{errors.checkbox}</span>
            </div>

            <div className="formButton" >
              <button className="registerButton" type="submit" onClick={handleSubmit} disabled={loading}>
              {
                        loading ? <LoadingSvg size={50} /> : 'KAYIT OL'
                      }
                      </button>
              <span></span>
            </div>
          </form>
            )
          }
          
        </Formik>
        }
        
      </div>
    </div>
  );
}

export default FormSide;
