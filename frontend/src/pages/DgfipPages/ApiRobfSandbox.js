import React from 'react';
import Form from '../../components/templates/Form';
import DescriptionSection from '../../components/organisms/form-sections/DescriptionSection';
import OrganisationSection from '../../components/organisms/form-sections/OrganisationSection';
import CguSection from '../../components/organisms/form-sections/CguSection';
import ÉquipeSection from '../../components/organisms/form-sections/ÉquipeSection';
import CadreJuridiqueSection from '../../components/organisms/form-sections/CadreJuridiqueSection';
import { additionalTermsOfUse, DataAreInTermsOfUseDescription } from './common';
import DonneesSection from '../../components/organisms/form-sections/DonneesSection';
import { DATA_PROVIDER_PARAMETERS } from '../../config/data-provider-parameters';
import PreviousEnrollmentSection from '../../components/organisms/form-sections/PreviousEnrollmentSection';

const target_api = 'api_robf_sandbox';
const steps = [target_api, 'api_robf_production'];

const ApiRobfSandbox = () => (
  <Form
    target_api={target_api}
    contactEmail={DATA_PROVIDER_PARAMETERS[target_api]?.email}
    documentationUrl="https://api.gouv.fr/producteurs/dgfip"
  >
    <PreviousEnrollmentSection steps={steps} />
    <OrganisationSection />
    <DescriptionSection />
    <DonneesSection
      AvailableScopesDescription={DataAreInTermsOfUseDescription}
    />
    <CadreJuridiqueSection />
    <ÉquipeSection />
    <CguSection
      cguLink="/docs/cgu_pcr_v1/cgu_api_robf_pcr_bas_2021_v1.0.pdf"
      additionalTermsOfUse={additionalTermsOfUse}
    />
  </Form>
);

export default ApiRobfSandbox;
