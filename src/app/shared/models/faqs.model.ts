export interface faqsContent {
  faqsList?: faqsListItem[];
  links: links[];
}

export interface faqsListItem {
  question: { AR: string, EN: string };
  answer: { AR: string, EN: string };
}

export interface links {
  title: string;
  link: string;
}

export class FaqsModel implements faqsContent {
  faqsList?: faqsListItem[];
  links: links[];


  constructor(faqsData: any) {
    this.faqsList = FaqsModel.setFaqsList(faqsData.faqItemCollection.items);
    this.links = FaqsModel.setFaqsLink(faqsData.faqItemLinkCollection.items);
  }

  private static setFaqsList(faqsLists: any[]): faqsListItem[] {
    return faqsLists.map((faqsList) => {
      return {
        question: {AR: faqsList.questionAr, EN: faqsList.questionEn},
        answer: {AR: faqsList.answerAr, EN: faqsList.answerEn},
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
