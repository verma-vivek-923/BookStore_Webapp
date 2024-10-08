import React from 'react'

function card(item) {
    // console.log(item)
  return (
    <>
    <div className='mt-12'>
    <div className="card bg-base-100 p-2 m-1 bg-base-200  shadow-xl">
  <figure>
    <img
      src={item.item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body px-0 md:p-2">
    <h2 className="card-title text-sm m-0 p-0">
      {item.item.name}
      <div className="badge badge-secondary text-black font-semibold text-xs m-0 p-2">{item.item.category}</div>
    </h2>
    <p>{item.item.tittle}</p>
    <div className="card-actions gap-0 justify-between">
      <div className="badge badge-outline  mt-1">Rs. {item.item.price}</div>
      <div className=" badge badge-outline hover:bg-pink-500 hover:text-black duration-300 px-4 py-3 rounded-md">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default card
