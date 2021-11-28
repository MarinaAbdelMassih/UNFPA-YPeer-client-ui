export interface faqsContent {
  faqsList?: faqsListItem[];
  faqsAccQuesList?: faqsListItem[];
  links: links[];
}

export interface faqsListItem {
  question: { AR: string, EN: string };
  answer: { AR: string, EN: string };
  expanded: boolean;
}

export interface links {
  title: string;
  link: string;
}

export class FaqsModel implements faqsContent {
  faqsList?: faqsListItem[];
  faqsAccQuesList?: faqsListItem[];
  links: links[];


  constructor(faqsData: any) {
    this.faqsList = FaqsModel.setFaqsList(faqsData.faqItemCollection.items);
    this.links = FaqsModel.setFaqsLink(faqsData.faqItemLinkCollection.items);
    this.faqsAccQuesList = FaqsModel.setFaqsAccList(faqsData.faqItemAccQuestionsCollection.items);
  }

  private static setFaqsList(faqsLists: any[]): faqsListItem[] {
    return faqsLists.map((faqsList) => {
      return {
        question: {AR: faqsList.questionAr, EN: faqsList.questionEn},
        answer: {AR: faqsList.answerAr, EN: faqsList.answerEn},
        expanded: faqsList.expanded
      };
    });
  }

  private static setFaqsAccList(faqsAccQuesList: any[]): faqsListItem[] {
    return faqsAccQuesList.map((faqsList) => {
      return {
        question: {AR: faqsList.questionAr, EN: faqsList.questionEn},
        answer: {AR: faqsList.answerAr, EN: faqsList.answerEn},
        expanded: faqsList.expanded

      };
    });
  }

  private static setFaqsLink(link: any[]): links[] {
    return link.map((url) => {
      return {
        title: url.title,
        link: url.link,
      };
    });
  }
}
