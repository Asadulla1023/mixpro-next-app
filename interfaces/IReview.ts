import IUser from "./IUser";

export default interface IReview {
    userImage: IUser["image"]
    userName: IUser['name']
    rate: number
    review: string
}