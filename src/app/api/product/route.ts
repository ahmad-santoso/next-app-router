import { NextResponse, NextRequest } from "next/server";
import { title } from "process";

const data = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
    },
    {
        id: 2,
        title: 'Sepatu Baru Dong',
        price: 10000000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png"
    }
]

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ 
                status:200, 
                massage: "Success", 
                data: detailProduct 
            })
        }

        return NextResponse.json({ 
            status:404, 
            massage: "Not Found", 
            data: {}
        })
    }
    return NextResponse.json({ status:200, massage: "Success", data })
}