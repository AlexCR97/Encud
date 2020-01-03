export interface PropertyValidator {
    validate(): boolean;
}

export interface ValidationError {
    errorMessage(): string;
    invalidProperty(): any;
}

export abstract class AbstractValidator<T> {

    protected property: T;
    private validators = new Array<PropertyValidator>();
    private errors = new Map<PropertyValidator, ValidationError>();
    private lastError: ValidationError;

    constructor(property: T) {
        this.property = property;
        this.defineValidators();
    }

    protected abstract defineValidators(): void;

    protected addValidator(validator: PropertyValidator, error: ValidationError): void {
        this.validators.push(validator);

        if (error != null) {
            this.errors.set(validator, error);
        }
    }

    public getLastError(): ValidationError {
        return this.lastError;
    }

    public validate(): boolean {
        for (let validator of this.validators) {
            if (!validator.validate()) {
                
                let error: ValidationError = this.errors.get(validator);
                
                if (error != null) {
                    this.lastError = error;
                }

                return false;
            }
        }
        
        return true;
    }
}
