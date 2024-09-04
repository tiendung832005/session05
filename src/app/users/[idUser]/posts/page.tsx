"use client"
import React from 'react'

export default function page(props:any) {
    const {params} = props;
    const posts = [
        {
            content: 'nhà bà nữ',
            idPost: 155,
            idUser: 1
        },
        {
            content: 'nhà bà nữ',
            idPost: 145,
            idUser: 1
        },
        {
            content: 'nhà bà nữ',
            idPost: 155,
            idUser: 1
        },
    ]
    let postFilter = posts.filter((item)=>{
        return item.idUser == params.idUser
    });


  return (
    <div>
        <h1>Trang dánh ách bài viết của user có id là: {params.idUser}</h1>
        {
            postFilter.map((item, index)=>{
                return <li key={item.idPost}>{item.idUser}</li>
            })
        }
    </div>
  )
}
