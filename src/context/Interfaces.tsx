

 export interface All {
  clientes: any[];
  tasks: any[] 
}

 export interface All2 {
   clientes: All;
   cliente: string;
   tasks: All;
   id: number;
   title: string;
   description: string;
   done: boolean;
 }

   