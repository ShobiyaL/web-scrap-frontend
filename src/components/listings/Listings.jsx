import React from "react";


export default function Listings() {
    let products = [
        {
            "website":"Amazon",
    "product":
    "shoes",
    "title":
    "Skechers Men's Classic Fit-Delson-Camden Sneaker",
    "image":
    "https://m.media-amazon.com/images/I/71J7UawwfxL._AC_UL320_.jpg",
    "price":
    "$45.50$65.00",
    "finalPrice":
    "",
    
        },
        {
            "website":
    "flipkart",
    "product":
    "shelves",
    "title":
    "SREYRoadsterAD & AVELANHOOD",
    "image":
    "https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/k/f/i/28-mt…",
    "price":
    "₹480",
    "finalPrize":
    "₹199"
    
        }
    ]
  return (
    <div class="container-fluid">
      {/* s<!-- DataTales Example --> */}
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="d-sm-flex align-items-center justify-content-between ">
            <h1 class="h3 mb-0 text-gray-800">Products</h1>
            
          </div>
          
        </div>

  <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>website</th>
                  <th>product</th>
                  <th>title</th>
                  
                  <th>price</th>
                  <th>finalPrice</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.website}</td>
                    <td>{item.product}</td>
                    <td>{item.title}</td>
                    
                    <td>{item.price}</td>
                    <td>{item.finalPrice}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>
    </div>
  );
}