export interface PrivacyPolicyContent {
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
}

export class PrivacyPolicyModel implements PrivacyPolicyContent {
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
  constructor(termsData: any) {
    this.title = PrivacyPolicyModel.setTerms(termsData);
    this.description = PrivacyPolicyModel.setTerms(termsData);
  }

  private static setTerms(terms: any): any {
    return {
      title: {AR: terms.titleAr, EN: terms.titleEn},
      description: {AR: terms.descriptionAr, EN: terms.descriptionEn},
    };
  }
}
