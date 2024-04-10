'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";
import axios from "axios";

const RelatedPost = ({category}:{category:string}) => {

  const [blogList, setBlogList] = useState<any[]>([])

  useEffect(() => {
    if(category){
      axios.post('/api/blog/fetchCategory',{
        category
      }).then((res)=>{
        if(res.data.success){
          setBlogList(res.data.result)
        }
      }).catch((error)=>{
        console.log(error)
      })
    }
  }, [])
  

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts 
        </h4>

        <div>
          {blogList.map((post, key) => (
            <Link
              className="mb-7.5 flex gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key} href={`/blog/${post.id}`}            >
              <div className="max-w-45 relative h-18 w-45">
                {post.hero ? (
                  <Image fill src={post.hero} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <div>
                  {" "}
                  {post.title.slice(0, 40)}...
                </div>
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
