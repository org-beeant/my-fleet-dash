export type RCResult = {
  Owner_Name: string;
  age: number;
  address: string;
  city: string;
  RC_Valid: boolean;
  taxvalidity: boolean;
  taxpaidupto: Date;
  InsuranceValidity: boolean;
  PUCC_Validity: boolean;
  IsFinance: boolean;
  Blacklisted: string;
  RegisteredAt: string;
  Permit_Validity: boolean;
  Permit_Valid_Upto: Date;
};

export interface RCResultInterface {
  data: {
    Owner_Name: string;
    age: number;
    address: string;
    city: string;
    RC_Valid: boolean;
    taxvalidity: boolean;
    taxpaidupto: string;
    InsuranceValidity: boolean;
    PUCC_Validity: boolean;
    IsFinance: boolean;
    Blacklisted: string;
    RegisteredAt: string;
    Permit_Validity: boolean;
    Permit_Valid_Upto: string;
  };
}

export type History = {
  "SL #": string;
  "Validated Date": string;
  "Vehicle RC number": string;
  "Chassis Number": string;
  Owner: string;
  "Registered at": string;
  Status: string;
  Remarks: string | null;
};
