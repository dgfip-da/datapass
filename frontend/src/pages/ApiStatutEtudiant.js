import React from 'react';

import Form from '../components/templates/Form';
import OrganisationSection from '../components/organisms/form-sections/OrganisationSection';
import DescriptionSection from '../components/organisms/form-sections/DescriptionSection';
import DonneesSection from '../components/organisms/form-sections/DonneesSection';
import CadreJuridiqueSection from '../components/organisms/form-sections/CadreJuridiqueSection';
import CguSection from '../components/organisms/form-sections/CguSection';
import ÉquipeSection from '../components/organisms/form-sections/ÉquipeSection';
import { DATA_PROVIDER_PARAMETERS } from '../config/data-provider-parameters';
import { getDefaultDocumentationUrl } from '../components/organisms/Nav';
import PreviousEnrollmentSection from '../components/organisms/form-sections/PreviousEnrollmentSection';
import Link from '../components/atoms/hyperTexts/Link';

export const DonneesDescription = () => (
  <>
    <p>
      La loi informatique et libertés définit les principes à respecter lors de
      la collecte, du traitement et de la conservation de données personnelles.
    </p>
    <p>L’article 6 précise :</p>
    <ul>
      <li>
        3° [les données] sont adéquates, pertinentes et non excessives au regard
        des finalités pour lesquelles elles sont collectées et de leurs
        traitements ultérieurs ;
      </li>
      <li>
        4° Elles sont exactes, complètes et, si nécessaire, mises à jour ; les
        mesures appropriées doivent être prises pour que les données inexactes
        ou incomplètes au regard des finalités pour lesquelles elles sont
        collectées ou traitées soient effacées ou rectifiées ;
      </li>
    </ul>
    <p>
      Nous vous remercions de sélectionner uniquement les données strictement
      nécessaires à votre téléservice. Le non-respect du principe de
      proportionnalité vous expose vis-à-vis de la CNIL.
    </p>
  </>
);

export const CadreJuridiqueDescription = () => (
  <>
    <p>
      Pour pouvoir bénéficier du raccordement à l’API Statut Etudiant, le
      réglementaire des fournisseurs de service doit permettre au Ministère de
      de l'Enseignement Supérieur, de la Recherche et de l'Innovation de
      transmettre des données personnelles à votre entité administrative.
    </p>
    <p>
      Dans le cas où vous représentez une collectivité, veuillez joindre la
      délibération du conseil municipal explicitant l’usage des données
      demandées.
    </p>
    <p>
      Important : à priori, vous n’avez pas de nouvelle délibération à réaliser.
      Il vous suffit de déposer la dernière délibération tarifaire qui détaille
      les barèmes de facturation des services, ou le règlement qui décrit les
      données nécessaires à une instruction.
    </p>
    <p>
      Pour en savoir plus, consultez{' '}
      <Link inline href="https://api.gouv.fr/guides/deliberation-api-part">
        notre guide sur ce qu’est une bonne délibération
      </Link>
      .
    </p>
  </>
);

export const availableScopes = [
  {
    value: 'mesri_identifiant',
    label: 'INE',
    helper: 'Identifiant National de l’Étudiant',
  },
  {
    value: 'mesri_inscription_autre',
    label: 'Inscriptions en formation continue',
    helper:
      'Permet d’interroger les données des étudiants en formation continue. Données : date de début, de fin d’inscription et code COG de la commune du lieu d’étude.',
  },
  {
    value: 'mesri_inscription_etudiant',
    label: 'Inscriptions en formation initiale',
    helper:
      'Permet d’interroger les données des étudiants en formation initiale. Données : dates de début, fin d’inscription et code COG de la commune du lieu d’étude.',
  },
  {
    value: 'mesri_admission',
    label: 'Admissions',
    helper: 'Limite la recherche aux seuls étudiants admis (non-inscrits).',
  },
  {
    value: 'mesri_etablissements',
    label: 'Établissements',
    helper: 'Le ou les établissements (nom et indentifiant - UAI).',
  },
];

const target_api = 'api_statut_etudiant';

const steps = ['franceconnect', target_api];

const ApiStatutEtudiant = () => (
  <Form
    target_api={target_api}
    contactEmail={DATA_PROVIDER_PARAMETERS[target_api]?.email}
    documentationUrl={getDefaultDocumentationUrl(target_api)}
  >
    <PreviousEnrollmentSection steps={steps} />
    <OrganisationSection />
    <DescriptionSection />
    <DonneesSection
      availableScopes={availableScopes}
      DonneesDescription={DonneesDescription}
    />
    <CadreJuridiqueSection
      CadreJuridiqueDescription={CadreJuridiqueDescription}
    />
    <ÉquipeSection />
    <CguSection cguLink="/docs/cgu_api_statut_etudiant.pdf" />
  </Form>
);

export default ApiStatutEtudiant;
