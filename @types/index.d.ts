// Type definitions for various components and props
export type NavLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: any;
  services: any;
  resources: any;
  id?: number;
  link: string;
  label: string;
};

export interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// Modal interface
export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
  title?: string;
  size?: "lg" | "md" | "sm" | "xl" | "xxl";
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}

// Toastify interface

export type ToastPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";
export type ToastTheme = "light" | "dark" | "colored";
export type ToastVariant = "info" | "success" | "warning" | "error" | "default";
export interface ToastProps {
  message?: string;
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: ToastTheme;
  type?: ToastVariant;
}

type FaqItemProps = {
  item: {
    question: string;
    answer: string;
  };
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
};

export interface PaystackOptions {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  ref?: string;
  callback: (response: PaystackResponse) => void;
  onClose?: () => void;
  metadata?: Record<string, any>;
  label?: string;
}

export interface PaystackResponse {
  reference: string;
  [key: string]: any;
}
