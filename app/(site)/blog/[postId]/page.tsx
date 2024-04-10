"use client";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { marked } from "marked";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Blog Details Page - Solid SaaS Boilerplate",
//   description: "This is Blog details page for Solid Pro",
//   // other metadata
// };

const SingleBlogPage = ({ params }) => {
  const [blogData, setBlogData] = useState<any>();
  const [loader, setLoader] = useState(true);

  function getMarkdownText(unMarkedString: string) {
    var rawMarkup = marked.parse(unMarkedString.replace(/\\n/g, "\n"));
    console.log("Before:", unMarkedString);
    console.log("After:", rawMarkup);
    return rawMarkup;
  }

  useEffect(() => {
    setLoader(true);
    axios
      .post("/api/blog/fetchMarkdown", {
        postId: params.postId,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result[0]);
          setBlogData(res.data.result[0]);
        }
        setLoader(false);
      });
  }, []);

  return (
    <>
      <section className="min-h-screen  pb-20 pt-10 lg:pb-25 lg:pt-18 xl:pb-30 xl:pt-20">
        {loader ? (
          <div className="flex h-[100%] w-full items-center justify-center pt-20">
            <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-primary"></div>
          </div>
        ) : (
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
              <div className="md:w-1/2 lg:w-[32%]">
                {blogData && blogData.category && (
                  <RelatedPost category={blogData.category} />
                )}
              </div>

              <div className="mt-10 lg:mt-0 lg:w-2/3">
                <div className="animate_top rounded-md border border-stroke bg-white p-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                  {blogData && (
                    <div
                      className="markdown-content text-slate-800 dark:text-slate-200"
                      dangerouslySetInnerHTML={{
                        __html: getMarkdownText(blogData.markdown),
                      }}
                    />
                  )}

                  {/* <SharePost /> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <style>{`

      // GENERAL 

        .markdown-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-weight: 600;
        }

        .markdown-content h1 {
          margin-top: 30px;
          font-size: 32px;
          line-height: 2.5rem;
          font-weight: 600;
        }

        .markdown-content h2 {
          margin-top: 30px;
          line-height: 2.2rem;
          font-weight: 500;
          font-size: 24px;
        }

        .markdown-content h3 {
          margin-top: 30px;
          line-height: 2.2rem;
          font-weight: 500;
          font-size: 22px;
        }

        .markdown-content h4 {
          line-height: 2.2rem;
          font-weight: 500;
          margin-top: 30px;
          font-size: 21px;
        }

        .markdown-content h5 {
          font-weight: 500;
          margin-top: 30px;
          line-height: 2.2rem;
          font-size: 20px;
        }

        .markdown-content h6 {
          margin-top: 30px;
          font-weight: 500;
          line-height: 2.2rem;
          font-size: 18px;
        }

        .markdown-content p {
          font-size: 16px;
          font-weight: 400;
          margin-top: 10px
        }

        img {
          width: 100%;
          border-radius: 5px;
        }

        @media (max-width: 767px) {
          .markdown-content {
            gap: 10px;
          }

          .markdown-content h1 {
            margin-top: 10px;
            font-size: 26px;
            line-height: 2.2rem;
          }

          .markdown-content h2 {
            font-size: 22px;
          }

          .markdown-content h3 {
            font-size: 20px;
          }

          .markdown-content h4 {
            font-size: 19px;
          }

          .markdown-content h5 {
            font-size: 18px;
          }

          .markdown-content h6 {
            font-size: 17px;
          }

          .markdown-content p {
            font-size: 16px;
            text-align: justify;
          }

          img {
            width: 100%;
            border-radius: 5px;
          }
        }

        
      `}</style>
    </>
  );
};

export default SingleBlogPage;
