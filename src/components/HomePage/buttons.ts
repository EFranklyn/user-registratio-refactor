export interface ButtonSchema {
  name: string;
  label: String,
  color: String
  to:String
}

export const buttons: ButtonSchema[] = [
  {
    name: 'Register User',
    label: 'Register User',
    color:'blue',
    to:'Form'
  },
  {
    name: 'About',
    label: 'List Users',
    color:'blue',
    to:'About'
  },
];