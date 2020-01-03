import
{
    AbstractValidator,
    PropertyValidator,
    ValidationError,
}
from './abstract-validator';

export class NonEmptyStringValidator extends AbstractValidator<string> {

    protected defineValidators(): void {

        let prop = this.property;

        this.addValidator(new class implements PropertyValidator {
            validate(): boolean {
                return prop != undefined;
            }
        }, new class implements ValidationError {
            errorMessage(): string {
                return 'Property cannot be undefined';
            }

            invalidProperty() {
                return prop;
            }
        });

        this.addValidator(new class implements PropertyValidator {
            
            validate(): boolean {
                return prop.trim().length != 0;
            }

        }, new class implements ValidationError {
            
            errorMessage(): string {
                return 'Property cannot be empty';
            }
            
            invalidProperty() {
                return prop;
            }
        });
    }
    
}
