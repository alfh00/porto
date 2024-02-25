import { FaCopyright, FaDropbox } from 'react-icons/fa'
import { GiCutLemon } from 'react-icons/gi'
import { SiKaspersky } from 'react-icons/si'
import { TbHttpQue } from 'react-icons/tb'

type Exp = {
  icon: React.ElementType
  title: string
  duration: string
  description: string
}

const experiences: Exp[] = [
  {
    icon: GiCutLemon,
    title: 'Développeur',
    duration: '2023',
    description: `Implémentation robuste et conception efficace de domaines d'application (DDD, UML, OOP).
                  API REST
                  Integration des interfaces (html, css, js native et React)
                  Amélioration significative des performances et réduction de temps d’exécution.`,
  },
  {
    icon: FaDropbox,
    title: 'Support & Incident Management',
    duration: '2017-2018',
    description: `Exécution de tests complets, focalisé sur l'analyse approfondie des traces et logs.
                  Diagnostiquer rapidement les problèmes, appliquer des correctifs, et garantir la stabilité.
                  Implémentation proactive de solutions pour la gestion des incidents
                  Rédaction des documentations techniques et fonctionnelles.`,
  },
  {
    icon: SiKaspersky,
    title: 'Support & Incident Management',
    duration: '2015-2017',
    description: `Analyse logs, scripting pour résolution problèmes, automatisation processus
                  Réaliser des interventions à distance, résolution des problèmes utilisant outils et scripts.
                  Rédiger des procédures techniques détaillées pour une résolution efficace des problèmes.
                  Onboarding et encadrement des nouveaux de l'équipe, partage savoir, renforce efficacité collective activement.`,
  },
  {
    icon: TbHttpQue,
    title: 'Chargé d’études et Projets',
    duration: '2020-2022',
    description: `Etudes technique et financière
                  Préparation des dossiers de réponse aux appels d’offres
                  Planification des interventions
                  Suivre, élaborer, fournir les plans et documents techniques nécessaires
                  Résolution des défis techniques liés la faisabilité des projets`,
  },
  {
    icon: FaCopyright,
    title: 'Chargé bureau d’études',
    duration: '2018-2020',
    description: `Conception DAO/CAO
                  Montages des dossiers financiers et techniques d’appels d’offres
                  Suivi et assistance technique auprès des clients`,
  },
]

export default experiences
