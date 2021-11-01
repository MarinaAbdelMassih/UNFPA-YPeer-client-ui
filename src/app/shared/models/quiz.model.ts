export interface IQuiz {
  id: number,
  questions: IQuestion[]
  result: IResult
}

export interface IQuestion {
  id: number,
  body: string,
  answered: boolean,
  type: string,
  selectedAnswer?: string,
  possibleAnswers: IAnswer[]
}

export interface IAnswer {
  id: number,
  body: string,
  answered: boolean,
  selected?: boolean
}

export interface IResult {
  percentage: number
}
