import { Token, TokenModel } from "../model/Token";
import { MainController } from "./mainController";

export class TokenController extends MainController{
    public constructor(token?: Token) {
        super();
        if (token) {
            this.newToken = token;
        }
    }    

    async getTokenByAuth(auth: string) {
        this.connectMongo();
        return await TokenModel.findOne({token: auth});
    }

    async deleteToken(email: string) {
        this.connectMongo();
        return await TokenModel.findOneAndDelete({email: email});
    }
}