export interface homeContent {
  slides: sliderItem[];
  testimonials: testimonialItem[];
  latestCards: latestCardItem[];
}

export interface sliderItem {
  id: number;
  headTitle: {AR: string, EN: string};
  subtitle: {AR: string, EN: string};
  text: {AR: string, EN: string};
  image: string;
}

export interface testimonialItem {
  id: number;
  text: {AR: string, EN: string};
  author: {AR: string, EN: string};
  image: string;
}

export interface latestCardItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
}

export class HomeModel implements homeContent{
  slides: sliderItem[];
  testimonials: testimonialItem[];
  latestCards: latestCardItem[];

  constructor(homeData: any) {
    this.slides = HomeModel.setSlides(homeData.slidesCollection.items);
    this.testimonials = HomeModel.setTestimonials(homeData.testimonialsCollection.items);
    this.latestCards = HomeModel.setLatest(homeData.latestCardsCollection.items);
  }

  private static setSlides(slideItem: any[]): sliderItem[]{
    return slideItem.map((slide) => {
      return {
        id: slide.id,
        headTitle : {AR: slide.headLineAr, EN: slide.headLineEn},
        subtitle : {AR: slide.subtitleAr, EN: slide.subtitleEn},
        text : {AR: slide.textAr, EN: slide.textEn},
        image: slide.image.url
      }
    });
  }

  private static setTestimonials(testimonialItem: any[]): testimonialItem[]{
    return testimonialItem.map((testimonial) => {
      return {
        id: testimonial.id,
        text : {AR: testimonial.textAr, EN: testimonial.textEn},
        author : {AR: testimonial.authorNameAr, EN: testimonial.authorNameEn},
        image: testimonial.image.url
      }
    });
  }

  private static setLatest(latestCard: any[]): latestCardItem[]{
    return latestCard.map((latestCard) => {
      return {
        id: latestCard.id,
        label : {AR: latestCard.labelAr, EN: latestCard.labelEn},
        title : {AR: latestCard.titleAr, EN: latestCard.titleEn},
        description : {AR: latestCard.descriptionAr, EN: latestCard.descriptionEn},
        date : {AR: latestCard.dateAr, EN: latestCard.dateEn},
        image: latestCard.image.url
      }
    });
  }


}
