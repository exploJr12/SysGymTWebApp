import { Bill } from "./bill"

export interface DetaillsBill {
    id_Bill: number
  id_Usuario: number
  id_Customer: number
  id_Products: number
  sale_Total: number
  register_Date: string
  detaillsBill: Bill
}
