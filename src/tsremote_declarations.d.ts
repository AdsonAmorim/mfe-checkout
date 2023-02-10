declare module "shared/*" {
  export interface ButtonType {
    content: string;
    onClick: () => void;
  }
}
