import {
  Table,
  TableBody,
  // @ts-ignore
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {useEffect,useState} from "react"
import {Button} from "@/components/ui/button"
import {api} from "@/services/api"
import {Product} from "@/types/Product"

import {AddProducts} from "@/components/AddProducts"
import {EditProduct} from "@/components/EditProducts"
function App() {

  const [produtos,setProdutos] = useState<Product[]>([])

  const getItems = async() => {
    const response = await api.get("/product/")

    if(response.data){
      setProdutos(response.data)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    // @ts-ignore
    const response = await api.delete(`/product/${id}`)
    getItems()
  }

  useEffect(() => {
    getItems()
  },[])

  return (
    <div className="flex p-2 flex-col gap-2">
      <h1 className="text-4xl text-center">Product List</h1>
      <div className="flex w-full justify-end"> <AddProducts updateItems={getItems}/></div>

    <Table>
  <TableHeader>
    <TableRow>
      <TableHead >Name</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Values</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {produtos.map(({id,name, description, value}) => (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{value}</TableCell>
      <TableCell>
        <div className="flex gap-2">

        <EditProduct product={{id,name, description, value}} updateItems={getItems}/>
        <Button className="bg-red-500" onClick={() => handleDeleteProduct(id)}>Delete</Button>
        </div>
      </TableCell>
    </TableRow>

    ))}
  </TableBody>
</Table>
    </div>

  )
}

export default App
