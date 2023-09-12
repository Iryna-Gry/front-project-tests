export type UserResponse = {
  firstName: string
    lastName: string
  email: string
}
export interface UserLogInRequest {
    email: string
    password: string
}
export interface UserSignUpRequest {
  firstName: string
    lastName: string
    email: string
    password: string
}
export type UserT = {
  firstName?: string
    lastName?: string
    email: string
    password?: string
}
export type LanguageTopicAttempt = {
  date: string
  id: string
  points: string
  success: boolean 
}
export type LanguageTopicT = {
name: string
        id: string
        description: string
        attempts: LanguageTopicAttempt[]
          
}
export type LanguageT = {
  full_name: string
  id: string,
  icon: string,
  topics: LanguageTopicT[]
}
export type QuestionAnswerOptionT = {
  text: string
  isCorrect: boolean
}
export type QuestionT = {
  id: string
  question: string
  options: QuestionAnswerOptionT[]
}