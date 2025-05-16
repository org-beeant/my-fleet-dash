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
  jobid: string;
  status: "Pending" | "Processing" | "Success" | "Failed";
  date: string;
};
