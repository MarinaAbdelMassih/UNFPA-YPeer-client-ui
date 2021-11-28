export interface termsContent {
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
}

export class TermsModel implements termsContent {
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
  constructor(termsData: any) {
  this.title = TermsModel.setTerms(termsData);
  this.description = TermsModel.setTerms(termsData);
  }

  private static setTerms(terms: any): any {
      return {
        title: {AR: terms.titleAr, EN: terms.titleEn},
        description: {AR: terms.descriptionAr, EN: terms.descriptionEn},
      };
  }
}
