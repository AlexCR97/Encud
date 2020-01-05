import { AbstractValidator, PropertyValidator, ValidationError } from './abstract-validator';

export class UnsignedIntegerValidator extends AbstractValidator<number> {
    
    protected defineValidators(): void {
        
        let prop = this.property;

        this.addValidator(new class implements PropertyValidator {
            validate(): boolean {
                return Number.isInteger(prop);
            }
        }, new class implements ValidationError {
            errorMessage(): string {
                return 'Number must be an integer';
            }
            invalidProperty() {
                return prop;
            }
        });

        this.addValidator(new class implements PropertyValidator {
            validate(): boolean {
                return prop >= 0;
            }
        }, new class implements ValidationError {
            errorMessage(): string {
                return 'Number must be positive';
            }
            invalidProperty() {
                return prop;
            }
        });
    }
}
