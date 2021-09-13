export interface Account {
  id: string;
  name: string;
  amount: number;
  status: number;
  openDate: string;
  id_imag: string;
  props: Props;
}

export interface Props {
  type: string;
  totalOverdraft: number;
  availableOverdraft?: number;
  debtOverdraft?: number;
}

export interface Credit {
  name: string;
  number: number;
  openDate: string;
  balance: number;
  availableBalance: number;
  debt: number;
  status: number;
  id_imag: string;
  props: Props;
}

export interface Props {
  type: string;
  nextPaymentDate: string;
  nextPaymentAmount: string;
}
