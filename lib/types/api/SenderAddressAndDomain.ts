import { Common } from '@mailjet/types/api/Common';

export namespace Sender {
  export enum EmailType {
    Transactional = 'transactional',
    Bulk = 'bulk',
    Unknown = 'unknown'
  }

  export enum SenderStatus {
    Inactive = 'Inactive',
    Active = 'Active',
    Deleted = 'Deleted',
  }

  export interface ISender {
    ID: number;
    EmailType: EmailType;
    IsDefaultSender: boolean;
    Name: string;
    CreatedAt: string;
    DNSID: number;
    Email: string;
    Filename: string;
    Status: SenderStatus;
  }

  export interface ISenderValidate {
    ValidationMethod: string;
    Errors: string;
    GlobalError: string;
  }

  // REQUEST PART
  export type PostSenderBody = {
    Email: string;
    EmailType?: EmailType;
    IsDefaultSender?: boolean;
    Name?: string;
  }

  export type PutSenderBody = Omit<PostSenderBody, 'Email'>

  export type GetSenderQueryParams = Partial<Common.IPagination> & {
    DnsID?: number;
    Domain?: string;
    Email?: string;
    IsDomainSender?: boolean;
    LocalPart?: string;
    ShowDeleted?: boolean;
    Status?: SenderStatus;
  }

  // RESPONSE PART
  type SenderResponse = Common.TResponse<ISender[]>;

  export type PostSenderResponse = SenderResponse
  export type PutSenderResponse = SenderResponse
  export type GetSenderResponse = SenderResponse

  export type PostSenderValidateResponse = Common.TResponse<ISenderValidate[]>;
}

export namespace Metasender {
  export interface IMetaSender {
    ID: number;
    Description: string;
    CreatedAt: string;
    Email: string;
    Filename: string;
    IsEnabled: boolean;
  }

  // REQUEST PART
  export type PostMetaSenderBody = {
    Email: string;
    Description?: string;
  }

  export type PutMetaSenderBody = Omit<PostMetaSenderBody, 'Email'>

  export type GetMetaSenderQueryParams = Partial<Common.IPagination> & {
    DNS?: number;
  }

  // RESPONSE PART
  type MetaSenderResponse = Common.TResponse<IMetaSender[]>;

  export type PostMetaSenderResponse = MetaSenderResponse
  export type PutMetaSenderResponse = MetaSenderResponse
  export type GetMetaSenderResponse = MetaSenderResponse
}

export namespace DNS {
  export enum DKIMConfigurationCheckStatus {
    OK = 'OK',
    Error = 'Error',
    NotChecked = 'Not checked'
  }

  export enum DKIMConfigurationStatus {
    OK = 'OK',
    Error = 'Error'
  }

  export enum SPFConfigurationCheckStatus {
    OK = 'OK',
    Error = 'Error',
    NotChecked = 'Not checked',
    NotFound = 'Not found',
  }

  export enum SPFConfigurationStatus {
    OK = 'OK',
    Error = 'Error'
  }

  export interface IDNS {
    ID: number;
    DKIMRecordName: string;
    DKIMRecordValue: string;
    DKIMStatus: DKIMConfigurationCheckStatus;
    Domain: string;
    IsCheckInProgress: boolean;
    LastCheckAt: string;
    OwnerShipToken: string;
    OwnerShipTokenRecordName: string;
    SPFRecordValue: string;
    SPFStatus: SPFConfigurationCheckStatus;
  }

  export interface IDNSCheck {
    DKIMErrors: string;
    DKIMRecordCurrentValue: string;
    DKIMStatus: DKIMConfigurationStatus;
    SPFErrors: string;
    SPFRecordCurrentValue: string;
    SPFStatus: SPFConfigurationStatus;
  }

  // REQUEST PART
  export type IGetDNSQueryParams = Partial<Common.IPagination> & {
    IsCheckInProgress?: boolean;
    IsSenderIdentified?: boolean;
    IsYahooFBL?: boolean;
    MaxLastCheckAt?: string;
    MinLastCheckAt?: string;
    SPFStatus?: SPFConfigurationCheckStatus;
  }

  // RESPONSE PART
  export type GetDNSResponse = Common.TResponse<IDNS[]>;
  export type PostDNSCheckResponse = Common.TResponse<IDNSCheck[]>;
}
