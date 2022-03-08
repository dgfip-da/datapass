class Enrollment::AidantsConnect < Enrollment
  protected

  def submit_validation
    errors.add(:siret, :invalid, "Vous devez renseigner un SIRET d’organisation valide avant de continuer") unless nom_raison_sociale
    errors.add(:type_projet, :invalid, "Vous devez renseigner le type de la structure avant de continuer") unless type_projet.present?

    errors.add(:organization_address, :invalid, "Vous devez renseigner l’adresse de la structure avant de continuer") unless additional_content&.fetch("organization_address", false)&.present?
    if additional_content&.fetch("organization_postal_code", false)&.present?
      postal_code_regex = /^\d{5}$/
      errors.add(:organization_postal_code, :invalid, "Vous devez renseigner un code postal valide avant de continuer") unless postal_code_regex.match?(additional_content&.fetch("organization_postal_code", ""))
    else
      errors.add(:organization_postal_code, :invalid, "Vous devez renseigner le code postal de la structure avant de continuer")
    end
    errors.add(:organization_city, :invalid, "Vous devez renseigner la ville de la structure avant de continuer") unless additional_content&.fetch("organization_city", false)&.present?

    errors.add(:description, :invalid, "Vous devez préciser les missions de votre structure avant de continuer") unless description.present?

    team_members_validation("responsable_metier", "responsable Aidants Connect")

    errors.add(:cgu_approved, :invalid, "Vous devez valider les modalités d’utilisation avant de continuer") unless cgu_approved?
    unless additional_content&.fetch("has_professional_contact_only", false)&.present?
      errors.add(:has_professional_contact_only, :invalid, "Vous devez valider que la liste des aidants à habiliter contient exclusivement des aidants professionnels avant de continuer")
    end
    unless additional_content&.fetch("has_non_elected_contact_only", false)&.present?
      errors.add(:has_non_elected_contact_only, :invalid, "Vous devez valider qu’aucun élu n’est impliqué dans cette demande d’habilitation")
    end
  end
end
