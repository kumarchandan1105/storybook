import i18next from 'i18next';
import{Button} from './en'

i18next.init({
  lng: 'en', 
  debug: true,
  resources: {
    en: {
      translation: {
        buttonLabel:Button
      }
    }
  }
});

