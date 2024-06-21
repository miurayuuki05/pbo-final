import { ProfileModel, Profile } from '../model/Profile';
import { Token, TokenModel } from '../model/Token';
import { MainController } from './mainController';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class ProfileController extends MainController{
    public constructor(profile?: Profile) {
        super();
        if (profile) {
            this.newProfile = profile;
        }
    }

    async createProfile(profile: Profile) {
        this.connectMongo();
        const newProfile = new ProfileModel(profile);
        return await newProfile.save();
    }

    async getUserProfileById(id: string) {
        this.connectMongo();
        return await ProfileModel.findOne({profileId: id});
    }
}