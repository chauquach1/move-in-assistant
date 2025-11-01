// Class Definition(s)
class Person {
  fullName: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  prospectDisplayId: string;
  prospectId?: number;
  email: string;
  phoneNumber: string;
  classification?: string; // e.g. Tenant or Guarantor
  propertyId?: number;

  constructor(
    fullName: string,
    firstName: string,
    lastName: string,
    prospectDisplayId: string,
    prospectId: number,
    email: string,
    phoneNumber: string,
    middleName?: string,
    classification?: string,
    propertyId?: number
  ) {
    this.fullName = fullName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.prospectDisplayId = prospectDisplayId;
    this.prospectId = prospectId;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.classification = classification;
    this.propertyId = propertyId;
  }
}


// Exports:
export { Person };