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

export interface ChallanResultInterface {
  data: {
    Owner_Name: string;
    address: string;
    city: string;
    totalChallans: number;
    challan_last_3_months: number;
    pendingChallanList: Array<{
      date: string;
      place: string;
      name: string;
      amount: number;
      violator: string;
      offence: Array<{ section: string; description: string }>;
    }>;
    disposedChallanList: Array<{
      date: string;
      place: string;
      name: string;
      amount: number;
      violator: string;
      offence: Array<{ section: string; description: string }>;
    }>;
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

export type ChallanHistory = {
  "SL #": string;
  "Checked Date": string;
  "RC Number": string;
  "Status": string;
  "Error Message": string | null;
  "Total Challans": number;
}

export type FCHistory = {
  "SL #": string;
  "Checked Date": string;
  "RC Number": string;
  "Status": string;
  "Error Message": string | null;
  "Total Tags Found": number;
}

export type FHHistory = {
  "SL #": string;
  "Checked Date": string;
  "RC Number": string;
  "Status": string;
  "Error Message": string | null;
  "Total Transactions Found": number;
}