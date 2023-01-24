import { CookieConsent } from "react-cookie-consent";
import styles from './styles.module.scss'

export function Cookies() {
  return (
    <CookieConsent 
    debug={true}
    style={{background: 'var(--gray-100)', marginBottom: '1rem', textAlign: 'justify', width: '350px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '1rem'}}
    buttonStyle={{ color: 'var(--gray-white)', background: 'var(--gray-500)', borderRadius: '8px', padding: '0.5rem 1rem'}}
    buttonText="Confirmar"
    expires={365}
    > 
      <div className={styles.cookies}>
        <h1>
          Salvamos dados da sua visita para melhorar a sua experiência de
          navegação e mostrar ofertas que combinam com você, além da otimização
          do desempenho e segurança do site. você pode configurar suas
          preferências e conferir nossa <a href="">política de privacidade.</a>
        </h1>
      </div>
    </CookieConsent>
  );
}
