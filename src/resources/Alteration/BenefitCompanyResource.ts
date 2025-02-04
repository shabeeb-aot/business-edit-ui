import { CorrectionTypes, FilingCodes, NameRequestEntityTypes } from '@/enums/'
import { CorpTypeCd, GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module/'
import { ResourceIF } from '@/interfaces/'

export const BenefitCompanyResource: ResourceIF = {
  entityReference: 'Company',
  contactLabel: 'Registered Office',
  displayName: GetCorpFullDescription(CorpTypeCd.BENEFIT_COMPANY),
  nameRequestType: NameRequestEntityTypes.BC,
  addressLabel: 'Registered Office',
  filingData: {
    filingTypeCode: FilingCodes.ALTERATION,
    entityType: CorpTypeCd.BENEFIT_COMPANY,
    priority: false
  },
  changeData: {
    nameChangeOptions: [
      CorrectionTypes.CORRECT_NEW_NR,
      CorrectionTypes.CORRECT_NAME_TO_NUMBER
    ]
  },
  certifyClause: 'Note: It is an offence to make a false or misleading statement in respect ' +
    'of a material fact in a record submitted to the Corporate Registry for filing. ' +
    'See section 427 of the Business Corporations Act.'
}
