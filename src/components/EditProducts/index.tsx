import {
    Dialog,
    DialogContent,
    // @ts-ignore
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"

import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"

import {api} from "@/services/api"
import {Product} from "@/types/Product"
import { useState } from "react"
  
interface IEditProduct {
  product: Product,
  updateItems: () => void
}


export function EditProduct({product, updateItems}:IEditProduct){
  const [open, setOpen] = useState<boolean>(false);
    const [name,setName] =useState(product.name)
    const [description,setDescription] =useState(product.description)
    const [value,setValue] =useState(product.value)

    const handleEditProduct = async () => {
        const data = {name,description, value }
        // @ts-ignore
        const response = await api.put(`/product/${product.id}/`,data)
        
        updateItems()
        setOpen(false)

    }

    return(
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger >
          <Button>Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
           
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="values" className="text-right">
                Values
              </Label>
              <Input
                id="values"
                className="col-span-3"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </div>
          <DialogFooter>
            <Button type="submit" onClick={handleEditProduct}>Edit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    )
    }