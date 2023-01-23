import {Formation} from './formation-list.types';

export function useFormationList(): Formation[] {
  return [
    {
      name: "RNCP 6 - Concepteur Développeur d'Application",
      host: 'CESI',
      period: 'Octobre 2022 - Septembre 2023',
      picture: 'https://media.licdn.com/dms/image/D4E0BAQFCtXlYLH5E8w/company-logo_200_200/0/1665571253766?e=1682553600&v=beta&t=mmFMdqr1-D4zfwrYLL3ODzjBnOZRufO4geMADyEs3Ao'
    },
    {
      name: 'RNCP 5 - Développeur Informatique',
      host: 'CESI',
      period: 'Septembre 2020 - Septembre 2022',
      picture: 'https://media.licdn.com/dms/image/D4E0BAQFCtXlYLH5E8w/company-logo_200_200/0/1665571253766?e=1682553600&v=beta&t=mmFMdqr1-D4zfwrYLL3ODzjBnOZRufO4geMADyEs3Ao'
    },
    {
      name: 'Baccalauréat Scientifique - Spécialité sciences de l\'ingénieur',
      host: "Ministère de l'Éducation nationale et de la Jeunesse",
      period: 'Juin 2019',
      picture: 'https://media.licdn.com/dms/image/C4E0BAQHUG_7-YXh8tA/company-logo_200_200/0/1590238519240?e=1682553600&v=beta&t=bDkn5oaoJJvsaql8Lc8BnhfEESdaOEtFLjlPeyL9PHo'
    }
  ]
}