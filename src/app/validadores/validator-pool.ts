import { AbstractValidator } from './abstract-validator';

export class ValidatorPool {

    private validators = new Array<AbstractValidator<any>>();
    private messages = new Map<AbstractValidator<any>, string>();
    private lastMessage: string;

    public addValidator(validator: AbstractValidator<any>, message: string) {
        this.validators.push(validator);
        this.messages.set(validator, message);
    }

    public getLastMessage(): string {
        return this.lastMessage;
    }

    public validateAll(): boolean {
        for (let validator of this.validators) {
            if (!validator.validate()) {
                this.lastMessage = this.messages.get(validator);
                return false;
            }
        }
        return true;
    }

}
