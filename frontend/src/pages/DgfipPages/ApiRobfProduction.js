import React from 'react';
import Form from '../../components/templates/Form';
import CadreJuridiqueSection from '../../components/organisms/form-sections/CadreJuridiqueSection';
import HomologationSecuriteSection from '../../components/organisms/form-sections/dgfip-sections/HomologationSecuriteSection';
import RecetteFonctionnelleSection from '../../components/organisms/form-sections/dgfip-sections/RecetteFonctionnelleSection';
import VolumetrieSection from '../../components/organisms/form-sections/dgfip-sections/VolumetrieSection';
import CguSection from '../../components/organisms/form-sections/CguSection';
import ÉquipeInitializerSection from '../../components/organisms/form-sections/ÉquipeSection/ÉquipeInitializerSection';
import { DATA_PROVIDER_PARAMETERS } from '../../config/data-provider-parameters';
import PreviousEnrollmentSection from '../../components/organisms/form-sections/PreviousEnrollmentSection';

const target_api = 'api_robf_production';
const steps = ['api_robf_sandbox', target_api];

const ApiRobfProduction = () => (
  <Form
    target_api={target_api}
    contactEmail={DATA_PROVIDER_PARAMETERS[target_api]?.email}
    documentationUrl="https://api.gouv.fr/producteurs/dgfip"
  >
    <ÉquipeInitializerSection />
    <PreviousEnrollmentSection steps={steps} />
    <RecetteFonctionnelleSection />
    <CadreJuridiqueSection />
    <HomologationSecuriteSection />
    <VolumetrieSection options={[500]} />
    <CguSection cguLink="/docs/cgu_pcr_v1/cgu_api_robf_pcr_prod_2021_v1.0.pdf" />
  </Form>
);

export default ApiRobfProduction;
