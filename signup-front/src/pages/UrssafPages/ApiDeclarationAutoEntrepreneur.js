import React from 'react';
import Form from '../../components/templates/Form';
import OrganisationSection from '../../components/organisms/form-sections/OrganisationSection';
import DescriptionSection from '../../components/organisms/form-sections/DescriptionSection';
import DonneesSection from '../../components/organisms/form-sections/DonneesSection';
import CadreJuridiqueSection from '../../components/organisms/form-sections/CadreJuridiqueSection';
import ÉquipeSection from '../../components/organisms/form-sections/ÉquipeSection';
import PiecesJustificativesSection from '../../components/organisms/form-sections/urssaf-sections/PiecesJustificativesSection';
import ContratDeLicenceSection from '../../components/organisms/form-sections/urssaf-sections/ContratDeLicenceSection';
import { CadreJuridiqueDescription } from './common';
import { DATA_PROVIDER_CONTACT_EMAILS } from '../../config/data-provider-parameters';
import { getDefaultDocumentationUrl } from '../../components/organisms/Nav';

const target_api = 'api_declaration_auto_entrepreneur';

const availableScopes = [
  {
    value: 'api040',
    label: 'Estimation des cotisations sociales',
    mandatory: true,
  },
  {
    value: 'api075',
    label:
      'Récupération de la liste des mandats SEPA rattachés à un compte à partir de son siret ou nir',
    mandatory: true,
  },
  {
    value: 'api030',
    label: 'Notification de mandat de tierce déclaration',
    mandatory: true,
  },
  {
    value: 'api031',
    label: 'Annulation de mandat de tierce déclaration',
    mandatory: true,
  },
  {
    value: 'api071',
    label: 'Révocation d’un mandat SEPA d’un compte',
    mandatory: true,
  },
  {
    value: 'api020',
    label: 'Récupération de compte URSSAF AE',
    mandatory: true,
  },
  {
    value: 'api050',
    label: 'Télédéclaration de chiffres d’affaires',
    mandatory: true,
  },
  { value: 'api060', label: 'Télépaiement SEPA', mandatory: true },
  {
    value: 'api070',
    label:
      'Enregistrement d’un mandat SEPA pour un compte identifié par son siret ou nir',
    mandatory: true,
  },
];

const ApiDeclarationAutoEntrepreneur = ({
  match: {
    params: { enrollmentId },
  },
}) => (
  <Form
    enrollmentId={enrollmentId}
    target_api={target_api}
    contactEmail={DATA_PROVIDER_CONTACT_EMAILS[target_api]}
    documentationUrl={getDefaultDocumentationUrl(target_api)}
  >
    <OrganisationSection />
    <DescriptionSection />
    <DonneesSection availableScopes={availableScopes} />
    <CadreJuridiqueSection
      CadreJuridiqueDescription={CadreJuridiqueDescription}
      defaultFondementJuridiqueTitle="articles L.133-11, R133-43 et R133-44 du Code de Sécurité sociale"
      defaultFondementJuridiqueUrl="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033686041/"
    />
    <ÉquipeSection responsableTechniqueNeedsMobilePhone={true} />
    <PiecesJustificativesSection />
    <ContratDeLicenceSection />
  </Form>
);

export default ApiDeclarationAutoEntrepreneur;
