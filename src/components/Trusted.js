import React from 'react'

const Trusted = () => {
  const companies=[
    'https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375996518-DZU53FYNB3FMBYB1JHG6/HP-logo+2021.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vlgdbtq7w4yKGX3YyZnZmaOnTH41YN2zDg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1k-Ep-QDejkbZnyZbCpFR1YJ5RiaFu5Xxw&usqp=CAU',
    'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Screen-Shot-2022-05-23-at-11.09.29-AM.png?auto=format&q=60&fit=max&w=930',
    'https://optimise2.assets-servd.host/dig-upsiide/production/images/coca.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1651608195&s=7d29d7cee4b0568d50ce257433a77c15',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-hHg2A1YBba9F6sghRbDC0ZmzqoXI8jm2Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKY9pswIQKykxlbWq_j1tUCKkewQ8Vv4wRg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrgUIR1xsuDJ_uV3sLO66i6W07GZzVxDoowF4PGDbB3DNcYxpiRFk43W5yXqcaoVhqs8&usqp=CAU'

  ]

  return (
    <div className="flex flex-wrap border-4 justify-center max-w-4xl p-2 mx-auto space-y-10 space-x-5 ">
      {
        companies.map((company,index)=>{
          return (
        <div key={index} className="trusted-images relative bg-white w-[180px] postshadow flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 rounded-xl
            ">
          <div className="h-[80px]">
            <img src={company} className=""/>
          </div>
        </div>
          )
        })
      }

    </div>
  )
}

export default Trusted
